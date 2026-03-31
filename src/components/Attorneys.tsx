import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useInView } from './useInView';

const attorneys = [
  {
    name: 'John Symmes',
    role: 'Founding Partner',
    img: '/images/john-symmes.jpg',
    bio: 'With over 25 years of legal experience, John founded Symmes Associates with a vision of delivering elite advocacy with personal attention. He has been recognized as a Super Lawyer and holds an AV Preeminent rating from Martindale-Hubbell.',
    barAdmissions: 'Florida Bar, U.S. District Court (S.D. Fla.)',
    education: 'J.D., University of Florida Levin College of Law',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Senior Associate',
    img: '/images/attorney-elena.jpg',
    bio: 'Elena specializes in Family Law and Immigration, bringing compassionate yet strategic counsel to every case. Fluent in English and Spanish, she has helped hundreds of families navigate complex legal matters.',
    barAdmissions: 'Florida Bar, U.S. Immigration Court',
    education: 'J.D., University of Miami School of Law',
  },
  {
    name: 'Marcus Thorne',
    role: 'Litigation Specialist',
    img: '/images/attorney-marcus.jpg',
    bio: 'Marcus is a seasoned trial attorney with extensive experience in Personal Injury and Criminal Defense. Known for his commanding courtroom presence, he has secured over $50M in verdicts and settlements.',
    barAdmissions: 'Florida Bar, U.S. District Court (S.D. & M.D. Fla.)',
    education: 'J.D., Georgetown University Law Center',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Estate & Real Estate Counsel',
    img: '/images/attorney-sarah.jpg',
    bio: 'Sarah focuses on Estate Planning, Inheritance Claims, and Real Estate law. Her meticulous approach and deep knowledge of Florida property and probate law make her an invaluable asset to our clients.',
    barAdmissions: 'Florida Bar, New York Bar',
    education: 'J.D., Columbia Law School',
  },
];

export default function Attorneys() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="attorneys" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-gold" />
            <h2 className="text-gold font-semibold uppercase tracking-[0.2em] text-sm">
              Our Team
            </h2>
            <div className="w-10 h-px bg-gold" />
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy mb-6">
            Expert Attorneys
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Our team of dedicated legal professionals brings decades of combined experience
            and a relentless commitment to achieving the best results for our clients.
          </p>
        </div>

        {/* Attorney Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attorneys.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white group overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 rounded"
            >
              {/* Photo */}
              <div className="h-80 overflow-hidden relative">
                <img
                  src={member.img}
                  alt={`${member.name} - ${member.role} at Symmes Associates`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                  <p className="text-white/90 text-sm leading-relaxed text-center">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-navy">{member.name}</h4>
                <p className="text-gold text-xs uppercase tracking-[0.2em] mt-1 mb-3">
                  {member.role}
                </p>
                <p className="text-gray-500 text-xs mb-1">
                  <span className="font-semibold text-gray-700">Bar: </span>
                  {member.barAdmissions}
                </p>
                <p className="text-gray-500 text-xs mb-4">
                  <span className="font-semibold text-gray-700">Education: </span>
                  {member.education}
                </p>

                {/* Social Links */}
                <div className="flex gap-3 pt-3 border-t border-gray-100">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gold transition-colors"
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gold transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
