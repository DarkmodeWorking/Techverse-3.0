'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Skill, strategy, and focus—all come together in the thrilling game of 8-ball pool. Whether it's a friendly match or fierce competition, every shot counts, and every move could lead to victory. Aim sharp, play smart, and let the cue guide you to greatness!`

export function Ball() {
  return (
    <div
      key={"dummy-content"}
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <TextGenerateEffect words={words} />
    </div>
  );
};