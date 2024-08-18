
import mongoose from "mongoose"
import { Applicant } from "../models/applicant.schema.js"
import { JobPost } from "../models/jobPost.schema.js"
import { jobrecruiter } from "../models/recruiter.schema.js"


//  job provider 
const createPost = async (req, res) => {
    try {
        const { username, type } = req.tokenData
        const data = req.body
        const recruiter = await jobrecruiter.findOne({ username })
        if (!recruiter) {
            res.status(404).json({ message: "user not found" })
        }


        const job = await JobPost.create({ ...data, username: username })

        const updatedrecruiter = await jobrecruiter.findOneAndUpdate({username},{ $push: { postedJobs: job._id } }, { new: true }).populate('postedJobs')

        res.status(200).json({ message: "jobpost created", data: updatedrecruiter })

    }
    catch (err) {
        res.status(500).json({ message: "server error" , err:err })
    }
}

// for both 
const getAlljob = async (req, res) => {
    try {
        const alljobs = await JobPost.find()
        if (!alljobs) {
            res.status(404).json({ message: "no job post" })
        }

        res.status(200).json({ message: "all job post ", data: alljobs })

    }
    catch (err) {
        res.status(500).json({ message: "server error" })
    }
}



const getjobByid = async (req, res) => {
    try {
        const { Id } = req.params
        const alljobs = await JobPost.findOne({ _id: Id })
        if (!alljobs) {
            return res.status(404).json({ message: "not found" })
        }

        res.status(200).json({ message: "all job post ", data: alljobs })

    }
    catch (err) {
        res.status(500).json({ message: "server error" })
    }
}



const filterjob = async (req, res) => {
    try {
        const { jobtitle, joblocation, workmethod, jobcategory, experience } = req.query;
        // console.log(req.query);

        const query = {};

      
        if (jobtitle) query.jobTitle = { $regex: jobtitle, $options: "i" };
        
    
        if (joblocation) query.joblocation = joblocation;
        if (jobcategory) query.jobcategory= jobcategory;
        if (experience) query.experience= { $in: experience };
        
       
        if (workmethod) query.workmethod = { $in: workmethod };
       

        // console.log(query);

       
        const jobpost = await JobPost.find(query).select('-appliedApplicant');

        if (!jobpost || jobpost.length === 0) {
            return res.status(404).json({ message: "No job post found" });
        }

        res.status(200).json({ message: "Found job post", data: jobpost });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error", error: err });
    }
};



// job seeker 

const applicantApply = async (req, res) => {
    try {
        const { jobId, applicantId } = req.body
        const { username, type } = req.tokenData

       

        const updatejobpost = await JobPost.findOneAndUpdate({ _id: jobId }, { $push: { appliedApplicant: applicantId } }, { new: true })
        if (!updatejobpost) {
            return res.status(404).json({ message: "job post not found" })
        }

        const updateApplicant = await Applicant.findOneAndUpdate({ username }, { $push: { appliedjob: jobId } }, { new: true, projection: '-password' }).populate('savedjob appliedjob' , '-appliedApplicant')
        if (!updateApplicant) {
            return res.status(404).json({ message: "user not updated" })
        }

        res.status(200).json({ message: "applied", data: updateApplicant })

    }
    catch (err) {
        res.status(500).json({ message: "server error", err: err })
    }
}
const savedJob = async (req, res) => {
    try {
        const { jobId, applicantId } = req.body
        const { username, type } = req.tokenData
        // console.log(req.tokenData , req.body);
        const updatedApplicant = await Applicant.findOneAndUpdate({ username }, { $push: { savedjob: jobId }}, { new: true , projection: '-password' }).populate('savedjob appliedjob')
        if (!updatedApplicant) {
            return res.status(404).json({ message: "job post not found" })
        }
        // console.log(updatedApplicant, "jhg");
        res.status(200).json({ message: "saved", data: updatedApplicant })

    }
    catch (err) {
        res.status(500).json({ message: "server error", err: err })
    }
}




export { createPost, getAlljob, getjobByid, applicantApply, savedJob, filterjob }