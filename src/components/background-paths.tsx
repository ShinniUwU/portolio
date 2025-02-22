"use client"

import { useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
}

interface Path {
  points: Point[]
  progress: number
}

export function BackgroundPaths() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      const scale = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * scale
      canvas.height = window.innerHeight * scale
      ctx.scale(scale, scale)
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Create paths
    const paths: Path[] = []
    const pathCount = 5

    for (let i = 0; i < pathCount; i++) {
      const points: Point[] = []
      const pointCount = Math.floor(Math.random() * 3) + 3
      
      for (let j = 0; j < pointCount; j++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height
        })
      }
      
      paths.push({ points, progress: 0 })
    }

    function animate() {
      // Check if context is still valid
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      paths.forEach(path => {
        // Draw path
        ctx.beginPath()
        ctx.moveTo(path.points[0].x, path.points[0].y)

        for (let i = 1; i < path.points.length; i++) {
          ctx.lineTo(path.points[i].x, path.points[i].y)
        }

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
        ctx.lineWidth = 2
        ctx.stroke()

        // Animate progress
        path.progress += 0.002
        if (path.progress > 1) path.progress = 0

        // Draw moving dot
        const currentIndex = Math.floor(path.progress * (path.points.length - 1))
        const nextIndex = (currentIndex + 1) % path.points.length
        const subProgress = (path.progress * (path.points.length - 1)) % 1

        const currentPoint = path.points[currentIndex]
        const nextPoint = path.points[nextIndex]

        const x = currentPoint.x + (nextPoint.x - currentPoint.x) * subProgress
        const y = currentPoint.y + (nextPoint.y - currentPoint.y) * subProgress

        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
