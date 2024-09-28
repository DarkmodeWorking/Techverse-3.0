'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Welcome to SuperCoders, the ultimate problem-solving coding competition that will push your skills, speed, and creativity to the limit! This grand event is designed for competitive coding enthusiasts who thrive on tackling complex challenges and solving real-world problems under pressure. Whether you're a seasoned programmer or an emerging talent, SuperCoders offers a thrilling platform to showcase your coding expertise, logical thinking, and algorithmic prowess.

In this fast-paced competition, participants will face a series of increasingly difficult problems that require sharp minds and efficient solutions. Every second counts as you race against the clock, competing with some of the brightest coders from around the world. SuperCoders is not just about speed—it's about crafting clean, optimized solutions that can handle the toughest scenarios.

Get ready to dive into a world of algorithms, data structures, and intense problem-solving, where only the most skilled and innovative coders will rise to the top. Join now and prove yourself as the ultimate SuperCoder!`

export function SuperCoder() {
  return (
    <div
      key={"dummy-content"}
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <TextGenerateEffect words={words} />
    </div>
  );
};