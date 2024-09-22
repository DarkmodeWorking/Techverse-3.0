
import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME ,
    api_key: process.env.CLOUDINARY_API_KEY ,
    api_secret: process.env.CLOUDINARY_API_SECRET ,
})

const uploadOnCludinary = async function(localFilePath) {
    try {
        if (!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto',
        });
        // Log the uploaded file URL
        console.log("File uploaded on Cloudinary", response.url);
        // Remove the local file after successful upload
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        // Remove the local file in case of an error
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        console.log(error);
        return null;
    }
};

export default uploadOnCludinary;
