import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
        unique: true
    },

    balance: {
        type: Number,
        required : true

    }
    
})

const Account = mongoose.model("Accounts",accountSchema)

export default Account