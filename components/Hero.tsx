"use client"
import React from "react";
import { Vortex } from "./ui/vortex";

export function Hero() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          TECHVERSE 3.0
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          A departmental fest organised by department of CSE and BSC
        </p>
      </Vortex>
    </div>
  );
}
