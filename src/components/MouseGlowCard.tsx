'use client'

import { useState, useRef, useEffect, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  circleSize?: number
  gradient?: string
}

export default function MouseGlowCard({
  children,
  className = '',
  circleSize = 380,
  gradient = 'linear-gradient(135deg, #0B124A, #1a3580, #FF6B00, #ff8c2a)',
}: Props) {
  const [mouse, setMouse] = useState<{ x: number | null; y: number | null }>({ x: null, y: null })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const { left, top } = el.getBoundingClientRect()
      setMouse({ x: e.clientX - left, y: e.clientY - top })
    }
    const onLeave = () => setMouse({ x: null, y: null })

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div ref={ref} className={`group relative transform-gpu overflow-hidden ${className}`}>
      {/* Gradient glow spot that follows the mouse */}
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-[transform,opacity] duration-500 group-hover:scale-[2.5]"
        style={{
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: mouse.x !== null ? `${mouse.x}px` : '-9999px',
          top: mouse.y !== null ? `${mouse.y}px` : '-9999px',
          opacity: mouse.x !== null ? 1 : 0,
          background: gradient,
          maskImage: `radial-gradient(${circleSize / 2}px circle at center, white, transparent)`,
          WebkitMaskImage: `radial-gradient(${circleSize / 2}px circle at center, white, transparent)`,
          zIndex: 0,
        }}
      />
      {/* Children sit above glow and handle their own background */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  )
}
