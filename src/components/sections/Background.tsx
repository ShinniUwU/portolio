"use client"

import { motion } from "framer-motion"
import GradientBackground from '@/components/GradientBackground'
import ParticleNetwork from '@/components/ParticleNetwork'
import { FloatingIcons } from '@/components/floating-icons'
import { BackgroundPaths } from '@/components/background-paths'

export default function Background() {
  return (
    <div className="fixed inset-0">
      <GradientBackground />
      
      {/* Background paths layer */}
      <div className="absolute inset-0 opacity-20">
        <BackgroundPaths />
      </div>
      
      {/* Particle network layer */}
      <div className="absolute inset-0 opacity-30">
        <ParticleNetwork />
      </div>

      {/* Glow effects */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <motion.div
          className="h-[600px] w-[600px] bg-blue-500 rounded-full filter blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Floating icons layer */}
      <div className="absolute inset-0">
        <FloatingIcons />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 pointer-events-none" />
    </div>
  )
} 