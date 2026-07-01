import { ArrowDown, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { PhoneMockup } from '../components/PhoneMockup';

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_16%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_42%_20%,rgba(244,114,182,0.16),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.20),transparent_32%),radial-gradient(circle_at_72%_76%,rgba(251,191,36,0.18),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fafc_78%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-paper to-transparent" />
      <div className="section-shell grid items-center gap-16 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">KORA CHINA GUIDE</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.04] text-ink sm:text-6xl lg:text-7xl">
            去中国，不止需要地图，
            <span className="block bg-gradient-to-r from-slate-500 via-brand to-emerald-500 bg-clip-text text-transparent">
              还需要一个真正懂当地人的朋友。
            </span>
          </h1>
          <div className="mt-8 max-w-2xl space-y-4 text-lg leading-9 text-slate-600">
            <p>KORA 是一个运行在 Telegram 上的 AI 本地助手。</p>
            <p>它不会给你游客攻略，而是像一个认识这座城市的朋友一样，为你推荐真正值得去的地方。</p>
          </div>
          <div id="start" className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="https://t.me/" className="gap-2">
              <Send className="h-4 w-4" />
              立即体验 KORA
            </Button>
            <Button href="#what" variant="secondary" className="gap-2">
              了解更多
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
        <PhoneMockup />
      </div>
    </section>
  );
}
