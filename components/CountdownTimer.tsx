"use client";
import { useState, useEffect } from "react";
import { FlipWords } from "../components/ui/flip-words";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    // Set your target date in IST
    const targetDate = new Date("2024-12-31T23:59:59+05:30");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number): string =>
    time < 10 ? `0${time}` : time.toString();

  return (
    <div className=" border-2 border-neutral-400 p-4 rounded-xl border-solid mx-16 md:mx-96 text-center text-lg md:text-4xl font-bold text-neutral-400">
      <div>
        <FlipWords word={formatTime(timeLeft.days)} /> : {" "}
        <FlipWords word={formatTime(timeLeft.hours)} /> : {" "}
        <FlipWords word={formatTime(timeLeft.minutes)} /> : {" "}
        <FlipWords word={formatTime(timeLeft.seconds)} /> 
      </div>
    </div>
  );
};

export default CountdownTimer;
