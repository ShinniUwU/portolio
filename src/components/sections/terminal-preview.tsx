'use client'

import { useState, useEffect } from 'react'

interface OutputLine {
  text: string
  delay: number // delay in milliseconds before showing this line
  color?: string
}

interface OutputItem {
  text: string
  color?: string
}

export default function TerminalPreview() {
  const [currentCommand, setCurrentCommand] = useState("")
  const [output, setOutput] = useState<OutputItem[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [cleared, setCleared] = useState(false)

  useEffect(() => {
    const installationSteps: OutputLine[] = [
      { text: "██╗     ██╗   ██╗███╗   ██╗ █████╗ ██████╗ ███████╗██╗  ██╗███████╗██╗     ██╗", delay: 1500, color: "text-white" },
      { text: "██║     ██║   ██║████╗  ██║██╔══██╗██╔══██╗██╔════╝██║  ██║██╔════╝██║     ██║", delay: 100, color: "text-white" },
      { text: "██║     ██║   ██║██╔██╗ ██║███████║██████╔╝███████╗███████║█████╗  ██║     ██║", delay: 100, color: "text-white" },
      { text: "██║     ██║   ██║██║╚██╗██║██╔══██║██╔══██╗╚════██║██╔══██║██╔══╝  ██║     ██║", delay: 100, color: "text-white" },
      { text: "███████╗╚██████╔╝██║ ╚████║██║  ██║██║  ██║███████║██║  ██║███████╗███████╗███████╗", delay: 100, color: "text-white" },
      { text: "╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝", delay: 100, color: "text-white" },
      { text: "", delay: 500 },
      { text: "Version 2.0.0 - Universal Installer", delay: 1000, color: "text-gray-400" },
      { text: "Developed by Luna", delay: 1000, color: "text-cyan-400" },
      { text: "", delay: 1000 },
      { text: "┌── Starting Installation Process", delay: 1000, color: "text-magenta-400" },
      { text: "├─ Detecting System Distribution", delay: 1000, color: "text-cyan-400" },
      { text: "✓ Detected Ubuntu 24.04", delay: 1000, color: "text-green-400" },
      { text: "└── System detection complete", delay: 1000, color: "text-magenta-400" },
      { text: "", delay: 500 },
      { text: "┌── Installing Required Packages", delay: 1000, color: "text-magenta-400" },
      { text: "[1/11] ✓ figlet installed", delay: 1000, color: "text-green-400" },
      { text: "[2/11] ✓ jq installed", delay: 1000, color: "text-green-400" },
      { text: "[3/11] ✓ zsh installed", delay: 1000, color: "text-green-400" },
      { text: "[4/11] Installing starship...", delay: 1000, color: "text-blue-400" },
      { text: "└── Package installation complete", delay: 1000, color: "text-magenta-400" },
      { text: "", delay: 500 },
      { text: "┌── Configuring Security", delay: 1000, color: "text-magenta-400" },
      { text: "├─ Applying firewall rules", delay: 1000, color: "text-cyan-400" },
      { text: "├─ Hardening SSH configuration", delay: 1000, color: "text-cyan-400" },
      { text: "└── Security configuration complete", delay: 1000, color: "text-magenta-400" },
      { text: "", delay: 500 },
      { text: "✓ LunarShell installation complete!", delay: 1000, color: "text-green-400" },
      { text: "⚠ Please log out and back in to start using LunarShell", delay: 1000, color: "text-yellow-400" }
    ]

    let charIndex = 0
    let timeoutId: NodeJS.Timeout

    const command = "curl -fsSL https://shell.lunarlabs.cc/install.sh | sudo bash"

    const typeCommand = () => {
      if (charIndex < command.length) {
        setCurrentCommand(command.slice(0, charIndex + 1))
        charIndex++
        timeoutId = setTimeout(typeCommand, 50)
      } else {
        timeoutId = setTimeout(() => {
          setCleared(true)
          showInstallation(0)
        }, 1000)
      }
    }

    const showInstallation = (stepIndex: number) => {
      if (stepIndex < installationSteps.length) {
        const step = installationSteps[stepIndex]
        setOutput(prev => [...prev, { text: step.text, color: step.color }])
        timeoutId = setTimeout(() => showInstallation(stepIndex + 1), step.delay)
      } else {
        setIsTyping(false)
      }
    }

    setIsTyping(true)
    timeoutId = setTimeout(typeCommand, 500)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
          Simple Installation, Powerful Security
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1a1b26] rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-[#1f2335] px-4 py-2 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="p-6 font-mono text-sm">
              {!cleared && (
                <div className="flex items-center text-green-400 mb-2">
                  <span>$</span>
                  <span className="ml-2 text-white">{currentCommand}</span>
                </div>
              )}
              <div className="whitespace-pre font-mono h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                {output.map((line, i) => (
                  <div key={i} className={`leading-tight ${line.startsWith?.('✓') ? 'text-green-400' : line.color || 'text-white'}`}>
                    {line.text}
                  </div>
                ))}
                {isTyping && (
                  <span className="animate-pulse text-green-400">▊</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}