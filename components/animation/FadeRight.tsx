'use client';

import { motion } from "framer-motion";
import { useAnimation } from "./AnimationProvider";

type FadeUpProps = {
    children: React.ReactNode
    requireMusic?: boolean
    once?: boolean
    delay?: number
}

export default function FadeRight({
    children,
    requireMusic = false,
    once = false,
    delay = 0,
}: FadeUpProps) {
    const { opened } = useAnimation()

    return (
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={
                !requireMusic || opened
                    ? { opacity: 1, x: 0 }
                    : undefined
            }

            viewport={{ once, margin: "-100px" }}

            transition={{
                duration: 1,
                ease: "easeOut",
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}
