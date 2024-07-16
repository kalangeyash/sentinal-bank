import { configDotenv } from 'dotenv';
import dotenv from "dotenv";
import jwt from 'jsonwebtoken'

dotenv.config()
configDotenv()

const secret = process.env.JWT_SECRET
console.log("from middlewar.js "+secret)
const authMiddleware = (req,res,next)=>{
    //  console.log("Request Headers:", req.headers); // Log all headers


    const authHeader = req.headers.authorization
    console.log("Authorization Header:", authHeader);
    console.log(authHeader)
    if(!authHeader)
    {
        return res.status(403).json({
            messgae : "Bad Authoriza tion"
        })
    }
                                            
    const token = authHeader
    ///             0     1        indexes
     // gives us Bearer <token> .thus it will trim bearer and only token will be left top decode
      
            const decoded = jwt.verify(token,secret)
            console.log(decoded)
            if(decoded){
                req.userId = decoded.userId
                next()
            }
            else{
                return res.status(403).json({message: "Bad  while decoding Authorization"})
            }    
 }


export  default authMiddleware
