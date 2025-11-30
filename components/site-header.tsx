"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-lg shadow-md border-b border-olive-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <nav className="flex items-center justify-between py-2 sm:py-3">
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
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 mr-2 sm:mr-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative text-base font-sans font-bold uppercase tracking-wider group transition-all duration-300 ${
                      active
                        ? "text-olive-900"
                        : "text-olive-700 hover:text-olive-900"
                    }`}
                  >
                    <span className="relative z-10">
                      {item.label}
                    </span>
                    {/* Single underline for both active and hover */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-olive-600 transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
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
                        : "text-olive-700 hover:text-olive-900 hover:bg-olive-50"
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


