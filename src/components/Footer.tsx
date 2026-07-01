import { Github, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-ink text-white">
      <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-brand/30 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-44 w-44 rounded-full bg-mint/25 blur-3xl" />
      <div className="section-shell relative flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-ink">
              K
            </span>
            <span className="font-semibold">KORA China Guide</span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">向中国人介绍 KORA —— 你的 AI 本地朋友。</p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-300">
          <a href="#what" className="transition hover:text-white">
            About
          </a>
          <a href="#start" className="inline-flex items-center gap-2 transition hover:text-white">
            <Send className="h-4 w-4" />
            Telegram
          </a>
          <a href="#" className="inline-flex items-center gap-2 transition hover:text-white">
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <span className="text-slate-500">© 2026 KORA</span>
        </div>
      </div>
    </footer>
  );
}
