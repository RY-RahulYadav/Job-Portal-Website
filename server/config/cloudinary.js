import {v2 as cloudinary} from 'cloudinary'
import dotenv from 'dotenv'
import fs  from 'fs'

dotenv.config();

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY_CLOUD, 
    api_secret: process.env.API_SCREAT_CLOUD 
});


export  {cloudinary}
