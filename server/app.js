import express from "express"
import dotenv from "dotenv"
import {dbConnect} from "./config/dbConfig.js";
import applicantRoutes from "./routes/applicant.js"
import recruiterRoutes from './routes/recruiter.js'
import jobpostRoutes from './routes/job_post.js'
import loginRoutes from './routes/auth.js'
import cors from 'cors'
import  uploadRoutes from './routes/cloudinary.js'
import { jobrecruiter } from "./models/recruiter.schema.js";
import { JobPost } from "./models/jobPost.schema.js";


dotenv.config();
dbConnect();
const port = process.env.PORT|| 80
const app = express();

const corsOptions = {
  origin: '*', // Your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Allow cookies to be sent
};







app.use(cors(corsOptions));


app.use(express.json());
app.use("/api/applicant" ,applicantRoutes)
app.use("/api/recruiter" ,recruiterRoutes)
app.use("/api/jobpost" ,jobpostRoutes)
app.use("/api/auth" ,loginRoutes)
app.use("/api/" ,uploadRoutes)


app.get('/',async (req, res)=>{
    try{
       res.status(200).send("welcome to job portal server");
      
    }
    catch(err){
      console.log("error" , err);
    }
})


app.listen(port , ()=>{
    try{
      console.log(`server listen on port no ${port}`)
    }
    catch(err){
     console.log("error" , err)
    }
})
