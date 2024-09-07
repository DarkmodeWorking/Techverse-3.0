// app/about/page.jsx

import { AboutPageHero } from "@/components/AboutPageHero";
import { CoreTeam } from "@/components/CoreTeam";
import { NavbarDemo } from "@/components/NavbarDemo";
import { StarBackground } from "@/components/StarBackground";
import { div } from "framer-motion/client";

export default function AboutPage() {
    return (
      <div>
        <NavbarDemo />
        <div className="mt-10 flex min-h-screen flex-col items-center justify-between">
       <AboutPageHero/>
       {/* <StarBackground/> */}
       <CoreTeam/>
      </div>
      </div>
    );
  }
  