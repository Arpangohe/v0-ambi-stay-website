"use client"

import { useState } from "react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryItems = [
    {
      url: "https://ambistay.in/wp-content/uploads/2022/07/DSC_1450-1536x1022.jpg",
      title: "Luxury Bedroom",
      featured: true,
    },
    { url: "https://ambistay.in/wp-content/uploads/2022/07/open.jpg", title: "Garden View", featured: false },
    {
      url: "https://ambistay.in/wp-content/uploads/2022/07/rooms-e1658400733216-1536x925.jpg",
      title: "Suite Interior",
      featured: false,
    },
    {
      url: "https://ambistay.in/wp-content/uploads/2022/07/DSC_1451-1536x1022.jpg",
      title: "Swimming Pool",
      featured: true,
    },
    { url: "https://ambistay.in/wp-content/uploads/2022/07/open-1.jpg", title: "Outdoor Space", featured: false },
    { url: "https://ambistay.in/wp-content/uploads/2022/07/DSC_1449.jpeg", title: "Dining Area", featured: false },
  ]

  return (
    <section id="gallery" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <p className="text-xs text-accent font-light tracking-widest uppercase mb-4">Gallery</p>
          <h2 className="font-light text-5xl md:text-6xl text-foreground" style={{ fontFamily: "Georgia, serif" }}>
            Discover the Home
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item.url)}
              className={`relative overflow-hidden cursor-pointer group ${item.featured ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <div className={`relative bg-muted ${item.featured ? "h-96 md:h-full" : "h-64"}`}>
                <img
                  src={item.url || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-light text-sm tracking-wide">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <img src={selectedImage || "/placeholder.svg"} alt="Full view" className="w-full" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition text-2xl"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
