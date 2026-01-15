'use client';

import { useEffect, useState } from "react";

type BackgroundCarouselProps = {
  images: string[];
  interval?: number;
};

export default function BackgroundCarousel({
  images,
  interval = 5000,
}: BackgroundCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative h-125 overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* OVERLAY (optional biar teks kebaca) */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
