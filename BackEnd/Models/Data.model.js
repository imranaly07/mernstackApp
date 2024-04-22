import mongoose from "mongoose";

const UserSchema=mongoose.Schema({

    name: String,
    image:String,
    oldPrice:Number,
    newPrice:String,
    title:String,
    category:String,
})

let  CourseData=mongoose.model("CourseData",UserSchema)

export default CourseData;