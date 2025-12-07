"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Instagram, MapPin, Navigation, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function VisitPage() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="pt-4 sm:pt-6 pb-0 relative overflow-hidden bg-[#faf9f7] min-h-screen">
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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Enhanced Page Header */}
        <div className="mb-16 sm:mb-20 text-center scroll-animate">
          <div className="inline-block mb-6">
            <div className="relative">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-light text-olive-900 mb-4 relative z-10 animate-fade-in-down">
                Visit Us
              </h1>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-olive-300 to-transparent"></div>
            </div>
          </div>
          <p className="text-olive-700 max-w-3xl mx-auto leading-relaxed text-xl sm:text-2xl font-light animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            We&apos;d love to welcome you to our space. Find us in the heart of Banashankari, where calm meets connection.
          </p>
        </div>

        {/* Enhanced Info Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Address Card - Enhanced */}
          <Card className="group bg-gradient-to-br from-cream-50 to-olive-50/30 border-2 border-olive-200/50 shadow-2xl hover:shadow-3xl transition-all duration-700 card-hover scroll-animate relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-olive-100/0 to-olive-200/0 group-hover:from-olive-100/20 group-hover:to-olive-200/10 transition-all duration-700"></div>
            <CardHeader className="relative overflow-hidden pb-4">
              <div className="absolute top-0 right-0 w-40 h-40 bg-olive-200/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-olive-200 to-olive-300 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <MapPin className="w-8 h-8 text-olive-800" />
                </div>
                <CardTitle className="text-3xl font-display font-light text-olive-900">
                  Our Location
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-olive-800 leading-relaxed text-lg sm:text-xl mb-8 font-light">
                <span className="font-medium text-olive-900">Sukino Cafe</span>
                <br />
                183, 17th Main Rd
                <br />
                Siddanna Layout, Banashankari Stage II
                <br />
                Banashankari, Bengaluru, Karnataka 560070
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-olive-700 to-olive-800 hover:from-olive-800 hover:to-olive-900 text-cream-50 w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-2xl group/btn"
                size="lg"
              >
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Sukino+Cafe+183+17th+Main+Rd+Siddanna+Layout+Banashankari+Stage+II+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  Get Directions
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Hours Card - Enhanced */}
          <Card className="group bg-gradient-to-br from-cream-50 to-olive-50/30 border-2 border-olive-200/50 shadow-2xl hover:shadow-3xl transition-all duration-700 card-hover scroll-animate relative overflow-hidden" style={{ animationDelay: '100ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-olive-100/0 to-olive-200/0 group-hover:from-olive-100/20 group-hover:to-olive-200/10 transition-all duration-700"></div>
            <CardHeader className="relative overflow-hidden pb-4">
              <div className="absolute top-0 right-0 w-40 h-40 bg-olive-200/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-olive-200 to-olive-300 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Clock className="w-8 h-8 text-olive-800" />
                </div>
                <CardTitle className="text-3xl font-display font-light text-olive-900">
                  Opening Hours
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-4 text-olive-800">
                <div className="flex justify-between items-center p-4 bg-white/50 rounded-lg backdrop-blur-sm border border-olive-200/30">
                  <span className="font-medium text-lg">Monday - Sunday</span>
                  <span className="font-bold text-xl text-olive-900">9 AM – 11 PM</span>
                </div>
                <div className="flex items-center gap-2 text-olive-700 mt-6">
                  <Calendar className="w-5 h-5 text-olive-600" />
                  <p className="text-base italic">
                    Open daily for breakfast, lunch, and dinner
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Contact Information */}
        <Card className="group bg-gradient-to-br from-cream-50 via-olive-50/20 to-cream-50 border-2 border-olive-200/50 shadow-2xl hover:shadow-3xl transition-all duration-700 mb-16 card-hover scroll-animate relative overflow-hidden" style={{ animationDelay: '200ms' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-olive-100/0 to-olive-200/0 group-hover:from-olive-100/10 group-hover:to-olive-200/10 transition-all duration-700"></div>
          <CardHeader className="relative overflow-hidden pb-6">
            <div className="absolute top-0 right-0 w-48 h-48 bg-olive-200/15 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <CardTitle className="text-3xl font-display font-light text-olive-900 relative z-10">
              Get in Touch
            </CardTitle>
            <p className="text-olive-700 mt-2 relative z-10">We&apos;re here to help and connect</p>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-5 p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-olive-200/30 hover:bg-white/80 hover:shadow-lg transition-all duration-500 group/item">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-olive-200 to-olive-300 flex items-center justify-center shadow-md group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300 flex-shrink-0">
                  <Phone className="w-7 h-7 text-olive-800" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-olive-900 uppercase tracking-wider mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:+919880498489"
                    className="text-olive-800 hover:text-olive-900 transition-colors font-semibold text-lg block"
                  >
                    +91 98804 98489
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-5 p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-olive-200/30 hover:bg-white/80 hover:shadow-lg transition-all duration-500 group/item">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-olive-200 to-olive-300 flex items-center justify-center shadow-md group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300 flex-shrink-0">
                  <Instagram className="w-7 h-7 text-olive-800" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-olive-900 uppercase tracking-wider mb-2">
                    Follow Us
                  </p>
                  <Link
                    href="https://www.instagram.com/sukino.blr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-olive-800 hover:text-olive-900 transition-colors font-semibold text-lg inline-flex items-center gap-2 group/link"
                  >
                    @sukino.blr
                    <span className="text-olive-600 group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Map Embed */}
        <Card className="group bg-gradient-to-br from-cream-50 to-olive-50/20 border-2 border-olive-200/50 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden scroll-animate relative" style={{ animationDelay: '300ms' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-olive-100/0 to-olive-200/0 group-hover:from-olive-100/10 group-hover:to-olive-200/5 transition-all duration-700"></div>
          <CardHeader className="relative overflow-hidden pb-6">
            <div className="absolute top-0 right-0 w-48 h-48 bg-olive-200/15 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-olive-200 to-olive-300 flex items-center justify-center shadow-lg">
                <MapPin className="w-8 h-8 text-olive-800" />
              </div>
              <div>
                <CardTitle className="text-3xl font-display font-light text-olive-900">
                  Find Sukino on the Map
                </CardTitle>
                <p className="text-olive-700 mt-1">Click to explore our neighborhood</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0 relative overflow-hidden">
            <div className="w-full h-[500px] sm:h-[600px] bg-olive-100 relative rounded-b-xl overflow-hidden shadow-inner">
              <iframe
                src="https://www.google.com/maps?q=Sukino+Cafe,+183,+17th+Main+Rd,+Siddanna+Layout,+Banashankari+Stage+II,+Banashankari,+Bengaluru,+Karnataka+560070&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Sukino Cafe Location"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-olive-50/20 to-transparent"></div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Additional Info */}
        <div className="mt-16 mb-12 text-center scroll-animate">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-olive-50/50 to-cream-50/50 backdrop-blur-sm border border-olive-200/30 shadow-lg">
            <p className="text-olive-800 mb-3 text-xl sm:text-2xl font-light">
              We look forward to welcoming you to Sukino.
            </p>
            <p className="text-base text-olive-600">
              For reservations or special requests, please call us or send us a message.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="pt-12 sm:pt-16 pb-0 relative overflow-hidden z-10 border-t border-olive-200/50 mt-12">
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


