'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Join us for an exhilarating hackathon where creativity and problem-solving come together to spark innovation! This dynamic event invites participants to collaborate and develop cutting-edge solutions to real-world challenges using their skills in design, technology, and critical thinking. Whether you're a seasoned coder, a design whiz, or simply passionate about building new ideas, this hackathon is the perfect opportunity to unleash your potential and showcase your talents.

During this fun and collaborative experience, teams will have the chance to brainstorm, prototype, and pitch their unique projects, all while fostering a spirit of teamwork and camaraderie. Participants will engage in workshops, network with industry experts, and gain valuable insights that can help bring their ideas to life.

So, gear up for an unforgettable journey filled with learning, creativity, and excitement! Don’t miss your chance to make a meaningful impact in your community and beyond. Join us at the hackathon and be part of something truly transformative!`

export function VisionHack() {
  return (
    <div
      key={"dummy-content"}
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <TextGenerateEffect words={words} />
    </div>
  );
};