import Link from 'next/link'

export default function Hero() {
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