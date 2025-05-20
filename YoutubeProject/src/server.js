//require('dotenv').config({path : './env'});
import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/server.js";
import { app } from "./app.js";

dotenv.config()



connectDB().then(() => {
  app.listen(process.env.PORT || 8000,() => {
    console.log(`Listening at PORT ${process.env.PORT}`)
  })
}).catch((error) => {console.log("DB Connection failed " ,error)})










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