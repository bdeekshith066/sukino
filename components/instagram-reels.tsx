"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Heart, Play, Share2, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ReelData {
  id: string;
  url: string;
  embedCode?: string; // Instagram embed HTML code
  thumbnail?: string;
  title?: string;
  views?: string;
  likes?: string;
  shares?: string;
}

interface InstagramReelsProps {
  reels: ReelData[];
}

export default function InstagramReels({ reels }: InstagramReelsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedReel, setSelectedReel] = useState<ReelData | null>(null);
  const embedRef = useRef<HTMLDivElement>(null);

  // Load Instagram embed script
  useEffect(() => {
    if (selectedReel && embedRef.current) {
      // Check if script already exists
      if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
        const script = document.createElement("script");
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else {
        // If script exists, trigger Instagram to process embeds
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      }
    }
  }, [selectedReel]);

  const handleReelClick = (reel: ReelData) => {
    setSelectedReel(reel);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedReel(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-olive-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-display font-light text-olive-800 mb-4">
              Follow Our Journey
            </h2>
            <p className="text-olive-600 max-w-2xl mx-auto">
              Experience Sukino through our Instagram reels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {reels.map((reel, index) => (
              <button
                key={reel.id}
                onClick={() => handleReelClick(reel)}
                className="group relative block animate-scale-in text-left w-full"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-olive-100 to-olive-200 shadow-xl hover:shadow-2xl transition-all duration-500 card-hover">
                  {/* Thumbnail or placeholder */}
                  {reel.thumbnail ? (
                    <Image
                      src={reel.thumbnail}
                      alt={reel.title || "Instagram Reel"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-olive-200 via-olive-100 to-accent-100 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-olive-700/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-olive-700/30 transition-colors">
                          <Play className="w-8 h-8 text-olive-700" />
                        </div>
                        <p className="text-olive-700 text-sm font-medium">Instagram Reel</p>
                      </div>
                    </div>
                  )}

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl transition-all duration-500 ${
                        hoveredIndex === index
                          ? "scale-110 opacity-100"
                          : "scale-90 opacity-80 group-hover:scale-100 group-hover:opacity-100"
                      }`}
                    >
                      <Play className="w-10 h-10 text-olive-700 ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* View count badge */}
                  {reel.views && (
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-white" />
                      <span className="text-white text-xs font-medium">{reel.views}</span>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Follow us CTA */}
          <div className="text-center mt-12 animate-fade-in-up delay-300">
            <a
              href="https://instagram.com/sukino"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-olive-700 hover:text-olive-900 transition-colors font-medium group"
            >
              <span>Follow us on Instagram</span>
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {selectedReel && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Instagram Embed Container */}
            <div className="relative w-full bg-white">
              {selectedReel.embedCode ? (
                <div
                  ref={embedRef}
                  className="instagram-embed-container"
                  dangerouslySetInnerHTML={{ __html: selectedReel.embedCode }}
                />
              ) : (
                <div className="w-full aspect-[9/16] flex items-center justify-center bg-black">
                  <div className="text-center text-white p-6">
                    <p className="mb-4">Unable to load reel</p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-white text-white hover:bg-white/10"
                    >
                      <a
                        href={selectedReel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View on Instagram
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              )}

              {/* Engagement Metrics Overlay (if no embed code) */}
              {!selectedReel.embedCode && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
                  {selectedReel.views && (
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 flex flex-col items-center gap-1">
                      <Eye className="w-5 h-5 text-white" />
                      <span className="text-white text-xs font-medium">{selectedReel.views}</span>
                    </div>
                  )}
                  {selectedReel.likes && (
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 flex flex-col items-center gap-1">
                      <Heart className="w-5 h-5 text-white" />
                      <span className="text-white text-xs font-medium">{selectedReel.likes}</span>
                    </div>
                  )}
                  {selectedReel.shares && (
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 flex flex-col items-center gap-1">
                      <Share2 className="w-5 h-5 text-white" />
                      <span className="text-white text-xs font-medium">{selectedReel.shares}</span>
                    </div>
                  )}
                  <a
                    href={selectedReel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 flex flex-col items-center gap-1 hover:bg-black/80 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                    <span className="text-white text-xs font-medium">Open</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
