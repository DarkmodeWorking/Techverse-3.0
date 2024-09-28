'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Join us for an exciting opportunity to showcase your innovative models, groundbreaking ideas, and cutting-edge technologies that are shaping the future of our technological landscape. This event is a platform for forward-thinking creators, engineers, and innovators to display their work in line with our technical theme, pushing the boundaries of what is possible in today's rapidly evolving world. Whether you're working on next-gen robotics, sustainable energy solutions, AI-driven systems, or any other technology that is paving the way for the future, we invite you to share your vision.

Participants will have the chance to present their models and ideas to an engaged audience of fellow tech enthusiasts, industry leaders, and potential collaborators. It's a space to inspire, learn, and ignite conversations that can lead to real-world change. Showcase your talent, creativity, and technical prowess, and be part of the movement that drives innovation forward. Don't miss this chance to make an impact—bring your best work and join us for this thrilling event!`

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