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
    <div className="relative w-full h-screen bg-black overflow-hidden pt-20">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://ambistay.in/wp-content/uploads/2022/09/Ambi-Stay-Hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div
        className={`relative h-full flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="max-w-2xl">
          <h1
            className="font-light text-6xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Ambi Stay
          </h1>
          <p className="text-sm md:text-base text-white/80 mb-12 font-light leading-relaxed tracking-wide uppercase">
            Holistic Luxury in Perfect Harmony
          </p>
          <p className="text-base md:text-lg text-white/70 mb-16 font-light leading-relaxed max-w-xl">
            Welcome to Ambi Stay Residence, where timeless refinement meets modern well-being. Discover an exquisite
            sanctuary designed to create an unparalleled lifestyle of elegance and serenity.
          </p>

          <button
            onClick={onBookClick}
            className="px-8 py-3 border border-white/30 text-white hover:border-accent hover:text-accent transition font-light text-sm tracking-wide uppercase"
          >
            Book a Visit
          </button>
        </div>

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
