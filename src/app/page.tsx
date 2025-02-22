'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Background from '@/components/sections/Background'
import TerminalPreview from '@/components/sections/terminal-preview'
import { FaRocket, FaShieldAlt, FaBox, FaTerminal } from 'react-icons/fa'
import Link from 'next/link'

// Hero Section Component
function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent">
          Transform Your Linux Terminal Experience
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-10">
          A modern, elegant, and secure shell environment with smart configurations and beautiful customizations.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            href="#install"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:opacity-90 transition"
          >
            Get Started
          </Link>
          <Link 
            href="#docs"
            className="px-8 py-4 bg-white/10 rounded-full text-white font-semibold hover:bg-white/20 transition"
          >
            Documentation
          </Link>
        </div>
      </div>
    </section>
  )
}

// Features Section Component
function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
          Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaRocket className="text-4xl text-purple-400" />,
              title: "Modern Shell",
              description: "Enhanced prompt powered by Starship with smart configurations"
            },
            {
              icon: <FaShieldAlt className="text-4xl text-pink-400" />,
              title: "Security Focused",
              description: "Hardened SSH and system security configurations"
            },
            {
              icon: <FaBox className="text-4xl text-purple-400" />,
              title: "Smart Package Management",
              description: "Optimized package handling for server environments"
            },
            {
              icon: <FaTerminal className="text-4xl text-pink-400" />,
              title: "Beautiful MOTD",
              description: "Informative Message of the Day with system metrics"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:from-white/10 hover:to-white/15 transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Install Section Component
function Install() {
  return (
    <section id="install" className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
          Quick Install
        </h2>
        <div className="bg-black/30 p-6 rounded-xl max-w-3xl mx-auto">
          <code className="text-gray-300 text-sm md:text-base">
            curl -fsSL https://shell.lunarlabs.cc/install.sh | bash
          </code>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <TerminalPreview />
        <Install />
        <Footer />
      </div>
    </div>
  )
} 