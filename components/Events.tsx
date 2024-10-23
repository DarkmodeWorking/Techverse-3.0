"use client";
import Image from "next/image";
import React from "react";
// import { Carousel, Card } from "@/components/ui/apel-cord-carusu";
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

import { BallButton } from "./events/Ball8/BallButton";
import { ModelDisplayButtonButton } from "./events/ModelDisplay/ModelDisplayButton";
import { VisionHackButton } from "./events/VisionHack/VisionHackButton";
import { PosterButton } from "./events/Poster/PosterButton";
import { button } from "framer-motion/client";
import { TechQuizButton } from "./events/TechQuiz/TechQuizButton";
import { WebDevButton } from "./events/WebDev/WebDevButton";
import { SuperCoderButton } from "./events/Supercoder/SuperCoderButton";
import { LapRaceButtonButton } from "./events/LapRace/LapRaceButton";
import { BGMIButton } from "./events/BGMI/BGMIButton";
import { FootballButton } from "./events/Football/FootballButton";
import { PhotoButton } from "./events/Photography/PhotoButton";
import { TreasureHuntButton } from "./events/TreasureHunt/TreasureHuntButton";

export function Events() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-20" id="events">
      <h2  className="text-center  max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-serif text-neutral-200">
        Events
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Model Display",
    title: "Model Matrix",
    src: "/images/modeldisplay.jpg",
    content: <ModelDisplay />,
    rules: <ModelDisplayRules />,
    heads: <ModelDisplayHeads />,
    button: <ModelDisplayButtonButton />
  },
  {
    category: "Mini Hackathon",
    title: "Vision Hack",
    src: "/images/idea2.jpg",
    content: <VisionHack />,
    rules: <VisionHackRules />,
    heads: <VisionHackHeads />,
    button: <VisionHackButton />
  },
  {
    category: "Poster Presentation", // artisans
    title: "Canva Fusion",
    src: "/images/poster.jpg",
    content: <Poster />,
    rules: <PosterRules />,
    heads: <PosterHeads />,
    button: <PosterButton />
  },
  {
    category: "Tech Quiz",
    title: "Quiz of Thrones",
    src: "/images/techquiz.jpg",
    content: <TechQuiz />,
    rules: <TechQuizRules />,
    heads: <TechQuizHeads />,
    button: <TechQuizButton />
  },
  {
    category: "Website Development",
    title: "Lord of the Webs",
    src: "/images/website.webp",
    content: <WebDev />,
    rules: <WebDevRules />,
    heads: <WebDevHeads />,
    button: <WebDevButton />
  },
  {
    category: "Problem Solving Coding",
    title: "Super Coders",
    src: "/images/supercoders.jpeg",
    content: <SuperCoder />,
    rules: <SuperCoderRules />,
    heads: <SuperCoderHeads />,
    button: <SuperCoderButton />
  },
  {
    category: "Lap Race",
    title: "Speed Drift",
    src: "/images/laprace.jpg",
    content: <LapRace />,
    rules: <LapRaceRules />,
    heads: <LapRaceHeads />,
    button: <LapRaceButtonButton />
  },
  {
    category: "Battle Royale",
    title: "BGMI",
    src: "/images/pubg.webp",
    content: <BGMI />,
    rules: <BGMIRules />,
    heads: <BGMIHeads />,
    button: <BGMIButton />
  },
  {
    category: "E Football",
    title: "Digital Kickoff",
    src: "/images/football.jpg",
    content: <Football />,
    rules: <FootballRules />,
    heads: <FootballHeads />,
    button: <FootballButton />
  },
  {
    category: "8 Ball Pool",
    title: "Billiards Blitz",
    src: "/images/8ball.jpg",
    content: <Ball />,
    rules: <BallRules />,
    heads: <BallHeads />,
    button: <BallButton />
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
    heads: <PhotoHeads />,
    button: <PhotoButton />
  },
  {
    category: "Treasure Hunt",
    title: "Run for the One Piece",
    src: "/images/treasure2.jpg",
    content: <TreasureHunt />,
    rules: <TreasureHuntRules />,
    heads: <TreasureHuntHeads />,
    button: <TreasureHuntButton />
  }
];
