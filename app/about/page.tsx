// app/about/page.jsx

import { AboutPageHero } from "@/components/AboutPageHero";
import { CoreTeam } from "@/components/CoreTeam";
import { StarBackground } from "@/components/StarBackground";
import { div } from "framer-motion/client";

export default function AboutPage() {
    return (
        <div>
       <AboutPageHero/>
       <StarBackground/>
       <CoreTeam/>
      </div>
    );
  }
  