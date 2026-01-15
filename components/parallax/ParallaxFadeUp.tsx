'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxFadeUp({
  children,
  offset = 60,
}: {
  children: React.ReactNode;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
