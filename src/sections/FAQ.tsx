import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { faqs } from '../data/content';

const faqAccents = ['border-l-sky-400', 'border-l-fuchsia-400', 'border-l-emerald-400', 'border-l-amber-400'];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <AnimatedSection id="faq" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_20%,rgba(37,99,235,0.10),transparent_28%),radial-gradient(circle_at_82%_66%,rgba(244,114,182,0.12),transparent_30%)]" />
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">常见问题</h2>
          <p className="section-copy">关于开始使用 KORA，你最可能先关心的几个答案。</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-[8px] border border-slate-200 border-l-4 bg-white/90 shadow-soft backdrop-blur ${faqAccents[index]}`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {faq.question}
                  <ChevronDown className={`h-5 w-5 shrink-0 transition ${isOpen ? 'rotate-180 text-brand' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 leading-7 text-slate-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
