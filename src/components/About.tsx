import { motion } from 'framer-motion';
import { useInView } from './useInView';

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-24 lg:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12 relative w-full"
          >
            <div className="relative z-10">
              {/* Gold accent border */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/40 rounded" />
              <div className="relative overflow-hidden rounded shadow-2xl">
                <img
                  src="/images/john-symmes.jpg"
                  alt="John Symmes, Founding Partner of Symmes Associates"
                  className="w-full aspect-[3/4] object-cover object-top grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-6">
                  <p className="text-white font-serif text-xl font-bold">John Symmes, Esq.</p>
                  <p className="text-gold text-sm uppercase tracking-widest">Founding Partner</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/10 rounded-full -z-0" />
            <div className="absolute -top-8 -left-8 w-24 h-24 border-l-2 border-t-2 border-gold/50 rounded-tl-lg" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-7/12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-gold" />
              <h2 className="text-gold font-semibold uppercase tracking-[0.2em] text-sm">
                About Symmes Associates
              </h2>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
              Elite Advocacy Built on a Foundation of{' '}
              <span className="italic text-gold">Trust</span>
            </h3>

            <div className="space-y-6 text-gray-600 leading-relaxed text-base lg:text-lg">
              <p>
                Founded in Palm Beach by <strong className="text-navy">John Symmes</strong>, Symmes Associates
                was established with a singular vision: to provide the sophisticated legal counsel of a
                large international firm with the personal attention and genuine care of a boutique practice.
              </p>
              <p>
                With over 25 years of experience serving the Palm Beach community, our mission is to achieve
                the best possible outcome for every client through meticulous preparation, aggressive
                advocacy, and strategic innovation. We don't just practice law — we solve life's most
                complex legal challenges with integrity and precision.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gray-100 mt-8">
              <div>
                <h4 className="font-bold text-navy mb-2 font-serif italic text-xl">Our Mission</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To provide uncompromising legal representation while maintaining the highest ethical
                  standards and treating every client with dignity and respect.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-navy mb-2 font-serif italic text-xl">Our Vision</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To be the most trusted legal partner in Florida for individuals and businesses alike,
                  setting the standard for excellence in legal advocacy.
                </p>
              </div>
            </div>

            {/* Founder Attribution */}
            <div className="pt-8 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold/40 flex-shrink-0">
                <img
                  src="/images/john-symmes.jpg"
                  alt="John Symmes"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-bold text-navy text-lg">John Symmes, Esq.</p>
                <p className="text-sm text-gray-500">Founding Partner & Lead Counsel</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
