"use client";
import React from "react";
import { WebTooltip } from "./ui/web-tooltip";

const people = [
  {
    id: 1,
    name: "Anurag Bhattacharjee",
    designation: "Darkmode Addict",
    image: "/coreTeam/github.png",
    href:"https://www.linkedin.com/in/anurag-bhattacharjee-65a487275/"
  },
  {
    id: 2,
    name: "Nanda Lal Das",
    designation: "Heavenly Demon",
    image: "/coreTeam/Nanda4.png",
    href: "https://www.linkedin.com/in/nanda-das-7b2242243/",
  },
  {
    id: 3,
    name: "Mukta Das",
    designation: "Shadow Titan",
    image: "/coreTeam/Mukta.jpeg",
    href: "https://www.linkedin.com/in/mukta-das-406336288/",
  },
];

export function WebTeam() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <p className="text-white sm:text-2xl text-xl mr-3"> Created By: </p>
      <WebTooltip items={people} />
    </div>
  );
}
