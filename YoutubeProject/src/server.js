//require('dotenv').config({path : './env'});
import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/server.js";

dotenv.config({path : './env'})

const app = express()

connectDB();










/*
//Iss function ko iife bolte hai
;( async () => {

  try{

    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
      console.log("ERROR: ",error);
      throw error;
    })

    app.listen(process.env.PORT,()=>{
      console.log(`App is listen on port ${process.env.PORT}`)
    })

  }
  catch(error){
    console.log("Error : ",error);
    throw error
  }
})() */