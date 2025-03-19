"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Background from '@/app/(home)/background/page'
import Hero from '@/app/(home)/hero/page'
import WorkExperience from '@/app/(home)/experience/page'
import Skills from '@/app/(home)/skills/page'
import Testimonials from './testimonials/page'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <WorkExperience />
        <Skills />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}
