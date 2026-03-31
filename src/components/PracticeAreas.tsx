import { motion } from 'framer-motion';
import {
  Scale,
  Users,
  Gavel,
  Briefcase,
  Home as HomeIcon,
  Globe,
  Heart,
  FileText,
  ChevronRight,
} from 'lucide-react';
import { useInView } from './useInView';

const areas = [
  {
    icon: <Users size={32} />,
    title: 'Personal Injury',
    desc: 'Aggressive representation for victims of auto accidents, slip and falls, medical malpractice, and wrongful death. We fight for the maximum compensation you deserve.',
  },
  {
    icon: <Heart size={32} />,
    title: 'Family Law',
    desc: 'Compassionate guidance through divorce, child custody disputes, alimony, prenuptial agreements, and complex high-net-worth asset division.',
  },
  {
    icon: <Gavel size={32} />,
    title: 'Criminal Defense',
    desc: 'Protecting your freedom and reputation against state and federal charges with strategic, aggressive defense from experienced trial attorneys.',
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Business Law',
    desc: 'Full-service corporate counsel for entity formation, contract drafting, commercial disputes, mergers and acquisitions, and corporate governance.',
  },
  {
    icon: <FileText size={32} />,
    title: 'Estate Planning',
    desc: 'Preserving your legacy through comprehensive wills, trusts, powers of attorney, and sophisticated wealth transfer strategies.',
  },
  {
    icon: <HomeIcon size={32} />,
    title: 'Real Estate',
    desc: 'Expert handling of residential and commercial transactions, title disputes, zoning issues, and complex real estate litigation.',
  },
  {
    icon: <Globe size={32} />,
    title: 'Immigration',
    desc: 'Helping individuals, families, and businesses navigate the complex U.S. immigration system including visas, green cards, and naturalization.',
  },
  {
    icon: <Scale size={32} />,
    title: 'Inheritance Claims',
    desc: 'Specialized representation for probate litigation, contested wills, trust disputes, and complex inheritance claim matters.',
  },
];

export default function PracticeAreas() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="practice-areas" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" ref={ref}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-gold" />
            <h2 className="text-gold font-semibold uppercase tracking-[0.2em] text-sm">
              Our Expertise
            </h2>
            <div className="w-10 h-px bg-gold" />
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy mb-6">
            Comprehensive Legal Solutions
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We offer specialized counsel across a wide range of practice areas, ensuring our
            clients receive world-class expertise for every legal challenge.
          </p>
        </div>

        {/* Practice Area Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer relative overflow-hidden rounded"
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />

              <div className="relative z-10">
                <div className="text-gold mb-6 transition-transform group-hover:scale-110 duration-300">
                  {area.icon}
                </div>
                <h4 className="text-xl font-bold text-navy group-hover:text-white mb-4 transition-colors duration-500">
                  {area.title}
                </h4>
                <p className="text-gray-600 group-hover:text-gray-300 mb-6 text-sm leading-relaxed transition-colors duration-500">
                  {area.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-gold font-semibold text-sm hover:underline gap-1 group/link"
                >
                  Learn More{' '}
                  <ChevronRight
                    size={16}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
