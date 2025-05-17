import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
  
  content : {
    type:String,
    required:true,
  },

  complete:{
    type:Boolean,
    default:false,
  },

  createdBy : {
    type : mongoose.Schema.Types.ObjectId, //Used to coonect models and type and ref line should come one after another
    ref : "User",//Naam wohi jisse export kiya hai.
  },

  subtodo : [ //Cus array of objects(subtodos) hoga.
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Subtodo",
    }
  ]




},{timestamps:true})

export const Todo = mongoose.model("Todo",todoSchema)