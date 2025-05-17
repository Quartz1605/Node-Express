import mongoose, { Mongoose } from "mongoose";

const orderItemSchema = new mongoose.Schema({

  productId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Product"
  },

  quantity : {
    type : Number,
    required : true,
  }

}) //Here we made a schema for a orderItem.
//Otherwise we can also do the way in which we did it in subtodo like array ke andar obj ke andar sab likh diya rather than creating a schema.

const orderSchema = new mongoose.Schema({
  orderPrice : {
    type:Number,
    required:true,
  },

  customer : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
  },

  orderItems : {
    type : [orderItemSchema]
  },

  address : {
    type : String,
    required : true,
  },

  status:{
    type : String,
    enum : ["PENDING","CANCELLED","DELIVERED"],//enum bole toh choices, ye hi value lega even if spelling galat hua toh nahi chalega
    default : "PENDING",
  }


},{timestamps:true})


export const Order = mongoose.model("Order",orderSchema)

