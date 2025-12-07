"use client";

import { Clock, Heart, Instagram, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OurStoryPage() {
  const storyChapters = [
    {
      id: 1,
      content: "Sukino is a minimalist cafe that is more than just a space for coffee; it's an intimate homage to a love story. Founded by a couple whose journey intertwines with the values of peace, unity, and warmth.",
      position: "left",
    },
    {
      id: 2,
      content: "Sukino embraces the beauty of simplicity and balance, creating a haven for those seeking a moment of calm and connection.",
      position: "right",
    },
    {
      id: 3,
      content: "In the heart of Banashankri 2nd Stage, where the streets hum with memories and old trees whisper stories, Sukino was born — not just as a café, but as a love letter.",
      position: "left",
    },
    {
      id: 4,
      content: "It all began with a couple and a dream. Two souls who believed in simple joys — slow mornings, handwritten notes, rain on rooftops, and the magic of shared coffee. Amidst life's chaos, they found peace in brewing cups together, long before the café had walls or windows.",
      position: "right",
    },
    {
      id: 5,
      content: "Sukino isn't just about coffee. It's about conversations that run deep, about strangers becoming regulars, about rainy days made better with cinnamon rolls and someone remembering your usual.",
      position: "left",
    },
    {
      id: 6,
      content: "This café was built on love — and it waits to share a little bit of that love with every person who walks in.",
      position: "center",
      highlight: true,
    },
  ];

  return (
    <div className="bg-[#faf9f7] relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/bg2.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay to maintain readability */}
        <div className="absolute inset-0 bg-[#faf9f7]/50"></div>
      </div>

      {/* Story Section */}
      <section className="relative pt-8 sm:pt-12 pb-12 sm:pb-16 overflow-hidden z-10" id="our-story">
        {/* Floating decorative elements - subtle hearts */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-200/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-olive-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-100/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Story Title */}
            <div className="text-center mb-16 sm:mb-20 animate-fade-in-down">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light text-olive-900 mb-4">
                Our Story
              </h1>
              <p className="text-olive-600 text-sm sm:text-base italic max-w-2xl mx-auto">
                A tale of love, coffee, and the spaces we create together
              </p>
            </div>
            
            {/* Journey Timeline */}
            <div className="relative">
              {/* Vertical timeline line - hidden on mobile, visible on desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-olive-200/40 via-olive-300/50 to-olive-200/40 transform -translate-x-1/2"></div>
              
              {/* Story Chapters - Journey Style */}
              <div className="space-y-12 sm:space-y-16 lg:space-y-20">
                {storyChapters.map((chapter, index) => (
                  <div
                    key={chapter.id}
                    className="relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline dot - desktop only */}
                    <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-olive-400 border-2 border-cream-50 shadow-lg z-20"></div>
                    
                    {/* Connecting line from previous chapter - desktop only */}
                    {index > 0 && (
                      <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-olive-300/40 to-olive-300/60"></div>
                    )}
                    
                    {/* Story Card */}
                    <div
                      className={`relative ${
                        chapter.highlight
                          ? "bg-gradient-to-br from-olive-100/80 via-accent-50/60 to-olive-100/80 backdrop-blur-md border-2 border-olive-300/50 shadow-2xl"
                          : "bg-cream-50/80 backdrop-blur-md border border-olive-200/60 shadow-xl"
                      } rounded-3xl p-8 sm:p-10 lg:p-12 transition-all duration-700 hover:shadow-2xl hover:scale-[1.01] ${
                        // Mobile: always centered
                        // Desktop: alternate left/right, except center for highlight
                        chapter.highlight 
                          ? "mx-auto max-w-3xl" 
                          : "mx-auto lg:mx-0 max-w-[95%] sm:max-w-[90%] lg:max-w-[45%] " + 
                            (chapter.position === "left" ? "lg:mr-auto lg:ml-0" : "lg:ml-auto lg:mr-0")
                      }`}
                    >
                      {/* Decorative corner accent - subtle heart */}
                      <div className="absolute top-4 right-4 opacity-15">
                        <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400" fill="currentColor" />
                      </div>
                      
                      {/* Story Text */}
                      <p
                        className={`leading-relaxed ${
                          chapter.highlight
                            ? "text-olive-900 text-lg sm:text-xl lg:text-2xl font-medium"
                            : "text-olive-800 text-base sm:text-lg lg:text-xl"
                        } relative z-10`}
                      >
                        {chapter.content}
                      </p>
                      
                      {/* Chapter number - journey marker */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 lg:bottom-4 w-8 h-8 rounded-full bg-olive-200/60 backdrop-blur-sm border border-olive-300/50 flex items-center justify-center text-olive-700 text-xs font-medium shadow-md">
                        {chapter.id}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Quote */}
            <div className="mt-20 sm:mt-24 text-center animate-fade-in-up" style={{ animationDelay: '900ms' }}>
              <div className="inline-block bg-cream-50/60 backdrop-blur-sm rounded-2xl px-8 py-6 border border-olive-200/50 shadow-lg">
                <p className="text-olive-700 text-sm sm:text-base italic max-w-2xl">
                  &quot;In every cup, a story. In every moment, a memory. Welcome to Sukino.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="pt-12 sm:pt-16 pb-0 relative overflow-hidden z-10 border-t border-olive-200/50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Location */}
            <div>
              <h3 className="text-lg font-display font-bold text-olive-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Location
              </h3>
              <p className="text-olive-800 leading-relaxed text-base">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Sukino+Cafe+183+17th+Main+Rd+Siddanna+Layout+Banashankari+Stage+II+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-olive-900 transition-colors"
                >
                  Sukino Cafe, 183, 17th Main Rd
                  <br />
                  Siddanna Layout, Banashankari Stage II
                  <br />
                  Banashankari, Bengaluru, Karnataka 560070
                </a>
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-display font-bold text-olive-900 mb-4 uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-olive-800 hover:text-olive-900 transition-colors text-base">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-olive-800 hover:text-olive-900 transition-colors text-base">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/our-story" className="text-olive-800 hover:text-olive-900 transition-colors text-base">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/visit" className="text-olive-800 hover:text-olive-900 transition-colors text-base">
                    Visit
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Timings */}
            <div>
              <h3 className="text-lg font-display font-bold text-olive-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Timings
              </h3>
              <p className="text-olive-800 leading-relaxed text-base mb-4">
                9 AM - 11 PM
                <br />
                All Days
              </p>
              <div className="mt-4">
                <h4 className="text-base font-display font-bold text-olive-900 mb-2 uppercase tracking-wider flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Contact
                </h4>
                <a 
                  href="tel:+919880498489" 
                  className="text-olive-800 hover:text-olive-900 transition-colors text-base"
                >
                  +91 98804 98489
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-display font-bold text-olive-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                Follow Us
              </h3>
              <p className="text-olive-800 leading-relaxed text-base mb-4">
                Stay connected with us on social media
              </p>
              <Link
                href="https://www.instagram.com/sukino.blr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-olive-800 hover:text-olive-900 transition-colors text-base"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 pb-2 border-t border-olive-200/50">
            <div className="flex flex-col items-center gap-2 text-base text-olive-600 text-center">
              <p>
                © {new Date().getFullYear()} SUKINO Cafe & Kitchen. All rights reserved.
              </p>
              <p>
                Developed by{" "}
                <a 
                  href="https://www.linkedin.com/in/deekshith2912/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-olive-700 hover:text-olive-900 underline transition-colors"
                >
                  Deekshith B
                </a>
                {" "}and{" "}
                <a 
                  href="https://www.linkedin.com/in/sanjana-woodi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-olive-700 hover:text-olive-900 underline transition-colors"
                >
                  Sanjana W G
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
