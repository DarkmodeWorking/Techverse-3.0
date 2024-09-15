"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Shampurna Rakshit",
    designation: "Convener",
    image:
      "/coreTeam/Riya.png"
    },
  {
    id: 2,
    name: "Arijit Nandi",
    designation: "Convener",
    image:
      "/coreTeam/Arijit.png",
  },
  {
    id: 3,
    name: "Sudipta Sen",
    designation: "Media Head",
    image:
      "/coreTeam/Sudipta.png",
  },
  {
    id: 4,
    name: "Riya Banerjee",
    designation: "SPOC",
    image:
      "/coreTeam/Riya.png"
    },
  {
    id: 5,
    name: "Triyasha Kuri",
    designation: "Decoration",
    image:
      "/coreTeam/Triyasha.png",
  },
  {
    id: 6,
    name: "Arghyadip Roy",
    designation: "Co-ordinator",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 7,
    name: "Nanda Lal Das",
    designation: "Tech Lead",
    image:
      "/coreTeam/Nanda.png",
  },
];

export function CoreTeamProfilePicLeft() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
