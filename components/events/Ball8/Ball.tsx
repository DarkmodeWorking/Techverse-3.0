'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Skill, strategy, and focus—all come together in the exhilarating game of 8-ball pool. It's not just a test of accuracy, but a challenge of foresight and precision. Each shot sets the stage for the next, demanding a balance between offensive strikes and defensive maneuvers. Whether you're playing a casual game with friends or facing off in intense competition, every moment requires full concentration. One wrong move can shift the tide, while a perfectly executed shot can pave the way to victory. It's a game of inches, where subtle movements and careful planning make all the difference. As you line up your cue, trust in your practice, visualize the path, and let your instincts take over. Victory comes to those who can remain calm under pressure, read the table like a pro, and execute their shots with confidence. Aim sharp, play smart, and let your cue lead you to greatness in this timeless game of skill and finesse!`

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