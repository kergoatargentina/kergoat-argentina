'use client'

import { useEffect, useRef } from 'react'

interface Props {
  opacity?: number
}

export default function ParticleCanvas({ opacity = 0.35 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const mouse = { x: null as number | null, y: null as number | null, radius: 180 }

    class Particle {
      x: number
      y: number
      directionX: number
      directionY: number
      size: number
      color: string

      constructor(x: number, y: number, dX: number, dY: number, size: number, color: string) {
        this.x = x; this.y = y
        this.directionX = dX; this.directionY = dY
        this.size = size; this.color = color
      }

      draw() {
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx!.fillStyle = this.color
        ctx!.fill()
      }

      update() {
        if (this.x > canvas!.width || this.x < 0) this.directionX = -this.directionX
        if (this.y > canvas!.height || this.y < 0) this.directionY = -this.directionY

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < mouse.radius + this.size) {
            const force = (mouse.radius - distance) / mouse.radius
            this.x -= (dx / distance) * force * 4
            this.y -= (dy / distance) * force * 4
          }
        }

        this.x += this.directionX
        this.y += this.directionY
        this.draw()
      }
    }

    let particles: Particle[] = []

    function init() {
      particles = []
      const count = (canvas!.height * canvas!.width) / 9000
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 1.5 + 0.5
        const x = Math.random() * (canvas!.width - size * 4) + size * 2
        const y = Math.random() * (canvas!.height - size * 4) + size * 2
        const dX = (Math.random() * 0.3) - 0.15
        const dY = (Math.random() * 0.3) - 0.15
        const isOrange = Math.random() < 0.25
        const color = isOrange ? 'rgba(255,107,0,0.75)' : 'rgba(255,255,255,0.7)'
        particles.push(new Particle(x, y, dX, dY, size, color))
      }
    }

    function connect() {
      const threshold = (canvas!.width / 7) * (canvas!.height / 7)
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dist =
            (particles[a].x - particles[b].x) ** 2 +
            (particles[a].y - particles[b].y) ** 2

          if (dist < threshold) {
            const op = 1 - dist / 20000
            const nearMouse = mouse.x !== null && Math.sqrt(
              (particles[a].x - mouse.x!) ** 2 + (particles[a].y - mouse.y!) ** 2
            ) < mouse.radius

            ctx!.strokeStyle = nearMouse
              ? `rgba(255,107,0,${op * 0.6})`
              : `rgba(255,255,255,${op * 0.2})`
            ctx!.lineWidth = 0.8
            ctx!.beginPath()
            ctx!.moveTo(particles[a].x, particles[a].y)
            ctx!.lineTo(particles[b].x, particles[b].y)
            ctx!.stroke()
          }
        }
      }
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate)
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      particles.forEach(p => p.update())
      connect()
    }

    function resize() {
      canvas!.width = canvas!.offsetWidth
      canvas!.height = canvas!.offsetHeight
      init()
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onMouseOut = () => { mouse.x = null; mouse.y = null }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseout', onMouseOut)

    resize()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseout', onMouseOut)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
    />
  )
}
