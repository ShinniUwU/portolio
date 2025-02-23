'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Background from '@/app/(home)/background/page'
import { motion, AnimatePresence } from 'framer-motion'

interface Feature {
  name: string
  status: 'completed' | 'in-progress' | 'planned'
  description: string
  details?: string[]
}
// YES THIS IS HARDED YOU CAN CRY ALL YOU WANT IM LAZY AND IDK HOW ELSE TO DO THIS AND I REALLY WANT SMTHN LIKE THIS DESIGN TO MATCH OUR THEME D:
export default function ProgressPage() {
  const [features] = useState<Feature[]>([
    {
      name: 'Core Installation',
      status: 'completed',
      description: 'Basic shell installation and setup',
      details: [
        'One-command installation script',
        'Distribution detection',
        'Dependency management',
        'Shell configuration'
      ]
    },
    {
      name: 'Security Features',
      status: 'in-progress',
      description: 'Enhanced security configurations',
      details: [
        'SSH hardening ✓',
        'Firewall configuration ✓',
        'Intrusion detection - In Progress',
        'Automatic security updates - In Progress',
        'Security auditing tools - Planned'
      ]
    },
    {
      name: 'System Monitoring',
      status: 'in-progress',
      description: 'System metrics and monitoring tools',
      details: [
        'Resource usage tracking ✓',
        'Performance monitoring ✓',
        'Log aggregation - In Progress',
        'Alert system - Planned'
      ]
    },
    {
      name: 'Customization',
      status: 'planned',
      description: 'User customization options',
      details: [
        'Theme system',
        'Plugin architecture',
        'Custom prompt designs',
        'User preferences management'
      ]
    },
    {
      name: 'Documentation',
      status: 'in-progress',
      description: 'Project documentation and guides',
      details: [
        'Installation guide ✓',
        'Basic usage docs ✓',
        'API documentation - In Progress',
        'Advanced configuration guide - Planned'
      ]
    }
  ])

  const getStatusColor = (status: Feature['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-400/10 text-green-400 border-green-400/20'
      case 'in-progress':
        return 'bg-blue-400/10 text-blue-400 border-blue-400/20'
      case 'planned':
        return 'bg-purple-400/10 text-purple-400 border-purple-400/20'
    }
  }

  const getStatusText = (status: Feature['status']) => {
    switch (status) {
      case 'completed':
        return 'Completed'
      case 'in-progress':
        return 'In Progress'
      case 'planned':
        return 'Planned'
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />
      
      <div className="relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              Project Progress
            </h1>
            <p className="text-gray-400 text-center mb-16">
              Track the development status of LunarShell features and updates
            </p>

            <div className="space-y-6">
              {features.map((feature) => (
                <div 
                  key={feature.name} 
                  className="bg-[#0a0a0a] rounded-lg overflow-hidden shadow-2xl border border-white/5"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-semibold text-white mb-2">
                          {feature.name}
                        </h2>
                        <p className="text-gray-400 mb-4">
                          {feature.description}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(feature.status)}`}>
                        {getStatusText(feature.status)}
                      </span>
                    </div>

                    {feature.details && (
                      <div className="mt-4 space-y-2">
                        {feature.details.map((detail, index) => (
                          <div 
                            key={index}
                            className="text-sm text-gray-400"
                          >
                            • {detail}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
} 