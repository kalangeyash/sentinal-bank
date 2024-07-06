import express from "express"
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import  Users  from './schema/db.js'
import db from './schema/db.js'

dotenv.config()

const PORT = process.env.PORT
const app = express();


app.listen(PORT,()=>{
    console.log(`Server running.... `)
})

