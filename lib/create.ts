"use server"
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME ,
  api_key: process.env.CLOUDINARY_API_KEY ,
  api_secret: process.env.CLOUDINARY_API_SECRET ,
})
export async function create(formData: FormData) {
     // Mark the function as a server action
  
    const file = formData.get('screenShot') as File; // Get the image from the formData
    
    let imageUrl = '';
    
    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
  
      // Step 1: Upload the file to Cloudinary
      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            tags: ['event-registration'],
          },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        ).end(buffer); // End the stream with the buffer
      });
  
    return  imageUrl = (uploadResult as any)?.url; // Get the uploaded image URL
    }
  
    // Step 2: Prepare the data to be sent in JSON format
    // Return the response from the API
  }