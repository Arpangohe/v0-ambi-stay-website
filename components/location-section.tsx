"use client"

export default function LocationSection() {
  const nearbyPlaces = [
    { name: "New Market", distance: "8 km", icon: "🛍️", description: "Shopping & dining" },
    { name: "Kerwa Dam", distance: "12 km", icon: "🏞️", description: "Scenic views" },
    { name: "Van Vihar National Park", distance: "15 km", icon: "🦁", description: "Wildlife sanctuary" },
    { name: "Sanchi Stupa", distance: "45 km", icon: "🏛️", description: "UNESCO heritage site" },
  ]

  const transportInfo = [
    { mode: "By Car", time: "30 mins", detail: "From Bhopal city center" },
    { mode: "By Taxi", time: "24/7", detail: "Available on demand" },
    { mode: "Airport", time: "15 km", detail: "Raja Bhoj Airport" },
    { mode: "Train", time: "20 km", detail: "Bhopal Junction" },
  ]

  return (
    <section id="location" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Location & Nearby</h2>
          <p className="text-lg text-muted-foreground">Perfectly located in Bhopal</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {/* Nearby Places */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">What's Nearby?</h3>
              <div className="space-y-4">
                {nearbyPlaces.map((place, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-md transition"
                  >
                    <div className="text-3xl flex-shrink-0">{place.icon}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{place.name}</p>
                      <p className="text-sm text-muted-foreground">{place.distance} away</p>
                      <p className="text-xs text-muted-foreground mt-1">{place.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transportation Info */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">How to Reach</h3>
              <div className="grid grid-cols-2 gap-4">
                {transportInfo.map((info, idx) => (
                  <div key={idx} className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                    <p className="font-semibold text-primary text-lg">{info.time}</p>
                    <p className="text-sm font-medium text-foreground">{info.mode}</p>
                    <p className="text-xs text-muted-foreground mt-1">{info.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden h-96 md:h-full md:min-h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.5555555555556!2d77.4!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEyJzAwLjAiTiA3N8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Ambi Stay Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
