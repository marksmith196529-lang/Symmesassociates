import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useInView } from './useInView';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [requestCallback, setRequestCallback] = useState(false);
  const { ref, isInView } = useInView(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-gold" />
              <h2 className="text-gold font-semibold uppercase tracking-[0.2em] text-sm">
                Contact Us
              </h2>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy mb-6 leading-tight">
              Secure Your{' '}
              <span className="italic text-gold">Free</span> Case Review
            </h3>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Our team is ready to discuss your legal needs. Contact us today to schedule a
              confidential consultation with one of our expert attorneys. There is no obligation
              and no cost.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  icon: <MapPin size={24} />,
                  label: 'Our Office',
                  value: '123 Royal Palm Way, Suite 400\nPalm Beach, FL 33480',
                },
                {
                  icon: <Phone size={24} />,
                  label: 'Call Us',
                  value: '(561) 555-0199',
                  href: 'tel:+15615550199',
                },
                {
                  icon: <Mail size={24} />,
                  label: 'Email Us',
                  value: 'contact@symmeslaw.com',
                  href: 'mailto:contact@symmeslaw.com',
                },
                {
                  icon: <Clock size={24} />,
                  label: 'Office Hours',
                  value: 'Mon – Fri: 8:00 AM – 6:00 PM\nSat – Sun: By Appointment',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="bg-gold/10 p-3 rounded-xl text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm uppercase tracking-wider">
                      {item.label}
                    </h4>
                    {'href' in item && item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-gold transition-colors whitespace-pre-line"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="mt-10 rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                title="Symmes Associates Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14283.583534891!2d-80.04!3d26.705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d66e8cf6b675%3A0x4a6c6dc78c5d4b5!2sPalm%20Beach%2C%20FL!5e0!3m2!1sen!1sus!4v1690000000000!5m2!1sen!1sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-7/12"
          >
            <div className="bg-white border border-gray-200 shadow-2xl p-8 md:p-10 rounded-2xl relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-dark to-gold" />

              <h4 className="text-2xl font-serif font-bold text-navy mb-2">
                Request a Free Consultation
              </h4>
              <p className="text-gray-500 text-sm mb-8">
                Fill out the form below and a member of our team will contact you within 24 hours.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
                  <h4 className="text-2xl font-bold text-navy mb-2">Thank You!</h4>
                  <p className="text-gray-600">
                    We've received your message and will be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="(561) 555-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="practice-area" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Practice Area <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="practice-area"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select a practice area</option>
                      <option>Personal Injury</option>
                      <option>Family Law</option>
                      <option>Criminal Defense</option>
                      <option>Business Law</option>
                      <option>Estate Planning</option>
                      <option>Real Estate</option>
                      <option>Immigration</option>
                      <option>Inheritance Claims</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                      placeholder="Briefly describe your legal situation..."
                    />
                  </div>

                  {/* Request callback toggle */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={requestCallback}
                      onChange={() => setRequestCallback(!requestCallback)}
                      className="w-5 h-5 rounded border-gray-300 text-gold focus:ring-gold"
                    />
                    <span className="text-sm text-gray-600 group-hover:text-navy transition-colors">
                      I'd prefer a callback — please call me back at a convenient time
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-dark text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2 group"
                  >
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="text-gold hover:underline">
                      Privacy Policy
                    </a>
                    . All communications are confidential.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
