'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Join us for SPEED DRIFT, an exhilarating robotics lap race where innovation meets competition! Participants will design and build their own robots to navigate a challenging track, showcasing their engineering skills and creativity.`

export function LapRace() {
  return (
    <div
      key={"dummy-content"}
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <TextGenerateEffect words={words} />
    </div>
  );
};