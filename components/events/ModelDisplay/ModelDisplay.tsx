'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Join us to display your innovative models, ideas and technologies that shape our technological landscape. Your model should be related to the technical theme.`

export function ModelDisplay() {
  return (
    <div
      key={"dummy-content"}
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <TextGenerateEffect words={words} />
    </div>
  );
};