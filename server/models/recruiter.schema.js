import mongoose  from "mongoose";

const JobRecruiterSchema = new mongoose.Schema({
  usertype:{type:String , default:"recruiter"},

  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username:{type:String , required:true, unique:true},
  password:{type:String , required:true},
  usertitle:{type:String},
  companyname: { type: String },
  phone: { type: String,  },
  companyAddress: { type: String },
  companyWebsite: { type: String },
  state:{type:String},
  country:{type:String},
  imglogo:{type:String,default:"https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"},
  postedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JobPost' }],
});

const jobrecruiter = mongoose.model('jobrecruiter', JobRecruiterSchema);
export {jobrecruiter}