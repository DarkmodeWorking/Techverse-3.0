import { connectDB } from "@/dbconfig/config";
import { NextResponse } from "next/server";
import { Participant } from "@/models/formModel";
connectDB();
export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const { fullName, email, phone, event, teamMembers, screenShot } = reqBody;

    console.log("Form Data:", {
      fullName,
      email,
      phone,
      event,
      teamMembers,
      screenShot,
    });

    if (!fullName || !email || !phone || !event || !screenShot) {
      throw new Error("Form fields are missing!");
    }
    const newParticipant = await Participant.create({
      fullName,
      email,
      phone,
      event,
      teamMembers,
      screenShot,
    });

    return NextResponse.json({
      newParticipant,
      message: "Form submitted successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
