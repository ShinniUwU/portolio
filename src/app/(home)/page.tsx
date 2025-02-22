"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Background from '@/app/(home)/background/page'
import Hero from '@/app/(home)/hero/page'
import Features from '@/app/(home)/features/page'
import Install from '@/app/(home)/install/page'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Install />
        <Footer />
      </div>
    </div>
  )
}
