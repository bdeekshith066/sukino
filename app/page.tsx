"use client";

import TypingAnimation from "@/components/typing-animation";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Instagram,
  MapPin,
  Phone,
  Play,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const galleryScrollRef = useRef<HTMLDivElement>(null);

  const videos = [
    { id: 1, src: "/videos/video1.mp4" },
    { id: 2, src: "/videos/video2.mp4" },
    { id: 3, src: "/videos/video3.mp4" },
  ];

  // Auto-play when modal opens
  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Auto-play was prevented, user will need to click
            setIsPlaying(false);
          });
      }
    }
  }, [selectedVideo]);

  // Auto-scroll for gallery on mobile
  useEffect(() => {
    if (!galleryScrollRef.current) return;
    
    const scrollContainer = galleryScrollRef.current;
    let scrollInterval: NodeJS.Timeout;
    let isHovered = false;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isHovered && scrollContainer) {
          if (scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth - 10) {
            scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
          } else {
            // Reset to start
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          }
        }
      }, 1000);
    };

    const handleMouseEnter = () => {
      isHovered = true;
      clearInterval(scrollInterval);
    };

    const handleMouseLeave = () => {
      isHovered = false;
      startAutoScroll();
    };

    startAutoScroll();
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('touchstart', handleMouseEnter);
    scrollContainer.addEventListener('touchend', handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('touchstart', handleMouseEnter);
      scrollContainer.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);

  const handleVideoClick = (src: string) => {
    setSelectedVideo(src);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setSelectedVideo(null);
    setIsPlaying(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="bg-[#f1eae0] relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay to maintain readability - reduced opacity for more visibility */}
        <div className="absolute inset-0 bg-[#f1eae0]/50"></div>
      </div>
      
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-8 sm:pt-10 pb-8 sm:pb-12 z-10" id="hero">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-olive-200/20 rounded-full blur-3xl animate-float z-10" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-200/20 rounded-full blur-3xl animate-float z-10" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-20 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light text-olive-900 tracking-tight mb-6 sm:mb-8 drop-shadow-lg">
            <span className="inline-block">Sukino</span>
            <br />
            <span className="inline-block mt-2">Cafe & Kitchen</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-olive-900 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed drop-shadow-md min-h-[3rem] font-medium">
            <TypingAnimation 
              text="A minimalist cafe shaped by love, calm, and connection."
              speed={30}
            />
          </p>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center items-center w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="bg-olive-700 hover:bg-olive-800 text-cream-50 w-full sm:w-auto px-10 py-7 text-base uppercase tracking-wide transition-all duration-300 hover:scale-110 hover:shadow-2xl relative overflow-hidden group"
            >
              <Link href="/menu" className="inline-flex items-center justify-center relative z-10">
                View Menu
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="border-2 border-olive-700 text-olive-700 hover:bg-olive-50 w-full sm:w-auto px-10 py-7 text-base uppercase tracking-wide transition-all duration-300 hover:scale-110 hover:shadow-xl hover:border-olive-800 bg-white/80 backdrop-blur-sm"
            >
              <Link href="/visit" className="inline-flex items-center justify-center">Visit Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section className="pt-12 sm:pt-16 pb-8 sm:pb-12 relative overflow-hidden z-10" id="about">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-olive-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-100/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light text-olive-900 mb-6">
                About
              </h2>
              <p className="text-olive-900 leading-relaxed text-xl sm:text-2xl font-medium">
                Sukino is a minimalist café that is more than just a space for coffee; it&apos;s an
                intimate homage to a love story. Founded by a couple whose journey intertwines with
                the values of peace, unity, and warmth, Sukino embraces the beauty of simplicity and
                balance, creating a haven for those seeking a moment of calm and connection.
              </p>
            </div>
            <div className="relative w-full flex justify-center items-center">
              {/* Fish GIF - reduced to half size, darker */}
              <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] opacity-90 brightness-75">
                <Image
                  src="/videos/fish.gif"
                  alt="Fish animation"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Reels Section */}
      <section className="pt-12 sm:pt-16 pb-8 sm:pb-12 relative overflow-hidden z-10" id="reels">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light text-olive-800 text-center mb-12 lg:mb-16 min-h-[3rem] flex items-center justify-center">
            <TypingAnimation 
              text="Sukino in Motion"
              speed={50}
            />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-3xl mx-auto">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => handleVideoClick(video.src)}
                className="relative overflow-hidden rounded-lg bg-olive-100 shadow-lg group cursor-pointer hover:scale-105 transition-transform duration-300 aspect-[9/16] w-full max-w-[200px] mx-auto md:max-w-none"
              >
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  loop
                  playsInline
                  muted
                  preload="metadata"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-olive-700 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-sm mx-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video container */}
            <div className="relative aspect-[9/16] max-h-[90vh] overflow-hidden rounded-lg bg-black shadow-2xl">
              {/* Close button - positioned inside video container at top right */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <video
                ref={videoRef}
                src={selectedVideo}
                className="w-full h-full object-cover"
                loop
                playsInline
                controls
                autoPlay
              />
            </div>
          </div>
        </div>
      )}

      {/* Calm Frames Section */}
      <section className="pt-12 sm:pt-16 pb-8 sm:pb-12 relative overflow-hidden z-10" id="gallery">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light text-olive-800 text-center mb-12 lg:mb-16">
            Calm Frames
          </h2>
          {/* Desktop: Grid layout - 2 rows x 4 columns */}
          <div className="hidden sm:grid sm:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer shadow-xl border-2 border-olive-200/50 bg-white p-1"
              >
                <Image
                  src={`/images/pic${index}.png`}
                  alt={`Gallery Image ${index}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-md"
                />
              </div>
            ))}
          </div>
          {/* Mobile: Horizontal scroll with auto-scroll and arrow */}
          <div className="sm:hidden relative -mx-4 px-4">
            {/* Right Arrow Indicator */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <ChevronRight className="w-8 h-8 text-olive-700/60 animate-pulse" />
            </div>
            <div 
              ref={galleryScrollRef}
              className="overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            >
              <div className="flex gap-4 min-w-max">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                  <div
                    key={index}
                    className="relative w-[85vw] aspect-square overflow-hidden rounded-lg group cursor-pointer snap-center flex-shrink-0 shadow-xl border-2 border-olive-200/50 bg-white p-1"
                  >
                    <Image
                      src={`/images/pic${index}.png`}
                      alt={`Gallery Image ${index}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-md"
                    />
                  </div>
                ))}
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
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-olive-600">
              <p className="text-right sm:text-right w-full sm:w-auto">
                © {new Date().getFullYear()} SUKINO Cafe & Kitchen. All rights reserved.
              </p>
              <p className="text-left sm:text-left w-full sm:w-auto">
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
