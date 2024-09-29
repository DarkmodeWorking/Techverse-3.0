'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Join us for the Poster Presentation, an exciting opportunity to foster academic exchange and showcase your research findings! This event is designed to help you refine your presentation skills while engaging in meaningful and constructive discussions with peers and experts in your field. Whether you're presenting groundbreaking research or exploring innovative ideas, this platform provides an excellent opportunity to share your work with a broader audience.

Participants will have the chance to present posters on a variety of compelling topics, sparking insightful dialogue and potential collaboration. The event encourages knowledge sharing, feedback, and networking, allowing you to gain fresh perspectives on your research while building valuable connections. It's not just about displaying your work—it's about communicating your ideas clearly and effectively to those who share your passion for discovery. So, bring your creativity, enthusiasm, and expertise, and take advantage of this unique platform to showcase your research and contribute to the academic conversation. Let's push the boundaries of knowledge together!`

export function Poster() {
  return (
    <div
      key={"dummy-content"}
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <TextGenerateEffect words={words} />
    </div>
  );
};