import express from 'express'
import mongoose from 'mongoose'
import zod from 'zod'
import User from '../schema/db.js'


import jwt from 'jsonwebtoken'

const jwtsecret = process.env.JWT_SECRET


const userRouter = express.Router()

const signupbody = zod.object({
    username : zod.string({message: "Username must be string"}).email({message:"Username must be a valid email"}).trim().min(3,{message:"Minimum 3 Characters"}).max(255,{message:"Maximum 255 Characters"}),                     
    password : zod.string({required_error: "Password must be string"}).trim().min(7,{message:"Minimum 7 Characters"}).max(255,{message:"Maximum 255 Characters"}),                     
    firstName : zod.string({required_error: "First Name must be string"}).trim().min(3,{message:"Minimum 3 Characters"}).max(255,{message:"Maximum 255 Characters"}),                     
    lastName : zod.string({required_error: "Last Name must be string"}).trim().min(3,{message:"Minimum 3 Characters"}).max(255,{message:"Maximum 255 Characters"})                     
})
const signinBody = zod.object({
    username : zod.string().email(),
    password: zod.string()
})

// userRouter.get('/yash',(req,res)=>{
//     res.send("yashkalange")
// })

userRouter.post('/signup', async(req,res) =>{//success
    const {success} = signupbody.safeParse(req.body)

    try {
        if(!success)
        {
            return res.status(411).json({
                message : "Incorrect Inputs"
            })
        }
        
    } catch (error) {
        res.status(411).json({
            messgage : "Incorrect Inputs" 
        })
    }
    //check if user already exists or not 
     
        const username = req.body.username
        const firstName = req.body.firstName
        const lastName= req.body.lastName
        const password = req.body.password

        const userExist = await User.findOne({username: username})
        if(userExist)
        {
            return res.status(411).json({
                messgae: "User already exists of this email"
            })
        }
        if(!userExist)
        {
            const user = await User.create({
                username: username,
                firstName: firstName,
                lastName: lastName,
                password: password
            })
        }
        const userId = User._id

        const token = jwt.sign({
            userId
        },jwtsecret)

        res.status(200).json({
            message: "user created successfully",
            token: token
        })
  
} )

userRouter.post('/signin',async(req,res)=>{
    const {success} = signinBody.safeParse(req.body)

    if(!success)
    {
        return req.status(411).json({messgae:"Incorrect Inputs"})
    }

    const username = req.body.username
    const password = req.body.password

   const user = await User.findOne({
        username: username,
        password : password
   })

   if(user)
   {
    const token = jwt.sign({
        userId :user._id
    },jwtsecret)
    
    res.json({
        token : token
    })

    return
   }    

   res.status(411).json({message: "Invalid Credentials"})
    
})




export default userRouter