import mongoose from "mongoose";
const { Schema } = mongoose

const jobpostSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    
    workmethod: {
        type: String,
        required: true
    },
    skills:{type:String , default:""},
    jobcompany:{type:String}, 
    desc: { type: String, required: true },
    requiredSkill: { type: String, required: true },
    
    benefits: { type: String, required: true },
    jobcategory: { type: String, required: true },
    jobrole: { type: String, required: true },
    experience: { type: String, required: true },
    salary: { type: String, required: true },
    jobpostdate: { type: String, required: true },
    deadline: { type: String, required: true },
    joblocation: { type: String, required: true },
    uploadlogo: { type: String, default:"https://www.careerguide.com/career/wp-content/uploads/2023/11/Jobs-in-Ludhiana-1.png" },
    appliedApplicant: [{ type: Schema.Types.ObjectId, ref: 'Applicant' }]


})

const JobPost = mongoose.model("JobPost", jobpostSchema)

export { JobPost }