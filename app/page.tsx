"use client"

import { useState } from "react"
import HeroSection from "@/components/hero-section"
import BookingForm from "@/components/booking-form"
import WhyAmbiStay from "@/components/why-ambi-stay"
import ReviewsSection from "@/components/reviews-section"
import AmenitiesSection from "@/components/amenities-section"
import GallerySection from "@/components/gallery-section"
import LocationSection from "@/components/location-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import FloatingBookButton from "@/components/floating-book-button"

export default function Home() {
  const [showBooking, setShowBooking] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection onBookClick={() => setShowBooking(true)} />

      {showBooking && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowBooking(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <BookingForm onClose={() => setShowBooking(false)} />
          </div>
        </div>
      )}

      <WhyAmbiStay />
      <ReviewsSection />
      <AmenitiesSection />
      <GallerySection />
      <LocationSection />
      <BlogSection />
      <ContactSection />
      <FloatingBookButton onClick={() => setShowBooking(true)} />
    </div>
  )
}
