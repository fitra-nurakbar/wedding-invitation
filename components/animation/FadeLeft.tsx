'use client';

import { motion } from "framer-motion";
import { useAnimation } from "./AnimationProvider";

type FadeUpProps = {
    children: React.ReactNode
    requireMusic?: boolean
    once?: boolean
    delay?: number
    className?: string
}

export default function FadeLeft({
    children,
    requireMusic = false,
    once = false,
    delay = 0,
    className
}: FadeUpProps) {
    const { opened } = useAnimation()

    return (
        <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={
                !requireMusic || opened
                    ? { opacity: 1, x: 0 }
                    : undefined
            }
            viewport={{ once, margin: "-50px" }}
            transition={{
                duration: 1,
                ease: "easeOut",
                delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
