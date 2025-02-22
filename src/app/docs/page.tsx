'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Sidebar from '@/components/docs/Sidebar'
import Content from '@/components/docs/Content'
import Background from '@/app/(home)/background/page'

export default function DocsPage() {
  const [currentSection, setCurrentSection] = useState('getting-started')

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />
      
      {/* Content - adjusted top padding to account for banner */}
      <div className="relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-4 pt-40 pb-20">
          <div className="flex gap-8">
            {/* Sidebar */}
            <Sidebar currentSection={currentSection} setCurrentSection={setCurrentSection} />
            
            {/* Main Content */}
            <Content currentSection={currentSection} />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
} 