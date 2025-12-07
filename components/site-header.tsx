"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Find the hero section or first section
    const heroSection = document.getElementById("hero") || document.querySelector("section:first-of-type");
    
    if (!heroSection) {
      // If no hero section found, default to scrolled state
      setIsHeroVisible(false);
      return;
    }

    // Function to check if section is at the top of viewport
    const checkSectionPosition = () => {
      const rect = heroSection.getBoundingClientRect();
      // Consider section at top if it's within the first 200px of viewport
      // This accounts for header height and some padding
      const isAtTop = rect.top <= 200 && rect.bottom > 100;
      setIsHeroVisible(isAtTop);
    };

    // Check initial state after a small delay to ensure DOM is ready
    setTimeout(checkSectionPosition, 100);

    // Create IntersectionObserver to detect when hero section is at the top
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = entry.boundingClientRect;
          // Section is at top if it's within the first 200px of viewport
          const isAtTop = rect.top <= 200 && rect.bottom > 100;
          setIsHeroVisible(isAtTop);
        });
      },
      {
        threshold: [0, 0.1], // Check at 0% and 10% visibility
        rootMargin: "-200px 0px 0px 0px", // Check if section top is within 200px from top
      }
    );

    observer.observe(heroSection);

    // Also listen to scroll for more accurate detection
    const handleScroll = () => {
      checkSectionPosition();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]); // Re-run when route changes

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/our-story", label: "Our Story" },
    { href: "/visit", label: "Visit" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // For our-story page, always show white background
  const isOurStoryPage = pathname === "/our-story";
  const shouldShowWhite = isOurStoryPage || !isHeroVisible;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        shouldShowWhite
          ? "bg-white backdrop-blur-md shadow-sm border-b border-olive-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <nav className="flex items-center justify-between py-2 sm:py-3 lg:pt-4">
          {/* Logo - moved left */}
          <Link 
            href="/" 
            className="flex items-center gap-3 -ml-2 sm:-ml-3"
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16">
              <Image
                src="/images/logo2.png"
                alt="Sukino Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg sm:text-xl font-display font-light text-olive-800 tracking-wider">
              SUKINO
            </span>
          </Link>

          {/* Desktop Navigation - moved right */}
          <ul className="hidden md:flex items-center gap-2 lg:gap-3 mr-2 sm:mr-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative text-base font-sans font-bold uppercase tracking-wider group transition-all duration-300 px-4 py-2 rounded-lg ${
                      active
                        ? "bg-olive-700 text-cream-50 shadow-md"
                        : "bg-white text-olive-800 hover:bg-cream-50 hover:text-olive-900 border border-olive-200"
                    }`}
                  >
                    <span className="relative z-10">
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-olive-700 hover:text-olive-900 transition-all duration-300 rounded-lg hover:bg-olive-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100 pb-6 border-t border-olive-200 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-2 pt-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-base font-sans font-bold uppercase tracking-wide py-3 px-4 rounded-lg transition-all duration-300 ${
                      active
                        ? "bg-olive-700 text-cream-50 shadow-md"
                        : "bg-white text-olive-800 hover:bg-cream-50 hover:text-olive-900 border border-olive-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}


