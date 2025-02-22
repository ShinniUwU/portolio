import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Navbar() {
  return (
    <>
      {/* Early Development Banner */}
      <div className="fixed w-full bg-purple-500/10 backdrop-blur-sm z-50 top-0">
        <div className="container mx-auto px-6 py-2">
          <p className="text-center text-sm text-purple-200">
            🚧 LunarShell is in early development. Some features may be incomplete or subject to change.{' '}
            <Link 
              href="https://github.com/ohemilyy/LunarShell" 
              className="underline hover:text-white transition"
            >
              Follow our progress
            </Link>
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="fixed w-full bg-black/20 backdrop-blur-sm z-50 top-8">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105"
            >
              <span className="text-2xl group-hover:animate-pulse">🌙</span>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent relative">
                LunarShell
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-pink-300/50 to-purple-400/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-300 hover:text-white transition">Features</Link>
              <Link href="#install" className="text-gray-300 hover:text-white transition">Install</Link>
              <Link href="/docs" className="text-gray-300 hover:text-white transition">Docs</Link>
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
    </>
  )
}