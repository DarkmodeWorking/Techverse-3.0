import mongoose from "mongoose";
import { Schema } from "mongoose";
import { type } from "os";

const formSchema = new Schema({
    fullName: {
        type: String,
        required: { value: true, message: "Full name is required" },
      },
      email: {
        type: String,
        required: { value: true, message: "Email is required" },
      },
      phone: {
        type: Number,
        required: { value: true, message: "Phone no. is required" },
      },
      event: {
        type: String,
        required: { value: true, message: "Event is required" },  
      },
      screenShot: {
        type: String,
        required: { value: true, message: "Screen shot is required" },
      },
      teamMembers: [
        {
            type: String
        },
      ]
}, {timestamps: true})

export const Participant = mongoose.models.Participant || mongoose.model('Participant', formSchema);