import { Instagram, MapPin } from "lucide-react";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-olive-200 bg-cream-100/30 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Café Name & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-display text-olive-800 mb-3 uppercase tracking-wider">
              SUKINO
            </h3>
            <p className="text-sm text-olive-600 leading-relaxed max-w-md">
              A minimalist café experience inspired by Japanese aesthetics
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-semibold text-olive-800 mb-3 uppercase tracking-wide">
              Visit Us
            </h4>
            <p className="text-sm text-olive-600 leading-relaxed">
              123 Café Street
              <br />
              City, State 12345
            </p>
          </div>

          {/* Timings & Social */}
          <div>
            <h4 className="text-sm font-semibold text-olive-800 mb-3 uppercase tracking-wide">
              Hours
            </h4>
            <p className="text-sm text-olive-600 leading-relaxed mb-4">
              Open daily
              <br />
              8 AM – 11 PM
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-600 hover:text-accent-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-600 hover:text-accent-600 transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 pb-4 border-t border-olive-200 text-center">
          <p className="text-xs text-olive-500">
            © {new Date().getFullYear()} SUKINO Cafe & Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}






