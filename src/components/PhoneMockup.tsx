import { motion } from 'framer-motion';
import { ChevronLeft, Menu, Mic, MoreVertical, Paperclip, Send, Smile } from 'lucide-react';

const welcomeLines = [
  'Welcome to KORA! 🇨🇳 你在中国那个见多识广的本地朋友 —— 帮你找真正值得去的地方，不是旅游陷阱。',
  '我擅长这些：',
];

const skills = [
  '🍜 本地人真去的餐厅、咖啡、深夜食堂',
  '🍸 按你的 vibe 匹配酒吧、夜生活',
  '🚕 出行：打车、地铁、导航',
  '💳 生存刚需：支付宝、微信支付、VPN、现金',
  '🗺️ 高德直达链接，不迷路',
];

const prompts = ['你在哪？城市 + 大概位置，或直接发定位', '想要什么？吃饭 / 咖啡 / 酒吧 / 城市漫步', '预算 & 忌口？人均多少、辣不辣、素食等'];

export function PhoneMockup() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[390px]"
      initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute -left-12 top-14 h-32 w-32 rounded-full bg-amber-300/30 blur-3xl" />
      <div className="absolute -right-12 bottom-14 h-40 w-40 rounded-full bg-fuchsia-300/25 blur-3xl" />
      <div className="relative rounded-[38px] border border-slate-200 bg-slate-950 p-3 shadow-soft">
        <div className="relative overflow-hidden rounded-[30px] bg-[#9acb88]">
          <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.7)_1px,transparent_0)] [background-size:22px_22px]" />
          <div className="relative flex min-h-[690px] flex-col">
            <div className="px-4 pt-5">
              <div className="flex items-center gap-3">
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-sm" aria-label="返回">
                  <ChevronLeft className="h-7 w-7" />
                </button>
                <div className="flex flex-1 items-center gap-3 rounded-full bg-white px-3 py-2 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orange-200 to-orange-500 text-lg">
                    K
                  </div>
                  <div>
                    <p className="text-lg font-semibold leading-tight">Kora</p>
                    <p className="text-sm text-brand">••• 正在输入...</p>
                  </div>
                </div>
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-sm" aria-label="更多">
                  <MoreVertical className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="relative flex-1 px-5 py-6">
              <div className="ml-auto mb-3 max-w-[45%] rounded-[8px] bg-[#dff8c8] px-4 py-2 text-right text-sm text-slate-700 shadow-sm">
                /start <span className="text-emerald-600">✓✓</span>
              </div>
              <motion.div
                className="rounded-[8px] bg-white px-5 py-5 text-[15px] leading-7 text-slate-950 shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45 }}
              >
                {welcomeLines.map((line) => (
                  <p key={line} className="mb-4">
                    {line}
                  </p>
                ))}
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                <p className="mt-5">告诉我三件事就能开挖：</p>
                <ul className="mt-2 space-y-2">
                  {prompts.map((prompt) => (
                    <li key={prompt}>
                      <span className="font-semibold">{prompt.split('？')[0]}？</span>
                      {prompt.includes('？') ? prompt.split('？').slice(1).join('？') : ''}
                    </li>
                  ))}
                </ul>
                <p className="mt-5">比如“我在静安寺，想吃本帮菜，人均150以内” —— 我马上给你 2-3 家能导航的好店 🍜</p>
                <div className="mt-4 text-right text-xs text-slate-400">00:16</div>
              </motion.div>
            </div>

            <div className="relative p-4">
              <div className="flex items-center gap-2 rounded-full bg-white p-2 shadow-sm">
                <button className="flex h-10 items-center gap-2 rounded-full bg-sky-500 px-4 font-semibold text-white" aria-label="菜单">
                  <Menu className="h-5 w-5" />
                  菜单
                </button>
                <Smile className="h-6 w-6 text-slate-400" />
                <div className="min-w-0 flex-1 text-slate-400">输入消息</div>
                <Paperclip className="h-6 w-6 text-slate-400" />
                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-500 text-white" aria-label="语音">
                  <Mic className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
          <Send className="absolute right-7 top-[95px] h-6 w-6 rotate-[-18deg] text-brand" />
        </div>
      </div>
    </motion.div>
  );
}
