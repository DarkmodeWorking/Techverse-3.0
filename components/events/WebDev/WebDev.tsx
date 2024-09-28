'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Join us for the Web Dev Competition, an exciting opportunity to showcase your web development skills! This event challenges participants to test their knowledge and creativity through two engaging rounds. Whether you&apos;re a solo developer or part of a dynamic duo, this competition is designed to push your limits and enhance your coding abilities.`

export function WebDev() {
  return (
    <div
      key={"dummy-content"}
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <TextGenerateEffect words={words} />
    </div>
  );
};