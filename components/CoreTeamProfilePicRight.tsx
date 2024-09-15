
"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Zishan Khan",
    designation: "Converner",
    image:
      "/coreTeam/Zishan.png"
    },
  {
    id: 2,
    name: "Champak Kundu",
    designation: "Finance",
    image:
      "/coreTeam/Champak.png",
  },
  {
    id: 3,
    name: "Smarta Das",
    designation: "SPOC",
    image:
      "/coreTeam/Smarta.png",
  },
  {
    id: 4,
    name: "Aniket Das",
    designation: "Co-ordinator",
    image:
      "/coreTeam/Aniket.png",
  },
  {
    id: 5,
    name: "Mohok Bhanja",
    designation: "Explorer",
    image:
      "/coreTeam/Mohok1.png",
  },
  {
    id: 6,
    name: "undefined",
    designation: "Marketing Head",
    image:
      "/coreTeam/Nanda3.png",
  },
  {
    id: 7,
    name: "Ankita Ghosh",
    designation: "Co-ordinator",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

export function CoreTeamProfilePicRight() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
