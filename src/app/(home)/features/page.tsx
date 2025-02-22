import { FaRocket, FaShieldAlt, FaBox, FaTerminal } from 'react-icons/fa'

const features = [
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
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
          Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
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