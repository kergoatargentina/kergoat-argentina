'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  end: number
  duration?: number // ms
  suffix?: string
  prefix?: string
  decimals?: number
}

export default function CountUp({ end, duration = 1800, suffix = '', prefix = '', decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(eased * end)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, end, duration])

  return (
    <span ref={ref}>
      {prefix}{value.toFixed(decimals)}{suffix}
    </span>
  )
}
