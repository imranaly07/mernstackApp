import mongoose from "mongoose";

const signupSchema=mongoose.Schema({

    username:String,
    email:String,
    password:Number,
    confirmpassword:Number,
})

let signupUser=mongoose.model("signupUser",signupSchema);

export default signupUser;