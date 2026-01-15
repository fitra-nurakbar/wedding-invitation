'use client';
import { useAnimationReady } from "@/context/AnimationContext";
import { motion } from "framer-motion";

export default function FadeDown({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isReady } = useAnimationReady();

    return (
        <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
