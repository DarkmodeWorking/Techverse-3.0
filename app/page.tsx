import { Earth } from "@/components/Earth";
import { Events } from "@/components/Events";
import Footer from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import Logo from "@/components/LogoAlt";
import { NavbarDemo } from "@/components/NavbarDemo";
import Image from "next/image"

export default function Home() {
  return (
    <div>
      
    <main className="mb-10 mt-24 sm:mt-0 flex min-h-screen flex-col items-center justify-between">
      <div className="w-full flex flex-col-reverse sm:flex-col justify-center items-center">
        <div className="sm:hidden">
        <Logo />
        </div>
        <Hero/>
      </div>
      <Earth/>
      <Events/>
      <p className="text-white text-center text-2xl md:text-3xl my-16 font-serif mx-16">The Journey So Far: Techverse Through the Lens</p>
      {/* <Gallery/> */}
    </main>
    </div>
  );
}