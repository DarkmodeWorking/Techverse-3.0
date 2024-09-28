'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Welcome to the e-Football Tournament! Where every pass, tackle, and goal defines champions. Today, players from all corners of the world unite in pursuit of victory, pushing the limits of skill and strategy in the beautiful virtual game. Let the competition ignite, and may the best team rise to glory! `

export function Football() {
  return (
    <div
      key={"dummy-content"}
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <TextGenerateEffect words={words} />
    </div>
  );
};

