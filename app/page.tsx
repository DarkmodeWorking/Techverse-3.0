import { Earth } from "@/components/Earth";
import { Events } from "@/components/Events";
import { Hero } from "@/components/Hero";
import { NavbarDemo } from "@/components/NavbarDemo";
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <NavbarDemo />
    <main className="mt-40 flex min-h-screen flex-col items-center justify-between">
      
      <Hero/>
      <Earth/>
      <Events/>
    </main>
    </div>
  );
}