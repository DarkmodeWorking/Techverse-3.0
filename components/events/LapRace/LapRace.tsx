'use client'
import { TextGenerateEffect } from '../../ui/text-generate-event'

const words = `Join us for SPEED DRIFT, an exhilarating robotics lap race where innovation meets fierce competition! This thrilling event challenges participants to design, build, and race their very own robots, pushing the boundaries of engineering, creativity, and speed. The track is filled with sharp turns, obstacles, and high-speed stretches, demanding precise navigation and cutting-edge technology. Competitors will need to carefully calibrate their robots, using advanced engineering and coding skills to achieve the perfect balance between speed and control.

Whether you're a seasoned robotics expert or an enthusiastic newcomer, SPEED DRIFT offers an exciting platform to showcase your ingenuity, teamwork, and problem-solving abilities. Every lap brings new challenges, and only the most innovative designs and sharpest strategies will make it to the finish line. The competition promises adrenaline-pumping action as robots drift through corners and race for the top spot. Are you ready to take on the challenge? Sign up now and let your robot race to victory!`

export function LapRace() {
  return (
    <div
      key={"dummy-content"}
      className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <TextGenerateEffect words={words} />
    </div>
  );
};