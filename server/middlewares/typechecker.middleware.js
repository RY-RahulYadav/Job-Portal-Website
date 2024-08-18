const isApplicant = async(req,res , next)=>{
    try{
     const {username , type} = req.tokenData
    //  console.log(type);
     if(type!="applicant"){
        return res.status(400).json({message:"Access Denied : Incorrect User Types"})
     }
     next()
    }
    catch(err){
        res.status(500).json({message:"Server Internal Error 1" , err:err})
    }
}

const isRecruiter = async(req,res,next)=>{
    try{
     const {username , type} = req.tokenData
    //  console.log(type , username);
     
     if(!(type=='recruiter')){
        return res.status(400).json({message:"Access Denied : Incorrect User Types"})
     }
     next()

    }
    catch(err){
      res.status(500).json({message:"Server Internal Error 1" , err:err})
    }
}

export {isApplicant , isRecruiter}