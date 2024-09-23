"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function AboutPageHero() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md relative">
      <h1
        style={{ fontFamily: 'CustomFont' }}
        className="text-5xl md:text-9xl font-mono font-extrabold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 animate-bounce opacity-0 transition-opacity duration-1000 ease-in-out animate-fadeIn"
      >
        TECHVERSE 3.0
      </h1>
      <div className="w-full h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-1/2 sm:w-3/4 blur-sm animate-float" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-1/2 sm:w-3/4 animate-float" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 sm:w-3/4 blur-sm animate-float" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[1px] w-1/4 sm:w-3/4 animate-float" />

        {/* Core component with increased particle density */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={2000} // Increased density for more particles
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
