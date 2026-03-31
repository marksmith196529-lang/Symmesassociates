import { ChevronRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Symmes Associates Law Office"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Location Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold font-semibold tracking-[0.25em] uppercase text-sm">
              Palm Beach, Florida
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] mb-8">
            Justice.
            <br />
            Integrity.
            <br />
            <span className="italic text-gold">Results.</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl"
          >
            For over 25 years, Symmes Associates has delivered elite legal representation
            across Palm Beach. We protect your rights with sophisticated strategy and
            unwavering dedication to achieving the best possible outcome.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <a
              href="#contact"
              className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded text-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl hover:shadow-2xl hover:shadow-gold/20"
            >
              Schedule Free Consultation
              <ChevronRight className="group-hover:translate-x-1.5 transition-transform duration-300" size={20} />
            </a>
            <button
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded text-lg font-bold transition-all duration-300 flex items-center justify-center gap-3 hover:border-white/40"
              aria-label="Watch firm introduction video"
            >
              <div className="w-10 h-10 rounded-full border-2 border-white/60 flex items-center justify-center">
                <Play className="fill-white" size={16} />
              </div>
              Watch Our Story
            </button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/15 pt-8"
          >
            {[
              { label: 'Years of Experience', value: '25+' },
              { label: 'Cases Won', value: '1,500+' },
              { label: 'Super Lawyers', value: 'Rated' },
              { label: 'AV Preeminent', value: 'Rated' },
            ].map((stat, i) => (
              <div key={i} className="text-white group">
                <div className="text-3xl md:text-4xl font-bold text-gold font-serif">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
