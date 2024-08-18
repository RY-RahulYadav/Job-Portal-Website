import mongoose from "mongoose";

const { Schema } = mongoose


const applicantSchema = new Schema({
    usertype:{type:String , default:"applicant"},
    
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    desc: { type: String },
    usertitle: { type: String  , default: "Your User Title"},
    phone: { type: String , default: "Missing"},
    state: { type: String , default: "Missing"},
    country: { type: String , default: "Missing"},
    linkdin: { type: String , default: "Missing"},
    github: { type: String , default: "Missing"},
    portfolio: { type: String , default: "Missing"},
    education: [
        {
            degree: { type: String },
            college: { type: String },
            start:{type:String},
            end:{type:String},
            loc:{type:String}
        }
    ],
    experienceArray: [
        {
            title:{type:String},
            jobcompany:{type:String},
            start:{type:String},
            end:{type:String},
            loc:{type:String},
            

        }
    ],
    skills: {
        type: [String],
    },
    appliedjob: [{
        type: Schema.Types.ObjectId,
        ref: 'JobPost'
    }],
    savedjob: [{
        type: Schema.Types.ObjectId,
        ref: 'JobPost'
    }],
    resume:{type:String , default:""},
    imglogo:{type:String , default:"https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"}

})

const Applicant = mongoose.model("Applicant", applicantSchema)

export { Applicant }