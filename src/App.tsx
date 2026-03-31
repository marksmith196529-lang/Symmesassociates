import { Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Attorneys from './components/Attorneys';
import Results from './components/Results';
import WhyChooseUs from './components/WhyChooseUs';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* =========================================
   Symmes Associates — Law Firm Website
   Palm Beach, Florida
   
   Built with React + Tailwind CSS v4
   Designed for professionalism, accessibility,
   and conversion optimization.
   ========================================= */

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white antialiased">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        {/* 1. Hero — Full-screen high-impact landing */}
        <Hero />

        {/* 2. About Us — Firm story and founder bio */}
        <About />

        {/* 3. Practice Areas — 8 practice area cards */}
        <PracticeAreas />

        {/* 4. Why Choose Us — Benefit pillars + CTA */}
        <WhyChooseUs />

        {/* 5. Our Attorneys — Team grid with bios */}
        <Attorneys />

        {/* 6. Results & Testimonials — Case results + carousel */}
        <Results />

        {/* 7. Blog / Insights — Latest article previews */}
        <Blog />

        {/* 8. Contact — Form, map, contact info */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href="tel:+15615550199"
          className="bg-gold hover:bg-gold-dark text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Call for free consultation"
        >
          <Phone size={24} />
        </a>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full" />
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-navy/95 backdrop-blur-md border-t border-white/10 py-3 px-4">
        <a
          href="#contact"
          className="block w-full text-center bg-gold hover:bg-gold-dark text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wider shadow-lg transition-all"
        >
          📞 Free Consultation — Call Now
        </a>
      </div>
    </div>
  );
}

export default App;
