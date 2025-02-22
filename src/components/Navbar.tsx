import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/20 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🌙</span>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              LunarShell
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition">Features</Link>
            <Link href="#install" className="text-gray-300 hover:text-white transition">Install</Link>
            <Link href="#docs" className="text-gray-300 hover:text-white transition">Docs</Link>
            <Link 
              href="https://github.com/ohemilyy/LunarShell"
              className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition"
            >
              <FaGithub className="text-white" />
              <span className="text-white">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 