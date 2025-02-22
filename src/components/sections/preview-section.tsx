import Image from 'next/image'

export default function PreviewSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
          Beautiful Terminal Experience
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0a0a0a] rounded-lg overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#1f2335] px-4 py-2 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* Terminal Content */}
            <div className="relative w-full h-[600px]">
              <Image
                src="/images/image.png"
                alt="LunarShell Terminal Preview"
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>
          </div>

          {/* Feature Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">System Monitoring</h3>
              <p className="text-gray-400">Real-time system metrics and resource usage tracking</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Clean Interface</h3>
              <p className="text-gray-400">Modern and intuitive terminal design for better workflow</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Detailed Info</h3>
              <p className="text-gray-400">Comprehensive system information at your fingertips</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 