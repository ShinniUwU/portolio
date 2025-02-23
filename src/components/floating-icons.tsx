"use client"

import { useEffect, useRef } from 'react'
import { FaTerminal, FaCode, FaRocket, FaShieldAlt, FaCog } from 'react-icons/fa'

interface FloatingIcon {
  Icon: typeof FaTerminal
  x: number
  y: number
  size: number
  speed: number
  angle: number
}

export function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<FloatingIcon[]>([
    { Icon: FaTerminal, x: 20, y: 20, size: 24, speed: 0.3, angle: Math.random() * Math.PI * 2 },
    { Icon: FaCode, x: 60, y: 80, size: 32, speed: 0.2, angle: Math.random() * Math.PI * 2 },
    { Icon: FaRocket, x: 80, y: 40, size: 28, speed: 0.25, angle: Math.random() * Math.PI * 2 },
    { Icon: FaShieldAlt, x: 40, y: 60, size: 30, speed: 0.35, angle: Math.random() * Math.PI * 2 },
    { Icon: FaCog, x: 70, y: 30, size: 26, speed: 0.28, angle: Math.random() * Math.PI * 2 }
  ])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const icons = iconsRef.current
    let animationFrameId: number

    const animate = () => {
      icons.forEach((icon, i) => {
        icon.x += Math.cos(icon.angle) * icon.speed
        icon.y += Math.sin(icon.angle) * icon.speed

        // Bounce off edges with smooth transition
        if (icon.x <= 0 || icon.x >= 100) {
          icon.angle = Math.PI - icon.angle
          icon.speed *= 0.9 // Slow down slightly on bounce
        }
        if (icon.y <= 0 || icon.y >= 100) {
          icon.angle = -icon.angle
          icon.speed *= 0.9 // Slow down slightly on bounce
        }

        // Gradually restore speed
        if (icon.speed < 0.3) {
          icon.speed += 0.001
        }

        // Update DOM element
        const element = container.children[i] as HTMLDivElement | undefined
        if (element) {
          element.style.transform = `translate(${icon.x}%, ${icon.y}%)`
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {iconsRef.current.map((icon, i) => (
        <div
          key={i}
          className="absolute text-white/10 transition-transform duration-1000 ease-out hover:text-white/30"
          style={{ transform: 'translate(0, 0)' }}
        >
          <icon.Icon size={24} />
        </div>
      ))}
    </div>
  )
}
