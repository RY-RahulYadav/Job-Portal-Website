import express from 'express'
import {  applicantApply, createPost, filterjob, getAlljob, getjobByid, savedJob } from '../controllers/job_post.controller.js'
import { isApplicant, isRecruiter } from '../middlewares/typechecker.middleware.js'
import { isAuthenticated } from '../middlewares/auth.middleware.js'

const Router = express.Router()


const ApplicantMW = [isAuthenticated, isApplicant]
const recruiterMw = [isAuthenticated, isRecruiter]

// recruiter 

Router.post('/create', recruiterMw, createPost)

// both 
Router.get('/getall', getAlljob)
Router.get('/get/:Id', getjobByid)
Router.get('/filter', filterjob)

// applicant 
Router.post('/apply', ApplicantMW, applicantApply)
Router.post('/saved', ApplicantMW , savedJob)

export default Router