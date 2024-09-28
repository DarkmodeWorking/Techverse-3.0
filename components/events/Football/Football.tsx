'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Welcome to the e-Football Tournament, where every pass, tackle, and goal defines true champions! Today, players from all corners of the globe unite in pursuit of ultimate victory, pushing the boundaries of skill, strategy, and teamwork in the exhilarating world of PES (Pro Evolution Soccer). This is more than just a game—it's a test of precision, quick thinking, and flawless execution as players battle it out on the virtual pitch. The competition is fierce, and every moment counts as teams execute their tactics, aiming to outplay, outmaneuver, and outscore their opponents. From stunning long-range goals to last-second defensive saves, each match is packed with heart-pounding action. Whether you're an experienced pro or a rising star, this is your stage to showcase your talent and lead your team to glory. The road to victory is paved with challenges, but only the best will rise to the top. Let the games begin, and may the most skillful team claim the crown!`

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

