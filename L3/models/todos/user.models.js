import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  // username : String,
  // email : String,
  // isActive : Boolean,

  //Both ways can be used to defined fields.

  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
  },

  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
  },

  password:{
    type:String,
    required:[true,"password is required"]
    //custom messages can also be sent 
  },

  

},{timestamps:true})

export const User = mongoose.model("User",userSchema)