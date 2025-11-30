import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-olive-200 bg-cream-100/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-display text-olive-800 mb-4">SUKINO</h3>
            <p className="text-sm text-olive-600">
              A minimalist café experience inspired by Japanese aesthetics
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-olive-800 mb-4">Visit Us</h4>
            <p className="text-sm text-olive-600">
              123 Café Street
              <br />
              City, State 12345
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-olive-800 mb-4">Connect</h4>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-olive-600 hover:text-accent-600 transition-colors"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-olive-200 text-center">
          <p className="text-xs text-olive-500">
            © {new Date().getFullYear()} SUKINO Cafe & Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}





