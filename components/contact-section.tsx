"use client"

import type React from "react"

import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })

    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  const contactMethods = [
    {
      icon: "📞",
      title: "Call Us",
      value: "+91 755 XXX XXXX",
      link: "tel:+917551234567",
      description: "Mon-Sun, 9 AM - 9 PM",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/917551234567",
      description: "Instant replies",
    },
    {
      icon: "📧",
      title: "Email",
      value: "info@ambistay.in",
      link: "mailto:info@ambistay.in",
      description: "We'll respond within 24 hours",
    },
  ]

  const socialLinks = [
    { name: "Facebook", icon: "f", url: "https://facebook.com" },
    { name: "Instagram", icon: "📷", url: "https://instagram.com" },
    { name: "Twitter", icon: "𝕏", url: "https://twitter.com" },
  ]

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-primary-foreground/90">We'd love to hear from you. Reach out anytime!</p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.link}
              className="text-center p-6 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-all hover:scale-105"
            >
              <div className="text-5xl mb-4">{method.icon}</div>
              <h3 className="font-bold text-lg mb-2">{method.title}</h3>
              <p className="text-primary-foreground/90 font-semibold mb-1">{method.value}</p>
              <p className="text-sm text-primary-foreground/70">{method.description}</p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-primary-foreground/10 rounded-lg p-8 max-w-2xl mx-auto mb-12">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-primary-foreground/90">
                Your message has been sent successfully. We'll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground ${
                    errors.name ? "ring-2 ring-red-400" : ""
                  }`}
                />
                {errors.name && <p className="text-sm text-red-200 mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground ${
                    errors.email ? "ring-2 ring-red-400" : ""
                  }`}
                />
                {errors.email && <p className="text-sm text-red-200 mt-1">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone (Optional)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground ${
                    errors.message ? "ring-2 ring-red-400" : ""
                  }`}
                />
                {errors.message && <p className="text-sm text-red-200 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-primary-foreground text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary-foreground/90 transition-all hover:scale-105"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-primary-foreground/90 mb-4">Follow us on social media</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-all hover:scale-110"
                aria-label={social.name}
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
