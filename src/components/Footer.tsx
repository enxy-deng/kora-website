import { Github, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-shell flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
              K
            </span>
            <span className="font-semibold">KORA China Guide</span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
            向中国人介绍 KORA —— 你的 AI 本地朋友。
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-600">
          <a href="#what" className="transition hover:text-ink">
            About
          </a>
          <a href="#start" className="inline-flex items-center gap-2 transition hover:text-ink">
            <Send className="h-4 w-4" />
            Telegram
          </a>
          <a href="#" className="inline-flex items-center gap-2 transition hover:text-ink">
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <span className="text-slate-400">© 2026 KORA</span>
        </div>
      </div>
    </footer>
  );
}
