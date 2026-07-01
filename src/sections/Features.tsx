import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { features } from '../data/content';

export function Features() {
  return (
    <AnimatedSection id="features" className="py-20 sm:py-28">
      <div className="section-shell">
        <p className="eyebrow">FEATURES</p>
        <h2 className="section-title">KORA 能做什么？</h2>
        <p className="section-copy">
          从“我想吃什么”到“怎么过去、怎么付钱、要不要预约”，把旅行里最碎的决定压缩成一次聊天。
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              className="group rounded-[8px] border border-slate-200 bg-white p-6 shadow-soft transition-colors hover:border-brand/40"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.22 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-slate-100 text-ink transition group-hover:bg-brand group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
