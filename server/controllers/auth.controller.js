import { Applicant } from "../models/applicant.schema.js"
import { jobrecruiter } from "../models/recruiter.schema.js"
import dotenv, { populate } from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import path from "path"
import { log } from "console"
dotenv.config()

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Input missing" });
        }

        const recruiter = await jobrecruiter.findOne({ email });
        const applicant = await Applicant.findOne({ email });
        const user = recruiter || applicant

        if (!user) {
            return res.status(404).json({ message: "User does not exist, please signup" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        const userType = recruiter ? "recruiter" : "applicant";
        const token = jwt.sign({ username: user.username, type: userType }, process.env.JWT_KEY);

        res.status(200).json({ message: "Login success", uid: token });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const Signup = async (req, res) => {
    try {
        const { name, username, email, password, userType } = req.body
        if (!(name || username || email || password)) {
            res.status(400).json({ message: "input missing" })
        }

        const applicant = await Applicant.findOne({ $or: [{ username }, { email }] })
        const recruiter = await jobrecruiter.findOne({ $or: [{ username }, { email }] })

        if (applicant || recruiter) {
            return res.status(409).json({ message: "user already exist" })
        }

        const saltRound = parseInt(process.env.SALT);
        const hash_pass = await bcrypt.hash(password, saltRound)

        let user;
        if (userType == 'applicant') {

            user = (await Applicant.create({ name, username, email, password: hash_pass }))
        }
        else {
            console.log("jejk");
            user = (await jobrecruiter.create({ name, username, email, password: hash_pass }))
        }
        // console.log(userType);
        
        const token = jwt.sign({ username: user.username, type: userType }, process.env.JWT_KEY)

        res.status(200).json({ message: "user signup successfully", uid: token })

    }
    catch (err) {
        res.status(500).json({ message: "server internal error", err: err })
    }
}

const getUser = async (req, res) => {
    try {
        const { username, type } = req.tokenData

        let user = null;
        if (type === 'applicant') {
            user = await Applicant.findOne({ username }, '-password').populate('savedjob appliedjob')
        }
        else {
            user = await jobrecruiter.findOne({ username }, '-password').populate({path:'postedJobs' , populate:{path:'appliedApplicant'}})
        }
        // console.log(user)

        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }

        res.status(200).json({ message: "user exist", data: user })

    }

    catch (err) {
        res.status(500).json({ message: "server internal error", err: err })

    }
}


export { Login , Signup , getUser }