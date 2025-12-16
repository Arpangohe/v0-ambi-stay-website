"use client"

import { useState, useEffect } from "react"

interface FloatingBookButtonProps {
  onClick: () => void
}

export default function FloatingBookButton({ onClick }: FloatingBookButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-110 font-light text-sm tracking-wide uppercase z-40 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
      }`}
    >
      Book Now
    </button>
  )
}
