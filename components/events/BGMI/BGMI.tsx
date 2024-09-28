'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `The ultimate mobile battleground awaits, where players unite, strategize, and engage in epic battles for victory. Join now!`

export function BGMI() {
  return (
    <div
      key={"dummy-content"}
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <TextGenerateEffect words={words} />
    </div>
  );
};