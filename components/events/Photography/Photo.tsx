'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Join us for an exciting photography competition where your creativity can earn you fantastic prizes!This is your chance to showcase your skills by capturing stunning images that adhere to our theme.Participants are encouraged to submit their best photographs, but be sure to follow the rules and regulations to ensure your entry is eligible.`

export function Photo() {
  return (
    <div
      key={"dummy-content"}
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <TextGenerateEffect words={words} />
    </div>
  );
};