'use client';

import { HTMLMotionProps, motion } from "framer-motion";
import { useAnimation } from "./AnimationProvider";

type FadeUpProps = {
    requireMusic?: boolean
    once?: boolean
    delay?: number
    duration?: number
} & HTMLMotionProps<'div'>

export default function FadeDown({
    children,
    requireMusic = false,
    once = false,
    delay = 0,
    duration = 1,
    className,
    ...rest
}: FadeUpProps) {
    const { opened } = useAnimation()

    return (
        <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={
                !requireMusic || opened
                    ? { opacity: 1, y: 0 }
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
