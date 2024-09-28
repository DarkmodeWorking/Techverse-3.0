'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Join us for the Poster Presentation, an exciting opportunity to foster academic exchange and showcase your research findings! This event is designed to enhance your presentation skills and engage you in constructive discussions with peers and experts in your field. Participants will present their posters on a variety of compelling topics, encouraging dialogue and collaboration.`

export function Poster() {
  return (
    <div
      key={"dummy-content"}
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <TextGenerateEffect words={words} />
    </div>
  );
};