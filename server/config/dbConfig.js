import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const dbConnect= async ()=>{
   try{
    await mongoose.connect(process.env.MONGO_URI )
    console.log("database connect sucessfully");
}
   catch(err){
    console.log("ERROR occur on database Connection: " , err);
    
   }
}


export  {dbConnect}