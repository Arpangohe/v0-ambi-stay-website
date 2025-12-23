"use client"

import { useState } from "react"
import { MapPin, Users, DollarSign, ExternalLink } from "lucide-react"

interface Unit {
  id: string
  name: string
  location: string
  image: string
  capacity: string
  weekdayRate: number
  weekdayPeople: number
  weekendRate: number
  weekendPeople: number
  additionalPerPerson: number
  maxCapacity: string
  highlights: string[]
  amenities: string[]
  checkIn: string
  checkOut: string
  deposit: number
  airbnbLink: string
}

const units: Unit[] = [
  {
    id: "kerwa",
    name: "Ambi Farm",
    location: "Kerwa Dam Road",
    image: "/images/kerwa_farm.jpg",
    capacity: "Up to 4 guests",
    weekdayRate: 6500,
    weekdayPeople: 4,
    weekendRate: 7500,
    weekendPeople: 4,
    additionalPerPerson: 500,
    maxCapacity: "10-12 overnight | 30-35 day events",
    highlights: [
      "Serene poolside environment",
      "Spacious outdoor seating",
      "Perfect for gatherings and events",
      "Pet friendly property",
    ],
    amenities: [
      "Swimming Pool",
      "Outdoor & Indoor Seating",
      "Free WiFi",
      "Outdoor Kitchen",
      "Luggage Assistance",
      "Event Catering Available",
    ],
    checkIn: "1:00 PM",
    checkOut: "11:00 AM",
    deposit: 4500,
    airbnbLink:
      "https://www.airbnb.co.in/rooms/29875712?guests=1&adults=1&s=67&unique_share_id=7150db42-47a3-4d52-8e95-cef101566db6",
  },
  {
    id: "suraj",
    name: "Ambi Farm",
    location: "Suraj Nagar",
    image: "/images/img-3513.jpg",
    capacity: "Up to 2 guests",
    weekdayRate: 3000,
    weekdayPeople: 2,
    weekendRate: 3500,
    weekendPeople: 2,
    additionalPerPerson: 500,
    maxCapacity: "4-5 overnight | 25-30 day events",
    highlights: [
      "Tranquil single room retreat",
      "Private swimming pool",
      "Garden with dining area",
      "Ideal for couples or small groups",
    ],
    amenities: ["Private Pool", "Private Kitchen", "Air Conditioning", "Private Dining", "Free WiFi", "Pet Friendly"],
    checkIn: "1:00 PM",
    checkOut: "11:00 AM",
    deposit: 2000,
    airbnbLink:
      "https://www.airbnb.co.in/rooms/1235346656616601741?guests=1&adults=1&s=67&unique_share_id=c9bf689f-8fcf-47c7-8829-49a15e5d954b",
  },
  {
    id: "happy1",
    name: "Happy Stay 1",
    location: "Bhopal",
    image: "/images/Happy_stay_1.webp",
    capacity: "Up to 4 guests",
    weekdayRate: 3500,
    weekdayPeople: 4,
    weekendRate: 4000,
    weekendPeople: 4,
    additionalPerPerson: 500,
    maxCapacity: "4 overnight guests",
    highlights: [
      "Comfortable residential setting",
      "Great for family stays",
      "Affordable luxury experience",
      "Convenient location",
    ],
    amenities: ["WiFi", "Kitchen Access", "Comfortable Bedrooms", "Living Area", "Parking", "Luggage Assistance"],
    checkIn: "1:00 PM",
    checkOut: "11:00 AM",
    deposit: 2000,
    airbnbLink:
      "https://www.airbnb.co.in/rooms/33175149?guests=1&adults=1&s=67&unique_share_id=16506a48-55ef-4d5a-9932-302fac553205",
  },
  {
    id: "happy2",
    name: "Happy Stay 2",
    location: "Bhopal",
    image: "/images/Happy_stay_2.jpg",
    capacity: "Up to 4 guests",
    weekdayRate: 3500,
    weekdayPeople: 4,
    weekendRate: 4000,
    weekendPeople: 4,
    additionalPerPerson: 500,
    maxCapacity: "4 overnight guests",
    highlights: [
      "Cozy and welcoming atmosphere",
      "Perfect for team stays",
      "Budget-friendly option",
      "Close to city attractions",
    ],
    amenities: ["WiFi", "Kitchen", "Spacious Rooms", "Common Areas", "Parking", "Pet Friendly"],
    checkIn: "1:00 PM",
    checkOut: "11:00 AM",
    deposit: 2000,
    airbnbLink:
      "https://www.airbnb.co.in/rooms/51832794?guests=1&adults=1&s=67&unique_share_id=e9b987d3-e12e-4c29-ba33-9e804da5c4ef",
  },
]

export default function UnitsShowcase() {
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null)

  const handleBookNow = (airbnbLink: string) => {
    window.open(airbnbLink, "_blank", "noopener,noreferrer")
  }

  const handleInquiry = (unitId: string) => {
    const unit = units.find((u) => u.id === unitId)
    if (unit) {
      window.location.href = `mailto:info@ambistay.com?subject=Inquiry for ${unit.name} - ${unit.location}`
    }
  }

  return (
    <section className="py-20 bg-white" id="properties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-4 text-balance">
            Our Exclusive Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover four distinctive luxury retreats, each offering unique experiences tailored to your perfect getaway
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {units.map((unit, idx) => (
            <div
              key={unit.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <img
                    src={unit.image || "/placeholder.svg"}
                    alt={unit.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-serif font-light text-foreground mb-1">{unit.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{unit.location}</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1 font-semibold">
                        Weekdays
                      </p>
                      <p className="text-xl font-semibold text-foreground">₹{unit.weekdayRate.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">{unit.weekdayPeople} people</p>
                    </div>
                    <div className="bg-primary/5 p-3 rounded-lg">
                      <p className="text-xs text-primary uppercase tracking-wide mb-1 font-semibold">Weekends</p>
                      <p className="text-xl font-semibold text-primary">₹{unit.weekendRate.toLocaleString()}</p>
                      <p className="text-xs text-primary/70">{unit.weekendPeople} people</p>
                    </div>
                  </div>

                  {/* Key Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <Users className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Capacity</p>
                        <p className="text-sm text-foreground">{unit.maxCapacity}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Additional Guest</p>
                        <p className="text-sm text-foreground">₹{unit.additionalPerPerson}/person</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Amenities */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2 font-semibold">
                      Highlights
                    </p>
                    <ul className="space-y-1">
                      {unit.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="text-sm text-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedUnit(unit.id)}
                      className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-lg py-2.5 text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleBookNow(unit.airbnbLink)}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-foreground border border-gray-300 rounded-lg py-2.5 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Book Now</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Unit Modal */}
        {selectedUnit && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 animate-scale-in">
              <div className="sticky top-0 bg-white border-b border-gray-200 flex items-center justify-between p-6">
                <h3 className="text-2xl font-serif font-light text-foreground">
                  {units.find((u) => u.id === selectedUnit)?.name}
                </h3>
                <button
                  onClick={() => setSelectedUnit(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-2xl leading-none"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-8">
                {units
                  .filter((u) => u.id === selectedUnit)
                  .map((unit) => (
                    <div key={unit.id}>
                      {/* Image */}
                      <img
                        src={unit.image || "/placeholder.svg"}
                        alt={unit.name}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />

                      {/* Pricing Details */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2 font-semibold">
                            Weekday Rate
                          </p>
                          <p className="text-2xl font-semibold text-foreground">₹{unit.weekdayRate.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">Mon-Thu | {unit.weekdayPeople} people</p>
                        </div>
                        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                          <p className="text-xs text-primary uppercase tracking-wide mb-2 font-semibold">
                            Weekend Rate
                          </p>
                          <p className="text-2xl font-semibold text-primary">₹{unit.weekendRate.toLocaleString()}</p>
                          <p className="text-sm text-primary/70">Fri-Sun | {unit.weekendPeople} people</p>
                        </div>
                      </div>

                      {/* Capacity & Booking Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="p-4 border border-gray-200 rounded-lg">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2 font-semibold">
                            Maximum Capacity
                          </p>
                          <p className="text-lg font-semibold text-foreground">{unit.maxCapacity}</p>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-lg bg-primary/5">
                          <p className="text-xs text-primary uppercase tracking-wide mb-2 font-semibold">
                            Security Deposit
                          </p>
                          <p className="text-lg font-semibold text-primary">₹{unit.deposit.toLocaleString()}</p>
                          <p className="text-xs text-primary/70 mt-1">Refundable within 24 hours</p>
                        </div>
                      </div>

                      {/* Check-in/out */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2 font-semibold">
                            Check-in
                          </p>
                          <p className="text-lg font-semibold text-foreground">{unit.checkIn}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2 font-semibold">
                            Check-out
                          </p>
                          <p className="text-lg font-semibold text-foreground">{unit.checkOut}</p>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-foreground mb-4">Amenities</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {unit.amenities.map((amenity, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                              <span className="text-sm text-foreground">{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
                        <h4 className="text-lg font-semibold text-foreground mb-4">Additional Information</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Additional Guests</p>
                            <p className="text-foreground">₹{unit.additionalPerPerson} per person</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Cancellation Policy</p>
                            <p className="text-foreground text-sm">
                              Full refund if canceled 7+ days before booking. No refund within 7 days.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* CTA - Direct to Airbnb */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => {
                            setSelectedUnit(null)
                            handleBookNow(unit.airbnbLink)
                          }}
                          className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-lg py-3 text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                        >
                          <span>Book on Airbnb</span>
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setSelectedUnit(null)}
                          className="flex-1 bg-gray-100 hover:bg-gray-200 text-foreground rounded-lg py-3 text-base font-semibold transition-all duration-300"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
