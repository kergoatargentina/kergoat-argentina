'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'fade'
}

const initialMap = {
  up: { opacity: 0, y: 40 },
  left: { opacity: 0, x: -40 },
  right: { opacity: 0, x: 40 },
  fade: { opacity: 0 },
}

export default function AnimateOnScroll({ children, className, delay = 0, direction = 'up' }: Props) {
  return (
    <motion.div
      initial={initialMap[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.65, delay: delay / 1000, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
