import { configDotenv } from 'dotenv';
import dotenv from "dotenv";
import jwt from 'jsonwebtoken'

dotenv.config()
configDotenv()

const secret = process.env.JWT_SECRET
console.log("from middlewar.js"+secret)
const authMiddleware = (req,res,next)=>{

    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer '))
    {
        return res.status(403).json({
            messgae : "Bad Authorization"
        })
    }
                                            
    const token = authHeader.spilt(' ')[1]
    ///             0     1        indexes
     // gives us Bearer <token> .thus it will trim bearer and only token will be left top decode
    try{

        const decoded = jwt.verify(token,secret)
        if(decoded.userId)
        {
            req.userId = decoded.userId
            next()
        }
        else{
            return res.status(403).json({message: "Bad Authorization"})
        }
    }catch(e)
    {
        return res.status(403).json({message: "Bad Authorization"})
    }

 }


export  default authMiddleware
