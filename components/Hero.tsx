"use client"
import React from "react";
import { Vortex } from "./ui/vortex";

export function Hero() {
  return (
    <div className="w-full mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        {/* <h2 className="mt-20 md:mt-0 text-5xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-mono">
          TECHVERSE 3.0
        </h2> */}
        {/* purple400 - blue600 */}
        <h2 className="text-5xl md:text-9xl font-mono font-extrabold text-center mt-10 animate-pulse text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
      TECHVERSE 3.0
    </h2>
        <p className="text-white text-xs mt-10 text-center font-mono">
          A departmental tech fest organized at <br /> Guru Nanak Institute of Technology by <br /> Department of Computer Science Engineering
        </p>
      </Vortex>
    </div>
  );
}
