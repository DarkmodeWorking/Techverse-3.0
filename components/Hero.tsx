"use client";
import React from "react";
import { Vortex } from "./ui/vortex";

export function Hero() {
  return (
    <div className="w-full mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h3
          style={{ 
            fontFamily: 'AnotherFont',
            textShadow: '0 0 15px rgba(128, 0, 128, 1), 0 0 30px rgba(128, 0, 128, 0.9), 0 0 45px rgba(128, 0, 128, 0.7)', // Enhanced purple glow
            color: 'white' // Keeping the text itself white
          }}
          className="text-4xl md:text-8xl font-mono font-extrabold text-center mt-10 animate-pulse"
        >
          TECHVERSE 3.0
        </h3>
        <p style={{fontFamily: 'CustomFont'}} className="text-white text-sm sm:text-2xl mt-10 text-center font-mono ">
          A departmental tech fest organized at Guru Nanak <br /> Institute of Technology by Department of CSE & BSC
        </p>
      </Vortex>
    </div>
  );
}
