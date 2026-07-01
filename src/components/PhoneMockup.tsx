import { motion } from 'framer-motion';
import { MapPin, Navigation, Star } from 'lucide-react';

const messages = [
  { from: 'user', text: '我在上海静安寺，预算150，想吃本帮菜。' },
  {
    from: 'kora',
    text: '可以。避开游客排队店，我会优先找本地人常去、距离近、价格稳的选择。',
  },
  {
    from: 'kora',
    text: '推荐：瑞福园静安店。人均约120，红烧肉和油爆虾稳定，适合第一次吃本帮菜。',
  },
];

export function PhoneMockup() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[360px]"
      initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute -left-10 top-20 h-28 w-28 rounded-full bg-mint/20 blur-3xl" />
      <div className="absolute -right-10 bottom-16 h-36 w-36 rounded-full bg-brand/20 blur-3xl" />
      <div className="relative rounded-[38px] border border-slate-200 bg-slate-950 p-3 shadow-soft">
        <div className="overflow-hidden rounded-[30px] bg-[#eff4f8]">
          <div className="flex items-center justify-between bg-white px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                K
              </div>
              <div>
                <p className="text-sm font-semibold">KORA</p>
                <p className="text-xs text-mint">online</p>
              </div>
            </div>
            <Navigation className="h-5 w-5 text-brand" />
          </div>
          <div className="space-y-3 px-4 py-5">
            {messages.map((message, index) => (
              <motion.div
                key={message.text}
                className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.5 + index * 0.18 }}
              >
                <div
                  className={`max-w-[82%] rounded-[8px] px-4 py-3 text-sm leading-6 ${
                    message.from === 'user'
                      ? 'bg-brand text-white'
                      : 'border border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  {message.text}
                </div>
              </motion.div>
            ))}
            <div className="rounded-[8px] border border-slate-200 bg-white p-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-mint/10 text-mint">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                    <Star className="h-3.5 w-3.5 fill-mint text-mint" />
                    本地人高频选择
                  </div>
                  <p className="mt-1 text-sm font-semibold">步行 12 分钟 · 可高德导航</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">建议 18:00 前到，晚餐时段可能排队。</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 bg-white p-4">
            <div className="rounded-full bg-slate-100 px-4 py-3 text-sm text-slate-400">输入你的城市、预算和需求...</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
