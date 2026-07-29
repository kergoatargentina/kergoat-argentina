'use client'

import { motion } from 'framer-motion'

interface Props {
  text: string
  highlight?: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3'
}

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const wordVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: EASE } },
}

export default function AnimatedTitle({ text, highlight, className = '', tag: Tag = 'h1' }: Props) {
  const words = text.split(' ')
  const highlightWords = highlight ? highlight.split(' ') : []

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
    >
      <Tag className={className}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className={`inline-block mr-[0.22em] ${highlightWords.includes(word) ? 'text-systemic-orange' : ''}`}
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  )
}
