'use client';

import { HTMLMotionProps, motion } from "framer-motion";
import { useAnimation } from "./AnimationProvider";

type FadeUpProps = {
    requireMusic?: boolean
    once?: boolean
    delay?: number
    duration?: number
} & HTMLMotionProps<'div'>

export default function FadeRight({
    children,
    requireMusic = false,
    once = false,
    delay = 0,
    className,
    duration = 1,
    ...rest
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

            viewport={{ once, margin: "-50px" }}

            transition={{
                duration,
                ease: "easeOut",
                delay,
            }}
            className={className}
            {...rest}
        >
            {children}
        </motion.div>
    );
}
