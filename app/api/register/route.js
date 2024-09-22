import { connectDB } from "@/dbconfig/config";
import { NextResponse } from "next/server";
import {multerMiddleware} from '@/lib/multer';
import uploadOnCludinary from "@/lib/cloudinary";
connectDB();

export async function POST(req, res) {
  try {
    // Process the form-data using multer
    await multerMiddleware(req, res);
    //  console.log(req);
    //  console.log(req.body);
     
    // Now extract fields and file from req.body and req.files
    const { fullName, email, phone, event, teamMembers } = req.body;

    console.log('Form Data:', { fullName, email, phone, event, teamMembers });
    console.log('File:', screenShot);

    if (!fullName || !email || !phone || !event) {
      throw new Error("Form fields are missing!");
    }
    // Upload screenshot to Cloudinary if a file is provided
    const screenShotLocalPath = req.file?.path;
    if (!screenShotLocalPath) {
      throw new Error("Screenshot is missing!");
    }
    const screenShot = await uploadOnCludinary(screenShotLocalPath);

    // Return the form data and Cloudinary URL in the response
    return NextResponse.json({
      fullName,
      email,
      phone,
      event,
      teamMembers,
      screenShot: screenShot.url || null,
    });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
