import { Earth } from "@/components/Earth";
import { Events } from "@/components/Events";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavbarDemo } from "@/components/NavbarDemo";
import Image from "next/image"

export default function Home() {
  return (
    <div>
      
    <main className="mt-40 flex min-h-screen flex-col items-center justify-between">
      
      <Hero/>
      <Earth/>
      <Events/>
      <Footer/>
    </main>
    </div>
  );
}