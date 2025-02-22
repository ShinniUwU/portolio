"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Background from '@/app/(home)/background/page'
import Hero from '@/app/(home)/hero/page'
import Features from '@/app/(home)/features/page'
import Install from '@/app/(home)/install/page'
import TerminalPreview from '@/components/sections/terminal-preview'
import PreviewSection from '@/components/sections/preview-section'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <PreviewSection />
        <TerminalPreview />
        <Install />
        <Footer />
      </div>
    </div>
  )
}
