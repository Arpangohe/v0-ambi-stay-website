"use client"

import { useState, useEffect } from "react"

interface HeroSectionProps {
  onBookClick: () => void
}

export default function HeroSection({ onBookClick }: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div
      className="relative w-full h-screen bg-white overflow-hidden pt-20"
      style={{
        backgroundImage: "url('/images/kerwa-farm.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Video Background - Replaced with static image */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover hidden">
        <source src="#" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/40" />

      {/* Content */}
      <div
        className={`relative h-full flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="max-w-3xl">
          <p className="text-xs md:text-sm text-primary font-light tracking-widest uppercase mb-6">
            Stays • Farmhouses • Residences
          </p>

          <h1
            className="font-light text-6xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Ambi Stay
          </h1>

          <p className="text-sm md:text-base text-white/80 mb-12 font-light leading-relaxed tracking-wide uppercase">
            Nature First. Comfort Always.
          </p>

          <p className="text-base md:text-lg text-white/70 mb-6 font-light leading-relaxed max-w-2xl">
            Rustic farmhouse stays with open spaces, fresh air, and a relaxed natural setting.
          </p>
          <p className="text-base md:text-lg text-white/70 mb-16 font-light leading-relaxed max-w-2xl">
            Practical, comfortable 2 BHK residences with terraces, ideal for short and long stays.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#properties"
              className="px-8 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition font-light text-sm tracking-wide uppercase shadow-lg"
            >
              Explore Properties
            </a>
            <button className="px-8 py-3 rounded-full border border-white/50 text-white hover:border-primary hover:text-primary hover:bg-primary/5 transition font-light text-sm tracking-wide uppercase">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-8 md:left-16 lg:left-24">
          <p className="text-xs text-white/50 font-light tracking-widest uppercase mb-4">Scroll</p>
          <svg className="w-4 h-4 text-white/50 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}
