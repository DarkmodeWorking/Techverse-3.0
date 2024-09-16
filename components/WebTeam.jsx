"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/web-tooltip";
const people = [
  {
    id: 1,
    name: "Anurag Bhattacharjee",
    designation: "Darkmode Addict",
    image:
      "/coreTeam/github.png"
    },
  {
    id: 7,
    name: "Nanda Lal Das",
    designation: "Cosmic Entity",
    image:
      "/coreTeam/Nanda.png",
  },
];

export function WebTeam() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <p className="text-white sm:text-2xl text-xl mr-3"> Created By: </p>
      <AnimatedTooltip items={people} />
    </div>
  );
}
