import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useInView } from './useInView';

const articles = [
  {
    category: 'Personal Injury',
    title: 'Understanding Your Rights After a Florida Auto Accident',
    excerpt:
      'Florida\'s no-fault insurance system can be confusing. Learn what steps to take immediately after an accident and when you need an attorney to protect your interests.',
    date: 'December 12, 2025',
    readTime: '5 min read',
    color: 'bg-red-50 text-red-700',
  },
  {
    category: 'Estate Planning',
    title: 'Why Every Palm Beach Family Needs an Estate Plan in 2026',
    excerpt:
      'Recent changes in Florida probate law make it more important than ever to have a comprehensive estate plan. Discover the essential documents every family should have.',
    date: 'November 28, 2025',
    readTime: '7 min read',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    category: 'Business Law',
    title: 'Protecting Your Business: Non-Compete Agreements in Florida',
    excerpt:
      'With evolving federal and state regulations, understanding the enforceability of non-compete clauses is critical for Florida business owners and executives.',
    date: 'November 15, 2025',
    readTime: '6 min read',
    color: 'bg-green-50 text-green-700',
  },
];

export default function Blog() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="blog" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-gold" />
              <h2 className="text-gold font-semibold uppercase tracking-[0.2em] text-sm">
                Legal Insights
              </h2>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy">
              From Our Blog
            </h3>
          </div>
          <a
            href="#"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all"
          >
            View All Articles <ArrowRight size={18} />
          </a>
        </div>

        {/* Articles */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer"
            >
              {/* Category Color Bar */}
              <div className="h-1 bg-gold group-hover:h-2 transition-all duration-300" />

              <div className="p-8">
                {/* Category Tag */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${article.color}`}
                >
                  {article.category}
                </span>

                <h4 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300 leading-snug">
                  {article.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">{article.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-400 pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
