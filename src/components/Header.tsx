import { Send } from 'lucide-react';
import { Button } from './Button';

const navItems = [
  { label: '是什么', href: '#what' },
  { label: '为什么', href: '#why' },
  { label: '能做什么', href: '#features' },
  { label: '如何使用', href: '#how' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="glass mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="KORA China Guide">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
            K
          </span>
          <span className="hidden text-sm font-semibold text-ink sm:inline">KORA China Guide</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} className="transition hover:text-ink" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button href="#start" className="min-h-10 gap-2 px-4">
          <Send className="h-4 w-4" />
          <span className="hidden sm:inline">立即体验</span>
        </Button>
      </div>
    </header>
  );
}
