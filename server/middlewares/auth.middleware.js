import jwt from 'jsonwebtoken'

const isAuthenticated = async (req,res ,next)=>{
    try{
        const token = req.header("authorization").split(' ')[1]
        if(!token){
            return res.status(404).json({message:"token missing"})
        }
        const user = jwt.verify(token , process.env.JWT_KEY)
        if(user){
         
            req.tokenData = user
            next()
         }
        
    }
    catch{
        res.status(404).json({message:"Token Invalid 0"})
    }
}


export {isAuthenticated}