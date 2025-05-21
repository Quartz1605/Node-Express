import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import dotenv from "dotenv"
dotenv.config();

cloudinary.config({ 
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME , 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {

  try{
    if(!localFilePath) return null

    //upload on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath,{
      resource_type : "auto"
    })
    console.log("File uploaded sucessfully on cloudinary.",response.url)
    

  }
  catch(error){

    fs.unlinkSync(localFilePath)//Remove the locally saved temp file as the upload got failed.

    return null;

  }
}

export {uploadOnCloudinary}