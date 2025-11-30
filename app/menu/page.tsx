"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { menuData, type MenuCategory, type MenuItem } from "@/data/menu";
import { ChevronLeft, ChevronRight, Clock, Flame, Instagram, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function MenuPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get("category") || menuData[0]?.id || ""
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && menuData.find((c) => c.id === category)) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  // Check scroll position for arrow visibility
  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    router.push(`/menu?category=${categoryId}`, { scroll: false });
    setTimeout(() => {
      document.getElementById("menu-content")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const currentCategory = menuData.find((cat) => cat.id === selectedCategory) || menuData[0];

  const Legend = () => (
    <div className="bg-cream-100 border border-olive-200 rounded-lg px-3 py-2 mb-6">
      <div className="flex flex-wrap items-center gap-3 text-xs text-olive-600">
        <span className="font-semibold text-olive-800 uppercase tracking-wide mr-1">Legend:</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
          <span>Veg</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
          <span>Non-Veg</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Flame className="w-3 h-3 text-orange-600" />
          <span>Spicy</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Badge
            variant="outline"
            className="bg-accent-100 text-accent-700 border-accent-300 text-xs py-0 px-1.5 h-4"
          >
            Sukino Special
          </Badge>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-4 sm:pt-6 pb-0 bg-[#faf9f7] relative">
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
        <div className="absolute inset-0 bg-[#faf9f7]/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Compact Page Header */}
        <div className="mb-6 text-center animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-olive-800 mb-2">
            Menu
          </h1>
          <p className="text-sm sm:text-base text-olive-600 max-w-xl mx-auto">
            Discover our carefully crafted selection of dishes, each prepared with intention
            and served with warmth.
          </p>
        </div>

        {/* Compact Legend */}
        <Legend />

        {/* Desktop Layout: Sidebar + Content */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-3">
            <div className="space-y-2 pr-2">
              <h2 className="text-xs font-semibold text-olive-800 uppercase tracking-wide mb-4 px-1">
                Categories
              </h2>
              {menuData.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-olive-700 to-olive-800 text-cream-50 shadow-lg scale-105"
                      : "bg-cream-100 text-olive-700 hover:bg-gradient-to-r hover:from-olive-50 hover:to-olive-100 hover:shadow-md"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative z-10">
                    <div className={`font-medium text-sm transition-colors ${
                      selectedCategory === category.id ? "text-cream-50" : "text-olive-800"
                    }`}>
                      {category.name}
                    </div>
                    <div className={`text-xs mt-1 transition-colors ${
                      selectedCategory === category.id ? "text-cream-100 opacity-90" : "text-olive-600 opacity-75"
                    }`}>
                      {category.description}
                    </div>
                  </div>
                  {selectedCategory === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-9" id="menu-content" style={{ scrollMarginTop: '100px' }}>
            <CategoryContent category={currentCategory} />
          </div>
        </div>

        {/* Mobile Layout: Horizontal Chips + Content */}
        <div className="lg:hidden">
          {/* Horizontal Scrollable Category Chips with Arrows */}
          <div className="mb-6 relative -mx-4 px-4">
            {/* Left Arrow */}
            {showLeftArrow && (
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-olive-700" />
              </button>
            )}
            {/* Right Arrow */}
            {showRightArrow && (
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-olive-700" />
              </button>
            )}
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory"
            >
              <div className="flex gap-2 min-w-max px-8">
                {menuData.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 snap-center animate-fade-in-up ${
                      selectedCategory === category.id
                        ? "bg-olive-700 text-cream-50 shadow-md scale-105"
                        : "bg-cream-100 text-olive-700 border border-olive-200 hover:bg-olive-50 hover:scale-105"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div id="menu-content" style={{ scrollMarginTop: '100px' }}>
            <CategoryContent category={currentCategory} />
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
    </div>
  );
}

function CategoryContent({ category }: { category: MenuCategory }) {
  return (
    <div className="animate-fade-in-up">
      {/* Category Header with description on the right */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-4">
        <h2 className="text-2xl sm:text-3xl font-display font-light text-olive-800 animate-slide-in-left">
          {category.name}
        </h2>
        <p className="text-sm text-olive-600 italic sm:text-right max-w-md animate-slide-in-right">
          {category.description}
        </p>
      </div>

      {/* If category has sections */}
      {category.sections && category.sections.length > 0 && (
        <div className="space-y-8">
          {category.sections.map((section, sectionIndex) => (
            <div key={section.id} className="animate-fade-in-up" style={{ animationDelay: `${sectionIndex * 100}ms` }}>
              <h3 className="text-xl sm:text-2xl font-display font-light text-olive-800 mb-3 animate-slide-in-left">
                {section.name}
              </h3>
              {section.description && (
                <p className="text-olive-600 mb-4 text-sm animate-slide-in-right">{section.description}</p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={item.id}
                    className="animate-stagger"
                    style={{ animationDelay: `${(sectionIndex * 100) + (itemIndex * 50)}ms` }}
                  >
                    <MenuItemCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* If category has direct items */}
      {category.items && category.items.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {category.items.map((item, index) => (
            <div
              key={item.id}
              className="animate-stagger"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <MenuItemCard item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// MenuItemCard component - Enhanced
function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <Card className="bg-cream-50/90 backdrop-blur-sm border-olive-200 hover:shadow-2xl transition-all duration-500 h-full card-hover group relative overflow-hidden">
      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-olive-50/0 to-olive-100/0 group-hover:from-olive-50/50 group-hover:to-olive-100/30 transition-all duration-500 -z-10"></div>
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer"></div>
      
      <CardHeader className="p-5 relative z-10">
        <div className="flex items-start justify-between mb-2 gap-2">
          <CardTitle className="text-base sm:text-lg font-display font-light text-olive-800 pr-2 flex-1 group-hover:text-olive-900 transition-colors">
            {item.name}
          </CardTitle>
          <span className="text-base sm:text-lg font-light text-olive-700 whitespace-nowrap group-hover:text-olive-800 transition-colors">
            ₹{item.price.toFixed(0)}
          </span>
        </div>
        {item.description && (
          <CardDescription className="text-olive-600 mb-3 leading-relaxed text-sm group-hover:text-olive-700 transition-colors">
            {item.description}
          </CardDescription>
        )}
        <div className="flex flex-wrap gap-2 mt-3">
          {item.tags.map((tag) => {
            if (tag === "veg") {
              return (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-300 text-xs py-0.5 px-2 h-6 hover:scale-110 transition-transform duration-300 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 mr-1.5 inline-block"></span>
                  Veg
                </Badge>
              );
            }
            if (tag === "non_veg") {
              return (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-red-50 text-red-700 border-red-300 text-xs py-0.5 px-2 h-6 hover:scale-110 transition-transform duration-300 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mr-1.5 inline-block"></span>
                  Non-Veg
                </Badge>
              );
            }
            if (tag === "spicy") {
              return (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-orange-50 text-orange-700 border-orange-300 text-xs py-0.5 px-2 h-6 hover:scale-110 transition-transform duration-300 shadow-sm"
                >
                  <Flame className="w-2.5 h-2.5 mr-1" />
                  Spicy
                </Badge>
              );
            }
            if (tag === "sukino_special") {
              return (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-accent-100 text-accent-700 border-accent-300 text-xs py-0.5 px-2 h-6 hover:scale-110 transition-transform duration-300 shadow-sm"
                >
                  Sukino Special
                </Badge>
              );
            }
            return null;
          })}
        </div>
      </CardHeader>
    </Card>
  );
}
