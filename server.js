import express from "express"
import mainRouter from './routes/index.js'
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import  User  from './schema/db.js'
import db from './schema/db.js'

dotenv.config()
const PORT = process.env.PORT

const app = express()

app.use('/api/v1/', mainRouter)


app.listen(PORT,()=>{
    console.log(`Server running.... ${PORT}`)
})

