"use client"
import React from "react";
import { Vortex } from "./ui/vortex";

export function Hero() {
  return (
    <div className="w-full mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <p className="text-sm md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-b from-indigo-400 to-indigo-900 font-mono"> Guru Nanak Institute of Technology presents to you </p>
        <h2 className="mt-20 md:mt-0 text-3xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-pink-300 to-pink-600 font-sans">
          TECHVERSE 3.0
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-2 text-center">
          A departmental fest organised by department of CSE and BSC
        </p>
      </Vortex>
    </div>
  );
}
