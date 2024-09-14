"use client";
import React from 'react';
import SignupFormDemo from './ui/signup-form-demo';
import { SparklesCore } from "@/components/ui/sparkles";

const ContactForm = () => {
  return (
    <div className="h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md relative">
      
      {/* Background Sparkles */}
      <div className="w-full absolute inset-0 h-screen z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Signup Form */}
      <div className="relative z-10 mt-20 p-8"> 
        <SignupFormDemo />
      </div>
    </div>
  );
}

export default ContactForm;
