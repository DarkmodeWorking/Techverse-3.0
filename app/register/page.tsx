/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { StarBackground } from "@/components/StarBackground";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import axios from "axios";

import { create } from "@/lib/create";
import { tr } from "framer-motion/client";

interface EventData {
  name: string;
  soloPrice?: number; // Price for solo participation (optional)
  teamPrice?: String; // Price for team participation (optional)
  hasSolo: boolean; // Flag to indicate if solo is allowed
  hasTeam: boolean; // Flag to indicate if team is allowed
  minTeamMembers?: number; // Optional minTeamMembers
  maxTeamMembers?: number;
}
interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  participationType: "solo" | "team";
  teamMembers: string[];
  screenShot: FileList | null;
}

const eventData: EventData[] = [
  // {
  //   name: "Run for The One Piece (Treasure Hunt)",
  //   teamPrice: `${170} for 2-3 members & ₹${200} for 4 members`,
  //   hasSolo: false,
  //   hasTeam: true,
  //   minTeamMembers: 2,
  //   maxTeamMembers: 4,
  // },
  {
    name: "Model Matrix (Model Display)",
    teamPrice: `${100}`,
    soloPrice:100,
    hasSolo: true,
    hasTeam: true,
    minTeamMembers: 2,
    maxTeamMembers: 5, 
  },
  {
    name: "Canva Fusion (Poster Presentation)",
    // soloPrice: 100,
    teamPrice: `${100}`,
    hasSolo: false,
    hasTeam: true,
    minTeamMembers: 2,
    maxTeamMembers: 3,
  },
  {
    name: "Super Coders (Coding Competition)",
    soloPrice: 60,
    teamPrice: `${100}`,
    hasSolo: true,
    hasTeam: true,
    minTeamMembers: 2,
    maxTeamMembers: 2,
  },
  {
    name: "Lord of The Webs (Web Dev)",
    soloPrice: 60,
    teamPrice: `${100}`,
    hasSolo: true,
    hasTeam: true,
    maxTeamMembers: 2,
    minTeamMembers: 2,
  },
  {
    name: "Vision Hack (Mini Hackathon)",
    teamPrice: `${200} for upto 3 members  & For 4+ members - ₹${300}`,
    hasSolo: false,
    hasTeam: true,
    minTeamMembers: 3,
    maxTeamMembers: 6,
  },
  {
    name: "Quiz of Thrones (Tech Quiz)",
    soloPrice: 70,
    teamPrice: `${100}`,
    hasSolo: true,
    hasTeam: true,
    minTeamMembers: 2,
    maxTeamMembers: 3,
  },
  {
    name: "Speed Drift (Robo Race)",
    teamPrice: `${100}`,
    soloPrice:100,
    hasSolo: true,
    hasTeam: true,
    minTeamMembers: 2,
    maxTeamMembers: 4,
  },
  {
    name: "BGMI (Battle Royale)",
    teamPrice: `${250}`,
    hasSolo: false,
    hasTeam: true,
    minTeamMembers: 4,
    maxTeamMembers: 6,
  },
  // {
  //   name: "Digital Kickoff (E Football)",
  //   teamPrice: `${301}`,
  //   hasSolo: false,
  //   hasTeam: true,
  //   minTeamMembers: 3,
  //   maxTeamMembers: 4,
  // },
  {
    name: "Billiads Blitz (8 Ball Pool)",
    soloPrice: 50,
    hasSolo: true,
    hasTeam: false,
    // minTeamMembers: 3,
    // maxTeamMembers: 6,
  },
  {
    name: "Shutter Showcase (Photography)",
    soloPrice: 50,
    hasSolo: true,
    hasTeam: false,
    // minTeamMembers: 3,
    // maxTeamMembers: 6,
  },
  {
    name: "Combo Event (Lord of the Webs + Super Coder)",
    soloPrice: 100,
    teamPrice: `${150}`,
    hasSolo: true,
    hasTeam: true,
    maxTeamMembers: 2,
    minTeamMembers: 2,
  },
];


const RegisterPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string>("");
  const [participationType, setParticipationType] = useState<"solo" | "team">(
    "solo"
  );
  const [teamMembers, setTeamMembers] = useState<string[]>([""]); // For team member inputs
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const selectedEventData = eventData.find(
    (event) => event.name === selectedEvent
  );

  const handleAddTeamMember = () => {
    if (teamMembers.length < (selectedEventData?.maxTeamMembers || 1) - 1) {
      setTeamMembers([...teamMembers, ""]);
    }
  };

  const handleRemoveTeamMember = (index: number) => {
    const updatedMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(updatedMembers);
  };

  // Calculate price based on participation type
  const calculatedPrice =
    participationType === "solo"
      ? selectedEventData?.soloPrice
      : selectedEventData?.teamPrice;

      const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setIsSubmitting(true); // Disable the submit button
        const formData = new FormData();
        if (data.screenShot && data.screenShot[0]) {
          formData.append("screenShot", data.screenShot[0]);
        }
    
        try {
          const imageUrl = await create(formData);
          await axios.post("/api/register", {
            fullName: `${data.firstName} ${data.lastName}`,
            email: data.email,
            phone: data.phone,
            event: selectedEvent,
            teamMembers,
            screenShot: imageUrl,
          });
          setSuccessMessage("Form submitted successfully!, Please Go to the Registration desk or Contact us for any Queries");
          reset(); // Clear the form fields
          setTeamMembers([""]); // Reset team members
           // Reset selected event
          setParticipationType("solo"); // Reset participation type
        } catch (error) {
          console.error("Error submitting form", error);
          setSuccessMessage("Error submitting form. Please try again.");
        } finally {
          setIsSubmitting(false); // Re-enable the submit button
        }
      };
    


  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white p-6">
      {/* Background Stars Component */}
      {/* <div className="absolute inset-0 z-10">
        <StarBackground/>
      </div> */}
      <div className="relative z-10 w-full max-w-md bg-zinc-900 text-white p-6 rounded-3xl shadow-lg">
        <header className="text-center mb-10">
          <h1 style={{ fontFamily: 'CustomFont' }} className="text-4xl font-bold mb-10">
            Techverse 3.0
          </h1>
          <p className="text-md">Select an event and participation type to register</p>
        </header>


        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Choose Your Event</h2>
          <select
            className="w-full p-3 border border-zinc-700 bg-zinc-800 rounded-xl mb-6 text-white"
            value={selectedEvent}
            onChange={(e) => {
              setSelectedEvent(e.target.value);
              setTeamMembers([""]); // Reset team members if a new event is selected
              setParticipationType("solo"); // Default to solo when an event is selected
            }}
          >
            <option value="" disabled>
              Select an event
            </option>
            {eventData.map((event) => (
              <option key={event.name} value={event.name}>
                {event.name}
              </option>
            ))}
          </select>

          {selectedEvent && (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">
                  Register for {selectedEvent}
                </h3>
                <p className="text-center mb-2">
                  Event Price: ₹{calculatedPrice}
                </p>
                <p className="text-center text-sm text-zinc-400 mb-4">
                  Choose your participation type
                </p>

                {/* Participation Type Selection */}
                <div className="flex justify-center gap-4 mb-6">
                  {selectedEventData?.hasSolo && (
                    <label>
                      <input
                        type="radio"
                        value="solo"
                        checked={participationType === "solo"}
                        onChange={() => setParticipationType("solo")}
                      />
                      Solo
                    </label>
                  )}
                  {selectedEventData?.hasTeam && (
                    <label>
                      <input
                        type="radio"
                        value="team"
                        checked={participationType === "team"}
                        onChange={() => setParticipationType("team")}
                      />
                      Team
                    </label>
                  )}
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                {/* First Name */}
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border border-zinc-700 bg-zinc-900 rounded-xl text-white"
                  {...register("firstName", {
                    required: { value: true, message: "First name is required" },
                    minLength: {
                      value: 2,
                      message: "First name must be at least 2 characters long",
                    },
                    maxLength: {
                      value: 30,
                      message:
                        "First name must be less than 30 characters long",
                    },
                  })}
                />
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
                )}

                {/* Last Name */}
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border border-zinc-700 bg-zinc-900 rounded-xl text-white"
                  {...register("lastName", {
                    required: { value: true, message: "Last name is required" },
                    minLength: {
                      value: 2,
                      message: "Last name must be at least 2 characters long",
                    },
                    maxLength: {
                      value: 30,
                      message: "Last name must be less than 30 characters long",
                    },
                  })}
                />
                {errors.lastName && (
                  <p className="text-red-500">{errors.lastName.message}</p>
                )}

                {/* Phone Number */}
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-zinc-700 bg-zinc-900 rounded-xl text-white"
                  {...register("phone", {
                    required: { value: true, message: "Phone number is required" },
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be exactly 10 digits",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}

                {/* Email Address */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-zinc-700 bg-zinc-900 rounded-xl text-white"
                  {...register("email", {
                    required: { value: true, message: "Email is required" },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}

                {/* Team Members (conditionally rendered for team participation) */}
                {participationType === "team" &&
                  selectedEventData?.minTeamMembers && (
                    <div>
                      <p className="text-sm mb-4 text-zinc-400">
                        Add your team members (minimum{" "}
                        {selectedEventData.minTeamMembers}, up to{" "}
                        {selectedEventData.maxTeamMembers} members)
                      </p>
                      {teamMembers.map((_, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 mb-2"
                        >
                          <input
                            type="text"
                            placeholder={`Team Member ${index + 2} Name`}
                            className="w-full p-3 border border-zinc-700 bg-zinc-900 rounded-xl text-white"
                            value={teamMembers[index]}
                            onChange={(e) => {
                              const newTeamMembers = [...teamMembers];
                              newTeamMembers[index] = e.target.value;
                              setTeamMembers(newTeamMembers);
                            }}
                          />
                          <button
                            type="button"
                            className="bg-red-500 px-2 py-1 rounded-xl"
                            onClick={() => handleRemoveTeamMember(index)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      {teamMembers.length <
                        (selectedEventData?.maxTeamMembers || 1) - 1 && (
                          <button
                            type="button"
                            className="bg-green-500 w-full py-2 rounded-md"
                            onClick={handleAddTeamMember}
                          >
                            Add Team Member
                          </button>
                        )}
                    </div>
                  )}

                {/* UPI Screenshot Upload */}
                <div className="bg-zinc-700 p-4 rounded-md shadow-sm">
                  <img
                    src="/QR.jpeg"
                    alt="UPI QR Code"
                    className="w-25 h-25 mx-auto mb-4"
                  />
                  <p className="text-center mb-2">
                    Event Price: ₹{calculatedPrice}
                  </p>
                  <p className="text-center text-sm text-zinc-400">
                    Please pay the amount and upload the screenshot below.
                  </p>
                  <input
                    type="file"
                    className="w-full p-3 border border-zinc-600 bg-zinc-900 rounded-md mt-4 text-white"
                    {...register("screenShot", {
                      required: { value: true, message: "Screenshot is required" },
                      validate: {
                        lessThan10MB: (files) => {
                          if (files && files[0]) {
                            return files[0].size < 10 * 1024 * 1024 || "File size must be less than 10 MB";
                          }
                          return true; // If no file, pass validation
                        },
                      },
                    })}
                  />
                  {errors.screenShot && (
                    <p className="text-red-500">{errors.screenShot.message}</p>
                  )}

                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full py-3 ${isSubmitting ? "bg-gray-600" : "bg-indigo-600"} text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
              {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
            </>

          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;