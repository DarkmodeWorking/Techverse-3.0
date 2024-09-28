'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Join us for an exciting photography competition where your creativity and talent could win you fantastic prizes! This is your chance to showcase your skills by capturing stunning images that align with our chosen theme. Whether you're a seasoned professional or an aspiring photographer, this competition invites participants of all levels to submit their best work, highlighting their unique perspective and artistic flair.

From breathtaking landscapes to intimate portraits or abstract compositions, the possibilities are endless, but make sure your submission reflects the theme and meets the competition guidelines. Be sure to follow all rules and regulations to ensure your entry is eligible for judging. The most creative, technically proficient, and compelling photographs will be in the running for top prizes and recognition. So grab your camera, explore the world through your lens, and let your imagination run wild. Don't miss this chance to gain exposure, win amazing rewards, and be part of a vibrant photography community!`

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