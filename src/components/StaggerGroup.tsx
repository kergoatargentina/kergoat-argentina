'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GroupProps {
  children: ReactNode
  className?: string
  stagger?: number
}

interface ItemProps {
  children: ReactNode
  className?: string
}

const containerVariants = (stagger: number) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
})

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export function StaggerGroup({ children, className, stagger = 0.1 }: GroupProps) {
  return (
    <motion.div
      className={className}
      variants={containerVariants(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: ItemProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
