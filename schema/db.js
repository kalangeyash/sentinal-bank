import mongoose from "mongoose";
import dotenv from "dotenv";
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
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
})

const User = mongoose.model("Users", user)

export default User