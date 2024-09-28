'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Do Code Lmao`

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