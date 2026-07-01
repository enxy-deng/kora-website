import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { Card } from '../components/Card';
import { whatCards } from '../data/content';

export function WhatIsKora() {
  return (
    <AnimatedSection id="what" className="py-20 sm:py-28">
      <div className="section-shell">
        <p className="eyebrow">WHAT IS KORA</p>
        <h2 className="section-title">什么是 KORA？</h2>
        <p className="section-copy">
          它不是又一个攻略合集，而是一个可以直接对话的本地生活入口。你说清楚场景，它帮你缩小选择。
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {whatCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <Card className="h-full transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-brand/10 text-brand">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{card.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
