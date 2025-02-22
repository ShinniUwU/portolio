'use client'
import { useEffect, useRef } from 'react'

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Create gradient orbs
    const orbs = [
      { x: 0.2, y: 0.3, size: 0.8, speed: 0.001, color: '#6366f1' },   // Indigo
      { x: 0.8, y: 0.7, size: 0.7, speed: 0.002, color: '#8b5cf6' },   // Purple
      { x: 0.5, y: 0.5, size: 0.9, speed: 0.0015, color: '#ec4899' },  // Pink
    ]

    let time = 0
    function animate() {
      // Clear with a very dark background
      ctx.fillStyle = '#0a0118'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw orbs
      orbs.forEach(orb => {
        const centerX = canvas.width * (orb.x + Math.sin(time * orb.speed) * 0.1)
        const centerY = canvas.height * (orb.y + Math.cos(time * orb.speed) * 0.1)
        const radius = Math.min(canvas.width, canvas.height) * orb.size

        const gradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, radius
        )
        
        gradient.addColorStop(0, `${orb.color}20`) // Very transparent
        gradient.addColorStop(0.5, `${orb.color}10`)
        gradient.addColorStop(1, `${orb.color}00`) // Fully transparent

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      time += 1
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full opacity-70"
      style={{ filter: 'blur(80px)' }}
    />
  )
} 