import { connectDB } from "@/dbconfig/config";
import { NextResponse } from "next/server";
import { Participant } from "@/models/formModel";

connectDB();

export async function GET() {
  try {
    const participants = await Participant.find({});
    return NextResponse.json(participants);
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : "An unknown error occurred.";
    console.error("Error fetching participants:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(req: Request) {
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
      return NextResponse.json({ error: "Form fields are missing!" }, { status: 400 });
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
    const errorMessage = (error instanceof Error) ? error.message : "An unknown error occurred.";
    console.error("Error creating participant:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
