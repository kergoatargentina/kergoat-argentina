'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    // Solo en desktop
    if (window.matchMedia('(pointer: coarse)').matches) return

    let ringX = 0, ringY = 0
    let dotX = 0, dotY = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX
      dotY = e.clientY
      setHidden(false)
    }

    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)
    const onMouseLeave = () => setHidden(true)
    const onMouseEnter = () => setHidden(false)

    const interactives = () =>
      document.querySelectorAll('a, button, [data-magnetic]')

    const attachListeners = () => {
      interactives().forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    const animate = () => {
      // Dot sigue al instante
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`
      }
      // Ring sigue con lag suave
      ringX += (dotX - ringX) * 0.12
      ringY += (dotY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`
      }
      rafId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)
    attachListeners()

    const observer = new MutationObserver(attachListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      interactives().forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
      observer.disconnect()
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      {/* Dot central */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-systemic-orange pointer-events-none z-[9998] mix-blend-normal"
        style={{
          opacity: hidden ? 0 : 1,
          transition: 'opacity 0.2s, width 0.2s, height 0.2s',
          width: hovered ? '6px' : '8px',
          height: hovered ? '6px' : '8px',
        }}
      />
      {/* Ring exterior con lag */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9997] border border-systemic-orange/60"
        style={{
          opacity: hidden ? 0 : 1,
          width: hovered ? '48px' : '40px',
          height: hovered ? '48px' : '40px',
          transition: 'opacity 0.2s, width 0.25s cubic-bezier(0.34,1.56,0.64,1), height 0.25s cubic-bezier(0.34,1.56,0.64,1), background 0.2s',
          background: hovered ? 'rgba(255,107,0,0.08)' : 'transparent',
        }}
      />
    </>
  )
}
