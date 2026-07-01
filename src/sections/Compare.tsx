import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, MapPinned } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { whyKoraReasons } from '../data/content';

export function Compare() {
  return (
    <AnimatedSection id="why" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="absolute right-0 bottom-8 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="section-shell relative">
        <div className="max-w-3xl">
          <p className="eyebrow">WHY KORA</p>
          <h2 className="section-title">为什么选择 KORA？</h2>
          <p className="section-copy">
            KORA 的重点不是让你看更多信息，而是把你当下的位置、预算、口味和场景变成能立刻行动的建议。
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {whyKoraReasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              className="rounded-[8px] border border-slate-200 bg-white/85 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-brand/30"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.48, delay: index * 0.08 }}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-[8px] ${reason.color}`}>
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{reason.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{reason.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 rounded-[8px] bg-ink p-6 text-white shadow-glow lg:grid-cols-[1fr_1.2fr] lg:p-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-sky-300">IN ONE CHAT</p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight">告诉它三件事，就能开始挖宝。</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { icon: MapPinned, text: '你在哪' },
              { icon: Clock, text: '现在想做什么' },
              { icon: CheckCircle2, text: '预算和忌口' },
            ].map((item) => (
              <div key={item.text} className="rounded-[8px] bg-white/10 p-4">
                <item.icon className="h-5 w-5 text-mint" />
                <p className="mt-3 font-semibold">{item.text}</p>
                <ArrowRight className="mt-4 h-4 w-4 text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
