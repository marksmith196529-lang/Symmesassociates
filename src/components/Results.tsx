import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useInView } from './useInView';

const cases = [
  { amount: '$12.5M', title: 'Medical Malpractice Settlement', type: 'Personal Injury' },
  { amount: '$4.2M', title: 'Commercial Real Estate Dispute', type: 'Business Law' },
  { amount: '$2.8M', title: 'Wrongful Death Verdict', type: 'Personal Injury' },
  { amount: '$1.5M', title: 'High-Net-Worth Divorce', type: 'Family Law' },
  { amount: '$950K', title: 'DUI Defense — Charges Dismissed', type: 'Criminal Defense' },
  { amount: '$3.1M', title: 'Estate & Trust Litigation', type: 'Inheritance Claims' },
];

const testimonials = [
  {
    name: 'Robert & Catherine Chen',
    role: 'Business Law Client',
    text: 'Symmes Associates guided our family business through a complex acquisition with expertise and care. John personally ensured every detail was handled. We couldn\'t have asked for better counsel.',
    rating: 5,
  },
  {
    name: 'Maria Gonzalez',
    role: 'Immigration Client',
    text: 'Elena Rodriguez changed our family\'s life. Her dedication to our immigration case was extraordinary. She kept us informed every step of the way and achieved the outcome we dreamed of.',
    rating: 5,
  },
  {
    name: 'James & Patricia Williams',
    role: 'Estate Planning Client',
    text: 'After losing our father, Sarah Mitchell handled the estate with such professionalism and empathy. She navigated a complicated probate situation and protected our family\'s interests beautifully.',
    rating: 5,
  },
  {
    name: 'Michael Davis',
    role: 'Personal Injury Client',
    text: 'After my accident, Marcus Thorne fought tirelessly for my case. The settlement far exceeded my expectations. The entire team at Symmes Associates treated me like family throughout the process.',
    rating: 5,
  },
];

export default function Results() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { ref, isInView } = useInView(0.1);

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="results" className="py-24 lg:py-32 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Case Results */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-gold" />
            <h2 className="text-gold font-semibold uppercase tracking-[0.2em] text-sm">
              Proven Track Record
            </h2>
            <div className="w-10 h-px bg-gold" />
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6">
            Case Results & Verdicts
          </h3>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Our commitment to excellence is reflected in the results we achieve for our clients.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-lg text-center backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-bold text-gold mb-3 font-serif group-hover:scale-110 transition-transform duration-300 inline-block">
                {item.amount}
              </div>
              <div className="text-lg font-bold mb-2">{item.title}</div>
              <div className="text-xs text-gold/70 uppercase tracking-[0.2em]">{item.type}</div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center italic text-xs text-gray-500 max-w-3xl mx-auto mb-20">
          * Attorney Advertising. Prior results do not guarantee a similar outcome. Every case is
          different and must be judged on its own merits. The information on this website is for
          general information purposes only.
        </p>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-serif mb-4">Client Testimonials</h3>
            <p className="text-gray-400">What our clients say about working with us.</p>
          </div>

          <div className="relative bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 backdrop-blur-sm">
            {/* Quote icon */}
            <Quote className="text-gold/20 absolute top-6 left-6" size={48} />

            <div className="relative z-10 text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                  <Star key={i} size={20} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote Text */}
              <motion.blockquote
                key={currentTestimonial}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl text-gray-200 leading-relaxed italic mb-8 max-w-3xl mx-auto"
              >
                "{testimonials[currentTestimonial].text}"
              </motion.blockquote>

              {/* Author */}
              <motion.div
                key={`author-${currentTestimonial}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="font-bold text-white text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-gold text-sm uppercase tracking-widest mt-1">
                  {testimonials[currentTestimonial].role}
                </p>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentTestimonial ? 'bg-gold w-8' : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
