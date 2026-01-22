'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { useAnimation } from './AnimationProvider'

type ScaleUpProps = {
  requireMusic?: boolean
  once?: boolean
  delay?: number
  duration?: number
} & HTMLMotionProps<'div'>
export default function ScaleUp({
  children,
  requireMusic = false,
  once = false,
  delay = 0,
  duration = 1,
  className,
  ...rest 
}: ScaleUpProps) {
  const { opened } = useAnimation()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={
        !requireMusic || opened
          ? { opacity: 1, scale: 1 }
          : undefined
      }
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        ease: 'easeOut',
        delay,
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
