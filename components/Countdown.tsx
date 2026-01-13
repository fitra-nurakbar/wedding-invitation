'use client';

import { useEffect, useState } from "react";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

type TimeBoxProps = {
  value: string;
  label: string;
};

const INITIAL_TIME: TimeLeft = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

export default function Countdown() {
  const targetDate = new Date("2026-03-29T00:00:00");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(INITIAL_TIME);
  const [mounted, setMounted] = useState(false);

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) return INITIAL_TIME;

    return {
      days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
    };
  };

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  if (!mounted) return null; // ⬅️ penting untuk hydration

  return (
    <div className="grid grid-cols-4 gap-2">
      <TimeBox value={timeLeft.days} label="Days" />
      <TimeBox value={timeLeft.hours} label="Hours" />
      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

function TimeBox({ value, label }: TimeBoxProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#afa69c] text-white rounded-lg p-2.5">
      <div className="text-xl -mb-1.5">{value}</div>
      <p className="text-[9.5px]">{label}</p>
    </div>
  );
}
