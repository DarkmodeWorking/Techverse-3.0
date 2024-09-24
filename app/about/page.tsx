// app/about/page.jsx

import { AboutPageHero } from "@/components/AboutPageHero";
import { CoreTeam } from "@/components/CoreTeam";
import { CoreTeamAlt } from "@/components/CoreTeamAlt";
import { TextGenerateEffectDemo } from "@/components/College";
import { NavbarDemo } from "@/components/NavbarDemo";
import { StarBackground } from "@/components/StarBackground";
import { div } from "framer-motion/client";

export default function AboutPage() {
    return (
      <div>
        <div className="flex min-h-screen flex-col items-center justify-between">
       <AboutPageHero/>
       {/* <StarBackground/> */}
       {/* <CoreTeam/> */}
       <TextGenerateEffectDemo />
       <CoreTeamAlt />
      </div>
      </div>
    );
  }
  