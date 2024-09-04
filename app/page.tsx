import { Earth } from "@/components/Earth";
import { Events } from "@/components/Events";
import { Hero } from "@/components/Hero";
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <Earth/>
      <Events/>
    </main>
  );
}