import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { Applicant } from "../models/applicant.schema.js"
import { jobrecruiter } from "../models/recruiter.schema.js"
dotenv.config()



const updateRecruiter = async (req, res) => {
    try {
        const {username, type} = req.tokenData
        const data= req.body
        if(!data){
            res.status(400).json({message:"input missing"})
        }
        const recruiter = await  jobrecruiter.findOneAndUpdate({username: username } ,data,  {new:true, projection:'-password'}).populate('postedJobs')

        if(!recruiter){
           return res.status(404).json({message:"data not found"})
        }
        
        res.status(200).json({message:"data updated" ,data:recruiter})

    }
    catch (err) {
         res.status(500).json({ message: "server internal error", err: err })

    }
}



export { updateRecruiter}