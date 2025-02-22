'use client'

import { useEffect, useRef } from 'react'

interface Node {
    x: number
    y: number
    vx: number
    vy: number
}

export default function ParticleNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const setCanvasSize = () => {
            const scale = window.devicePixelRatio || 1
            canvas.width = window.innerWidth * scale
            canvas.height = window.innerHeight * scale
            ctx.scale(scale, scale)
        }
        setCanvasSize()
        window.addEventListener('resize', setCanvasSize)

        // Create nodes
        const nodes: Node[] = []
        const nodeCount = 30 // Reduced for better performance
        const connectionDistance = 200

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3
            })
        }

        function animate() {
            if (!canvas || !ctx) return

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw nodes
            nodes.forEach(node => {
                node.x += node.vx
                node.y += node.vy

                // Bounce off edges
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1

                // Draw node
                ctx.beginPath()
                ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
                ctx.fill()
            })

            // Draw connections
            nodes.forEach((nodeA, i) => {
                nodes.slice(i + 1).forEach(nodeB => {
                    const dx = nodeB.x - nodeA.x
                    const dy = nodeB.y - nodeA.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        ctx.beginPath()
                        ctx.moveTo(nodeA.x, nodeA.y)
                        ctx.lineTo(nodeB.x, nodeB.y)
                        ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / connectionDistance) * 0.2})`
                        ctx.stroke()
                    }
                })
            })

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
            className="w-full h-full opacity-30"
        />
    )
}