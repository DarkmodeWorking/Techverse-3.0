'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Are you the tech-nerd of your group? Do people mock you for your knowledge on tech stuff? This is the best opportunity to put your knowledge to the test, ace this Tech-Quiz and  win exciting prizes!`

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