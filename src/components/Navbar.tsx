import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Practice Areas', href: '#practice-areas' },
  { name: 'Our Attorneys', href: '#attorneys' },
  { name: 'Results', href: '#results' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-gradient-to-b from-black/40 to-transparent py-5'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0 flex items-center gap-3 group">
              {/* Scales of Justice SVG Logo */}
              <svg
                className={`w-9 h-9 transition-colors duration-300 ${isScrolled ? 'text-navy' : 'text-white'}`}
                viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 2L20 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M12 34H28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M8 10L20 6L32 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 10L4 22C4 22 4 26 8 26C12 26 12 22 12 22L8 10Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15"/>
                <path d="M32 10L28 22C28 22 28 26 32 26C36 26 36 22 36 22L32 10Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15"/>
              </svg>
              <div className="flex flex-col">
                <span className={`text-xl font-serif font-bold tracking-tight leading-none transition-colors duration-300 ${isScrolled ? 'text-navy' : 'text-white'}`}>
                  SYMMES
                </span>
                <span className="text-gold text-[10px] font-semibold tracking-[0.3em] uppercase leading-none mt-0.5">
                  Associates
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-gold relative group ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-3/4" />
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 bg-gold hover:bg-gold-dark text-white px-6 py-2.5 rounded text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Free Consultation
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t shadow-xl"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    className="block px-4 py-4 text-base font-medium text-gray-800 border-b border-gray-100 last:border-0 hover:text-gold hover:bg-gold/5 transition-colors rounded"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4">
                  <a
                    href="#contact"
                    onClick={handleNavClick}
                    className="block w-full text-center bg-gold hover:bg-gold-dark text-white px-6 py-4 rounded font-bold shadow-md text-lg transition-all"
                  >
                    Free Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
