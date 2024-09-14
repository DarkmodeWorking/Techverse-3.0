"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

import { SuperCoder } from '@/components/events/SuperCoder'

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

const DummyContent = () => {
  return (
    <div
      key={"dummy-content"}
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          
        </span>{" "}
        Oi Cunt solve this Linked List or I shall put Omlandah on yo ass
      </p>
      <Image
        src="/images/supercoders.jpeg"
        alt="Macbook mockup from Aceternity UI"
        width={500}
        height={500}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
      <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
        Solo: ₹ 69
        Duo: ₹ 420
      </p>
      <div className="flex justify-between">
        <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
          Event Head: Onurag Cunt <br />
          Phone: +91 69420 69420 <br />
          Email: omlandahdonkillmywife@gmail.com
        </p>
        <p className="text-neutral-600 pb-10 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
          Co-Event Head: Omlandah <br />
          Phone: +91 42069 42069 <br />
          Email: tookmybloodyson@reddiffmail.com
        </p>
      </div>
    </div>
  );
};

const data = [
  {
    category: "Model Display",
    title: "Techverse Innovators",
    src: "/images/modeldisplay.jpg",
    content: <SuperCoder />,
  },
  {
    category: "Idea Presentation",
    title: "Techverse Builders",
    src: "/images/idea2.jpg",
    content: <SuperCoder />,
  },
  {
    category: "Poster Presentation",
    title: "Techverse Artisans",
    src: "/images/poster.jpg",
    content: <SuperCoder />,
  },
  {
    category: "Tech Quiz",
    title: "Techverse Buzzers",
    src: "/images/techquiz.jpg",
    content: <SuperCoder />,
  },
  {
    category: "Website Development",
    title: "Techverse Webbers",
    src: "/images/website.webp",
    content: <DummyContent />,
  },
  {
    category: "Problem Solving Coding",
    title: "Techverse Supercoders",
    src: "/images/supercoders.jpeg",
    content: <SuperCoder />,
  },
  {
    category: "RC Car Lap Race",
    title: "Techverse Pursuits",
    src: "/images/laprace.jpg",
    content: <DummyContent />
  },
  {
    category: "PUBG Gaming",
    title: "Techverse PUBG",
    src: "/images/pubg.webp",
    content: <DummyContent />,
  },
  {
    category: "E Football",
    title: "Techverse Football",
    src: "/images/football.jpg",
    content: <DummyContent />,
  },
  {
    category: "8 Ball Pool",
    title: "Techverse Pool",
    src: "/images/8ball.jpg",
    content: <DummyContent />,
  },
  {
    category: "Indoor Chess",
    title: "Techverse Gambits",
    src: "/images/chess2.webp",
    content: <DummyContent />,
  },

  {
    category: "Indoor Carrom",
    title: "Techverse Strikers",
    src: "/images/carrom2.webp",
    content: <DummyContent />,
  },
  {
    category: "Photography",
    title: "Techverse Shutters",
    src: "/images/photo2.webp",
    content: <DummyContent />,
  },
  {
    category: "Treasure Hunt",
    title: "Techverse Explorers",
    src: "/images/treasure2.jpg",
    content: <DummyContent />,
  }
];
