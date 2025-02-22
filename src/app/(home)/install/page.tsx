export default function Install() {
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