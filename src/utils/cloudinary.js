
import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs";


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) returnnull
        //upload the file on cloudinary
        cloudinary.uploader.upload(localFilePath, {
            resource_type :"auto"
        })
        //File uploaded successfully
        console.log("File uploaded on cloudinary", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);//remove the locally saved temporary file as the upload operation failed
        return null;
    }
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});


export {uploadOnCloudinary}
