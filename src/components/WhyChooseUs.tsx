import { motion } from 'framer-motion';
import { Shield, Award, Users, Clock } from 'lucide-react';
import { useInView } from './useInView';

const pillars = [
  {
    icon: <Shield size={36} />,
    title: 'Strategic Excellence',
    desc: 'We combine deep legal knowledge with creative, out-of-the-box thinking to develop winning strategies for even the most complex challenges.',
  },
  {
    icon: <Users size={36} />,
    title: 'Personal Dedication',
    desc: 'Every case is handled with individual care and direct partner attention. You are never just a file number — you are our priority.',
  },
  {
    icon: <Award size={36} />,
    title: 'Proven Results',
    desc: 'With over $100M recovered for clients and a track record spanning 25+ years, our history of success speaks for itself.',
  },
  {
    icon: <Clock size={36} />,
    title: '24/7 Availability',
    desc: 'Legal emergencies don\'t wait for business hours. Our team is accessible when you need us most, providing peace of mind around the clock.',
  },
];

export default function WhyChooseUs() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-gold" />
            <h2 className="text-gold font-semibold uppercase tracking-[0.2em] text-sm">
              Why Clients Trust Us
            </h2>
            <div className="w-10 h-px bg-gold" />
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy mb-6">
            The Symmes <span className="italic text-gold">Difference</span>
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            What sets us apart is not just our legal expertise, but the way we treat every
            client and every case with the attention and dedication it deserves.
          </p>
        </div>

        {/* Pillars */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-navy rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-110">
                {pillar.icon}
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">{pillar.title}</h4>
              <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-navy rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h4 className="text-2xl md:text-3xl font-serif text-white mb-3">
              Ready to Discuss Your Case?
            </h4>
            <p className="text-gray-400 max-w-xl">
              Our initial consultations are always free and completely confidential. Let us
              show you why Palm Beach families and businesses trust Symmes Associates.
            </p>
          </div>
          <a
            href="#contact"
            className="bg-gold hover:bg-gold-dark text-white px-10 py-4 rounded font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap flex-shrink-0"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
