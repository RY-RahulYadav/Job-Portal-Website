import express from 'express'
import {  updateRecruiter } from '../controllers/recruiter.controller.js';
import { isAuthenticated } from '../middlewares/auth.middleware.js';
import { isRecruiter } from '../middlewares/typechecker.middleware.js';

const Router = express.Router();

const recruiterMw =[isAuthenticated , isRecruiter]


Router.patch('/update-recruiter' , recruiterMw,updateRecruiter)



export default Router