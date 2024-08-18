import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { Applicant } from "../models/applicant.schema.js"
import { jobrecruiter } from "../models/recruiter.schema.js"

import fs from 'fs'
dotenv.config()






const updateApplicant = async (req, res) => {
    try {
        const { username, type } = req.tokenData
        const data = req.body

        if (!data) {
            res.status(400).json({ message: "input missing" })
        }
        const applicant = await Applicant.findOneAndUpdate({ username: username }, data, { new: true, projection: '-password' }).populate('savedjob appliedjob')
        if (applicant === null) {
            return res.status(404).json({ message: "data not found" })
        }
        res.status(200).json({ message: "data updated", data: applicant })

    }
    catch (err) {
        res.status(500).json({ message: "server internal error", err: err })

    }
}

const UploadApplicantFile = async (req, res) => {
    const localpath = req.files[0].path;
    try {
        // console.log(req.files);
        const result = await uploadFile(localpath)
        fs.unlinkSync(localpath)
        res.status(200).json({ message: "file uploaded", fileUrl: result })

    }
    catch (err) {
        console.log(err);
        fs.unlinkSync(localpath)
        res.status(500).json({ message: "server error , file not uploaded" })
    }
}

const deleteApplicantFile = async (req,res) => {
    const path = req.body.url
    const result = await deleteFile(path)
    res.json(result)
}


export { updateApplicant, UploadApplicantFile }