import express from 'express'
import {  updateApplicant, } from '../controllers/applicant.controller.js';
import { isAuthenticated } from '../middlewares/auth.middleware.js';
import { isApplicant } from '../middlewares/typechecker.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';


const Router = express.Router();

const ApplicantMW= [isAuthenticated , isApplicant]


Router.patch('/update-applicant' , ApplicantMW,  updateApplicant)



export default Router