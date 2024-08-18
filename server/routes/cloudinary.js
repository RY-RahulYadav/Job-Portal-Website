import express from 'express'
import { isAuthenticated } from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';

import { uploadFile  , deleteFile} from '../controllers/upload.controller.js';

const Router = express.Router();


Router.post('/uploadfile' , isAuthenticated, upload.any() ,  uploadFile)
Router.post('/deletefile' ,isAuthenticated ,   deleteFile)


export default Router