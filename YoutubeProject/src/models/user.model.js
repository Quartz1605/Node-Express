import dotenv from "dotenv"
import mongoose from "mongoose"; 

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

dotenv.config();

const userSchema = new mongoose.Schema({

  username : {
    type : String,
    unique : true,
    required : true,
    lowercase : true,
    trim : true,
    index : true //Used a lot and is important in search based applications.
  },

  fullName : {
    type : String,
    required : true,
    trim :  true,
    index : true,

  },

  email : {
    type : String,
    unique : true,
    required : true,
    lowercase : true,
    trim : true,
  },

  avatar : {
    type : String, //Cloudinary url we will be using.
    required : true,
  },

  coverImage : {
    type : String,
  },

  watchHistory : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Video"

  },

  password : {
    type : String,
    required : [true,"Password is required"],
  },

  refreshToken : {
    type : String,

  }




},{timestamps:true})

//These are known as hooks.
userSchema.pre("save",async function(next) {
  if(!this.isModified("password")) return next();

  this.password = bcrypt.hash(this.password,10)
  next()

})

userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAcessToken = function(){

  return jwt.sign({
    _id : this.id,
    email : this.email,
    username : this.username,
    fullName : this.fullName
  },process.env.ACCESS_TOKEN_SECRET,{
    expiresIn : process.env.ACCESS_TOKEN_EXPIRY
  })
}


userSchema.methods.generateRefreshToken = function(){

  return jwt.sign({
    _id : this.id
  },process.env.REFRESH_TOKEN_SECRET,{
    expiresIn : process.env.REFRESH_TOKEN_EXPIRY
  })
}


export const User = mongoose.model("User",userSchema)