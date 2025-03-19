import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Emily's Portfolio</h3>
            <p className="text-gray-400 text-sm">
              A software engineer and systems admin dedicated to technology and security.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link href="#work" className="text-gray-400 hover:text-white text-sm">Work Experience</Link></li>
              <li><Link href="#skills" className="text-gray-400 hover:text-white text-sm">Skills</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://github.com/emily" 
                  className="text-gray-400 hover:text-white text-sm"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link 
                  href="https://linkedin.com/in/emily" 
                  className="text-gray-400 hover:text-white text-sm"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Emily. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 