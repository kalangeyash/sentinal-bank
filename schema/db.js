import mongoose from "mongoose";
import dotenv from "dotenv";
import { number, Schema, string } from "zod";
dotenv.config()

// const mongo_url = process.env.MONGO_URL;

mongoose.connect(process.env.m)
    .then(() => {
        console.log("Database connected ");
    })
    .catch((error) => {
        console.error("Database connection issue:", error.message);
    });

const user = new  mongoose.Schema({
    username: {
        type: String,
        // required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        // required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        // required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        // required: true,
        trim: true,
        maxLength: 50
    }
})

// const accountSchema = new mongoose.Schema({
//     userId : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "User",
//         required : true
//     },

//     balance: {
//         type: Number,
//         required : true

//     }
    
// })

const User = mongoose.model("User", user)
// const Account = mongoose.model("Account",accountSchema)

export default User