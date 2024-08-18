import express from 'express'
import {getUser, Login, Signup } from "../controllers/auth.controller.js"
import { isAuthenticated } from '../middlewares/auth.middleware.js'
const Router = express.Router()


Router.post('/login' , Login)
Router.post('/signup' , Signup)
Router.get('/getuser',isAuthenticated , getUser)

export default Router