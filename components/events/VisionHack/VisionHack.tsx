'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Join us for an exciting hackathon where creativity and problem-solving come together! Participants will work on developing innovative solutions to real-world challenges using their skills in design and technology. It's a fun and collaborative event that encourages everyone to think outside the box and create something unique. Whether you're a tech enthusiast or just love to build new ideas, this hackathon is a great opportunity to learn, connect with others, and bring your ideas to life. Get ready to showcase your talents and make an impact!`

export function VisionHack() {
  return (
    <div
      key={"dummy-content"}
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <TextGenerateEffect words={words} />
    </div>
  );
};