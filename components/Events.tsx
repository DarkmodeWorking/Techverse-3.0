"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

import { SuperCoder } from '@/components/events/Supercoder/SuperCoders'
import { SuperCoderRules } from "./events/Supercoder/SuperCoderRules";
import { SuperCoderHeads } from "./events/Supercoder/SuperCoderHeads";
import { WebDev } from "./events/WebDev/WebDev";
import { WebDevRules } from "./events/WebDev/WebDevRules";
import { WebDevHeads } from "./events/WebDev/WebDevHeads";
import { TechQuiz } from "./events/TechQuiz/TechQuiz";
import { TechQuizRules } from "./events/TechQuiz/TechQuizRules";
import { TechQuizHeads } from "./events/TechQuiz/TechQuizHeads";
import { VisionHack } from "./events/VisionHack/VisionHack";
import { VisionHackRules } from "./events/VisionHack/VisionHackRules";
import { VisionHackHeads } from "./events/VisionHack/VisionHackHeads";
import { ModelDisplay } from "./events/ModelDisplay/ModelDisplay";
import { ModelDisplayRules } from "./events/ModelDisplay/ModelDisplayRules";
import { ModelDisplayHeads } from "./events/ModelDisplay/ModelDisplayHeads";
import { Poster } from "./events/Poster/Poster";
import { PosterRules } from "./events/Poster/PosterRules";
import { PosterHeads } from "./events/Poster/PosterHeads";
import { LapRace } from "./events/LapRace/LapRace";
import { LapRaceRules } from "./events/LapRace/LapRaceRules";
import { LapRaceHeads } from "./events/LapRace/LapRaceHeads";
import { BGMI } from "./events/BGMI/BGMI";
import { BGMIRules } from "./events/BGMI/BGMIRules";
import { BGMIHeads } from "./events/BGMI/BGMIHeads";
import { Football } from "./events/Football/Football";
import { FootballRules } from "./events/Football/FootballRules";
import { FootballHeads } from "./events/Football/FootballHeads";
import { Ball } from "./events/Ball8/Ball";
import { BallRules } from "./events/Ball8/BallRules";
import { BallHeads } from "./events/Ball8/BallHeads";
import { Photo } from "./events/Photography/Photo";
import { PhotoRules } from "./events/Photography/PhotoRules";
import { PhotoHeads } from "./events/Photography/PhotoHeads";
import { TreasureHunt } from "./events/TreasureHunt/TreasureHunt";
import { TreasureHuntRules } from "./events/TreasureHunt/TreasureHuntRules";
import { TreasureHuntHeads } from "./events/TreasureHunt/TreasureHuntHeads";

export function Events() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-20" id="events">
      <h2 className="text-center max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Events
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

// const DummyContent = () => {
//   return (
//     <div
//       key={"dummy-content"}
//       className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//     >
//       <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
//         <span className="font-bold text-neutral-700 dark:text-neutral-200">
          
//         </span>{" "}
//         Oi Cunt solve this Linked List or I shall put Omlandah on yo ass
//       </p>
//       <Image
//         src="/images/supercoders.jpeg"
//         alt="Macbook mockup from Aceternity UI"
//         width={500}
//         height={500}
//         className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//       />
//       <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
//         Solo: ₹ 69
//         Duo: ₹ 420
//       </p>
//       <div className="flex justify-between">
//         <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
//           Event Head: Onurag Cunt <br />
//           Phone: +91 69420 69420 <br />
//           Email: omlandahdonkillmywife@gmail.com
//         </p>
//         <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
//           Co-Event Head: Omlandah <br />
//           Phone: +91 42069 42069 <br />
//           Email: tookmybloodyson@reddiffmail.com
//         </p>
//       </div>
//     </div>
//   );
// };

const data = [
  {
    category: "Model Display",
    title: "Model Display",
    src: "/images/modeldisplay.jpg",
    content: <ModelDisplay />,
    rules: <ModelDisplayRules />,
    heads: <ModelDisplayHeads />
  },
  {
    category: "Mini Hackathon",
    title: "Vision Hack",
    src: "/images/idea2.jpg",
    content: <VisionHack />,
    rules: <VisionHackRules />,
    heads: <VisionHackHeads />
  },
  {
    category: "Poster Presentation", // artisans
    title: "Poster Presentation",
    src: "/images/poster.jpg",
    content: <Poster />,
    rules: <PosterRules />,
    heads: <PosterHeads />
  },
  {
    category: "Tech Quiz",
    title: "Quiz of Thrones",
    src: "/images/techquiz.jpg",
    content: <TechQuiz />,
    rules: <TechQuizRules />,
    heads: <TechQuizHeads />
  },
  {
    category: "Website Development",
    title: "Web Devs",
    src: "/images/website.webp",
    content: <WebDev />,
    rules: <WebDevRules />,
    heads: <WebDevHeads />
  },
  {
    category: "Problem Solving Coding",
    title: "Super Coders",
    src: "/images/supercoders.jpeg",
    content: <SuperCoder />,
    rules: <SuperCoderRules />,
    heads: <SuperCoderHeads />
  },
  {
    category: "Lap Race",
    title: "Speed Drift",
    src: "/images/laprace.jpg",
    content: <LapRace />,
    rules: <LapRaceRules />,
    heads: <LapRaceHeads />
  },
  {
    category: "BGMI Gaming",
    title: "Battlegrounds",
    src: "/images/pubg.webp",
    content: <BGMI />,
    rules: <BGMIRules />,
    heads: <BGMIHeads />
  },
  {
    category: "PES Gaming",
    title: "E Football",
    src: "/images/football.jpg",
    content: <Football />,
    rules: <FootballRules />,
    heads: <FootballHeads />
  },
  {
    category: "8 Ball Pool Gaming",
    title: "Play with my Balls",
    src: "/images/8ball.jpg",
    content: <Ball />,
    rules: <BallRules />,
    heads: <BallHeads />
  },
  // {
  //   category: "Indoor Chess",
  //   title: "Techverse Gambits",
  //   src: "/images/chess2.webp",
  //   content: <DummyContent />,
  //   rules: <SuperCoderRules />,
  //   heads: <SuperCoderHeads />
  // },

  // {
  //   category: "Indoor Carrom",
  //   title: "Techverse Strikers",
  //   src: "/images/carrom2.webp",
  //   content: <DummyContent />,
  //   rules: <SuperCoderRules />,
  //   heads: <SuperCoderHeads />
  // },
  {
    category: "Photography",
    title: "Shutter Showcase",
    src: "/images/photo2.webp",
    content: <Photo />,
    rules: <PhotoRules />,
    heads: <PhotoHeads />
  },
  {
    category: "Treasure Hunt",
    title: "Run for the One Piece",
    src: "/images/treasure2.jpg",
    content: <TreasureHunt />,
    rules: <TreasureHuntRules />,
    heads: <TreasureHuntHeads />
  }
];
