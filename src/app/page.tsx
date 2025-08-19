'use client'

import { useState, useEffect } from 'react'

export default function HelloWorldPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className={`text-center space-y-8 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {/* Main Greeting */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-300 drop-shadow-lg animate-pulse">
            Hello World
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full opacity-80"></div>
        </div>

        {/* Welcome Message */}
        <div className="space-y-6 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
            Welcome to this beautiful, modern Hello World page
          </p>
          
          <p className="text-base md:text-lg text-gray-300 opacity-90 leading-relaxed">
            Built with Next.js 15, styled with Tailwind CSS, and designed with care for a delightful user experience.
          </p>
        </div>

        {/* Interactive Elements */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500/50">
              Get Started
            </button>
            
            <button className="px-8 py-3 border border-gray-300 text-gray-200 font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:bg-white hover:text-gray-800 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500/50">
              Learn More
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✨
                </div>
                <h3 className="text-lg font-semibold text-white">Modern Design</h3>
                <p className="text-gray-300 text-sm">
                  Clean, responsive interface with smooth animations and beautiful gradients
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ⚡
                </div>
                <h3 className="text-lg font-semibold text-white">Fast Performance</h3>
                <p className="text-gray-300 text-sm">
                  Built with Next.js 15 for optimal performance and user experience
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  🎨
                </div>
                <h3 className="text-lg font-semibold text-white">Beautiful UI</h3>
                <p className="text-gray-300 text-sm">
                  Tailwind CSS powered styling with attention to every detail
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-16">
          <p className="text-gray-400 text-sm">
            Made with ❤️ using modern web technologies
          </p>
        </div>
      </div>
    </div>
  )
}