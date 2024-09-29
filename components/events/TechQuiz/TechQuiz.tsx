'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Are you the tech-nerd of your group? Do your friends mock you for always being up-to-date on the latest gadgets, innovations, and tech trends? Now's your chance to prove them wrong and show that your tech knowledge is truly unmatched! Welcome to the Tech-Quiz, an exhilarating competition designed to test your expertise on everything from software and hardware to cutting-edge technologies and groundbreaking inventions.

This is the perfect platform to showcase your tech-savvy side and challenge other enthusiasts in a thrilling battle of wits. With a wide range of topics covering the entire tech spectrum, the Tech-Quiz will push your knowledge to its limits. Every question you ace brings you closer to exciting prizes and well-deserved bragging rights!

So, if you're ready to prove that your passion for technology is more than just trivia, join the Tech-Quiz now. Put your knowledge to the ultimate test and rise as the champion tech guru of your group!`

export function TechQuiz() {
  return (
    <div
      key={"dummy-content"}
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <TextGenerateEffect words={words} />
    </div>
  );
};