import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">LunarShell</h3>
            <p className="text-gray-400 text-sm">
              A modern, elegant, and secure shell environment for Linux systems.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-400 hover:text-white text-sm">Features</Link></li>
              <li><Link href="#install" className="text-gray-400 hover:text-white text-sm">Installation</Link></li>
              <li><Link href="/docs" className="text-gray-400 hover:text-white text-sm">Documentation</Link></li>
              <li><Link href="/progress" className="text-gray-400 hover:text-white text-sm">Progress</Link></li>
              <li><Link href="/statistics" className="text-gray-400 hover:text-white text-sm">Statistics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://github.com/ohemilyy/LunarShell" 
                  className="text-gray-400 hover:text-white text-sm"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/ohemilyy/LunarShell/issues" 
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Issues
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} LunarShell. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 