import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { koraWay, traditional } from '../data/content';

export function Compare() {
  return (
    <AnimatedSection id="why" className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">WHY KORA</p>
          <h2 className="section-title">为什么不用大众点评、小红书？</h2>
          <p className="section-copy">
            它们适合搜索海量信息。KORA 更适合在你已经站在街头、只想快点做决定的时候。
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ComparePanel title="传统攻略" items={traditional} tone="muted" />
          <ComparePanel title="KORA" items={koraWay} tone="brand" />
        </div>
      </div>
    </AnimatedSection>
  );
}

function ComparePanel({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: 'muted' | 'brand';
}) {
  const isBrand = tone === 'brand';

  return (
    <motion.div
      className={`rounded-[8px] border p-6 sm:p-8 ${
        isBrand ? 'border-brand/30 bg-ink text-white shadow-glow' : 'border-slate-200 bg-slate-50 text-ink'
      }`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      <div className="mt-7 space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={item}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: isBrand ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                isBrand ? 'bg-mint text-white' : 'bg-rose-50 text-rose-500'
              }`}
            >
              {isBrand ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
            </span>
            <span className={isBrand ? 'text-slate-100' : 'text-slate-600'}>{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
