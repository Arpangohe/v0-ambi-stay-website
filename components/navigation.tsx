"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="font-light text-xl text-foreground tracking-widest uppercase">Ambi Stay</span>
          </div>

          <div className="hidden md:flex items-center gap-16">
            <Link
              href="#why"
              className="text-xs text-foreground/70 hover:text-accent transition font-light tracking-wide uppercase"
            >
              About
            </Link>
            <Link
              href="#reviews"
              className="text-xs text-foreground/70 hover:text-accent transition font-light tracking-wide uppercase"
            >
              Reviews
            </Link>
            <Link
              href="#gallery"
              className="text-xs text-foreground/70 hover:text-accent transition font-light tracking-wide uppercase"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="text-xs text-foreground/70 hover:text-accent transition font-light tracking-wide uppercase"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition font-light text-xs tracking-wide uppercase">
              Book a Visit
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border">
            <Link
              href="#why"
              className="block text-xs text-foreground/70 hover:text-accent py-3 font-light tracking-wide uppercase"
            >
              About
            </Link>
            <Link
              href="#reviews"
              className="block text-xs text-foreground/70 hover:text-accent py-3 font-light tracking-wide uppercase"
            >
              Reviews
            </Link>
            <Link
              href="#gallery"
              className="block text-xs text-foreground/70 hover:text-accent py-3 font-light tracking-wide uppercase"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="block text-xs text-foreground/70 hover:text-accent py-3 font-light tracking-wide uppercase"
            >
              Contact
            </Link>
            <button className="w-full px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition font-light text-xs tracking-wide uppercase mt-4">
              Book a Visit
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
