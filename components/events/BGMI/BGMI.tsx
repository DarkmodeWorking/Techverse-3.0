'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `The ultimate mobile battleground awaits, where players unite, strategize, and engage in epic battles for glory and survival! Get ready to immerse yourself in the high-octane world of BGMI (Battlegrounds Mobile India), where only the strongest, fastest, and most strategic players will emerge victorious. Drop into intense combat zones, form unstoppable squads, and conquer the battlefield with precise coordination and tactical gameplay. Every match is a thrilling experience filled with adrenaline-pumping action, fierce firefights, and heart-racing moments as you fight to be the last one standing. Whether you're a solo warrior or a team player, this is your chance to prove your skills, outsmart your enemies, and claim the title of the ultimate champion. The battleground is constantly evolving, offering new challenges and rewards for those brave enough to answer the call. Join now, gear up, and let the battle begin—victory awaits those who dare to fight for it in BGMI's epic event!`

export function BGMI() {
  return (
    <div
      key={"dummy-content"}
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <TextGenerateEffect words={words} />
    </div>
  );
};