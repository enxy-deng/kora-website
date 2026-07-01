import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { features } from '../data/content';

const featureColors = [
  'bg-orange-100 text-orange-600 group-hover:bg-orange-500',
  'bg-sky-100 text-sky-600 group-hover:bg-sky-500',
  'bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-500',
  'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500',
  'bg-violet-100 text-violet-600 group-hover:bg-violet-500',
  'bg-amber-100 text-amber-600 group-hover:bg-amber-500',
];

export function Features() {
  return (
    <AnimatedSection id="features" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute right-[-120px] top-20 h-80 w-80 rounded-full bg-fuchsia-200/30 blur-3xl" />
      <div className="section-shell relative">
        <p className="eyebrow">FEATURES</p>
        <h2 className="section-title">KORA 能做什么？</h2>
        <p className="section-copy">
          从“我想吃什么”到“怎么过去、怎么付钱、要不要预约”，把旅行里最碎的决定压缩成一次聊天。
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="group rounded-[8px] border border-slate-200 bg-white p-6 shadow-soft transition-colors hover:border-brand/40"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.22 }}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-[8px] transition group-hover:text-white ${featureColors[index]}`}
              >
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
