'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Wealth, fame, power… the Pirate King had it all! Now, it's your turn to set sail on an epic adventure in search of the legendary One Piece! Join the crew in a thrilling quest full of mysterious clues, unknown challenges, and exotic locations as you navigate the treacherous seas in pursuit of the ultimate treasure.

Gather your crew, trust your instincts, and prepare to embark on a journey where danger lurks at every corner and the stakes are higher than ever. The Grand Line will test your courage, wits, and resolve as you uncover ancient secrets, battle fierce enemies, and forge alliances along the way. Do you have what it takes to outsmart rival pirates, unlock the treasure's location, and claim the title of Pirate King?

Adventure, excitement, and unimaginable riches await! Set your sails, follow the winds of destiny, and let the journey to the One Piece begin! The world is yours to conquer—will you rise to the challenge?`

export function TreasureHunt() {
  return (
    <div
      key={"dummy-content"}
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <TextGenerateEffect words={words} />
    </div>
  );
};