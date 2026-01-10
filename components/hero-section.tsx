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

  const propertyImages = [
    {
      src: "/images/kerwa-farm.avif",
      alt: "Kerwa Farm - Luxury Farmhouse",
      title: "Kerwa Farm",
    },
    {
      src: "/images/1.png",
      alt: "Suraj Nagar Farm - Expansive Property",
      title: "Suraj Nagar Farm",
    },
    {
      src: "/images/Happy_stay_1.webp",
      alt: "Happy Stay 1 - Comfortable Residence",
      title: "Happy Stay 1",
    },
    {
      src: "/images/Happy_stay_2.jpg",
      alt: "Happy Stay 2 - Modern Accommodation",
      title: "Happy Stay 2",
    },
  ]

  const handleBookDirect = () => {
    const phoneNumber = "919893738999"
    const message =
      "Hello! I'm interested in booking a property at Ambi Stay. Could you help me with availability and pricing?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

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
        className={`relative h-full flex items-center justify-between px-8 md:px-16 lg:px-24 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        {/* Left side content */}
        <div className="max-w-2xl">
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
            Where Nature Meets Comfort
          </p>

          <p className="text-base md:text-lg text-white/70 mb-4 font-light leading-relaxed max-w-xl">
            Discover our idyllic farmhouse sanctuaries nestled in nature's lap—where open skies, fresh air, and peaceful
            countryside moments create cherished memories with loved ones.
          </p>
          <p className="text-base md:text-lg text-white/70 mb-12 font-light leading-relaxed max-w-xl">
            Or unwind in our modern 2 BHK residences with private terraces and all the comforts of home—perfectly suited
            for those seeking relaxation, convenience, and flexibility in their stays.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={handleBookDirect}
              className="px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white transition font-light text-sm tracking-wide uppercase shadow-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.413-2.393-1.474-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378l-.361.214-3.741-.982.998 3.645-.235.364a9.964 9.964 0 -1.51-13.228 9.874 9.874 0 005.283-1.542l.355-.213 3.741.982-.999-3.645.236-.364c.552.164 1.088.427 1.56.786" />
              </svg>
              Book Direct
            </button>
            <a
              href="#properties"
              className="px-8 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition font-light text-sm tracking-wide uppercase shadow-lg"
            >
              Explore Properties
            </a>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-6 items-center">
          <div className="grid grid-cols-2 gap-4">
            {propertyImages.map((property, index) => (
              <div key={index} className="w-32 h-32 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <img
                  src={property.src || "/placeholder.svg"}
                  alt={property.alt}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  title={property.title}
                />
              </div>
            ))}
          </div>
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
  )
}
