'use client';

import { useAnimationReady } from "@/context/AnimationContext";
import { motion } from "framer-motion";

export default function FadeLeft({
    children,
    distance = 60,
}: {
    children: React.ReactNode;
    distance?: number;
}) {
    const { isReady } = useAnimationReady();

    return (
        <motion.div
            initial={{ opacity: 0, x: -distance }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
