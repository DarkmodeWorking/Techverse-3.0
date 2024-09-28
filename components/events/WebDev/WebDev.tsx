'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Join us for the Web Dev Competition, an exciting opportunity to showcase your web development skills and take your abilities to the next level! This thrilling event challenges participants to test their knowledge and creativity through two engaging rounds, designed to push the boundaries of your coding prowess. Whether you're a solo developer or part of a dynamic duo, this competition offers a platform to demonstrate your talent and innovation.

In the first round, you'll tackle real-world scenarios, developing practical solutions that highlight your technical skills and problem-solving abilities. The second round will challenge you to think outside the box as you create an original project that showcases your unique style and creativity.

Participants will also benefit from networking opportunities with fellow developers and industry professionals, making it a fantastic chance to learn, grow, and collaborate. So, gear up for an unforgettable experience that combines competition, learning, and creativity. Don't miss out—register now and prepare to make your mark in the world of web development!`

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