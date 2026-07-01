import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-ink text-white shadow-glow hover:-translate-y-0.5 hover:bg-slate-900'
      : 'border border-slate-200 bg-white/80 text-ink hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white';

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-300 ${styles} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
