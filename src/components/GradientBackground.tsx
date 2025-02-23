'use client'
import { useEffect, useRef } from 'react'

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    if (!ctx) return

    // Capture canvas in a constant that TypeScript knows won't be null
    const safeCanvas = canvas

    safeCanvas.width = window.innerWidth
    safeCanvas.height = window.innerHeight

    const orbs = Array.from({ length: 5 }, () => ({
      x: Math.random() * safeCanvas.width,
      y: Math.random() * safeCanvas.height,
      radius: Math.random() * 200 + 100,
      color: Math.random() < 0.5 ? '#8B5CF6' : '#EC4899',
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2
    }))

    let animationFrameId: number

    function animate() {
      ctx.fillStyle = '#0a0118'
      ctx.fillRect(0, 0, safeCanvas.width, safeCanvas.height)

      orbs.forEach(orb => {
        orb.x += orb.vx
        orb.y += orb.vy

        if (orb.x < -orb.radius) orb.x = safeCanvas.width + orb.radius
        if (orb.x > safeCanvas.width + orb.radius) orb.x = -orb.radius
        if (orb.y < -orb.radius) orb.y = safeCanvas.height + orb.radius
        if (orb.y > safeCanvas.height + orb.radius) orb.y = -orb.radius

        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius
        )
        gradient.addColorStop(0, `${orb.color}20`)
        gradient.addColorStop(1, `${orb.color}00`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    function handleResize() {
      safeCanvas.width = window.innerWidth
      safeCanvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />
} 