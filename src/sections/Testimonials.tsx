import { Star } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { testimonials } from '../data/content';

const cardStyles = [
  'bg-sky-50 border-sky-100',
  'bg-fuchsia-50 border-fuchsia-100',
  'bg-emerald-50 border-emerald-100',
  'bg-amber-50 border-amber-100',
];

export function Testimonials() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="absolute left-10 top-14 h-56 w-56 rounded-full bg-fuchsia-200/35 blur-3xl" />
      <div className="absolute right-12 bottom-8 h-64 w-64 rounded-full bg-emerald-200/35 blur-3xl" />
      <div className="section-shell relative">
        <p className="eyebrow">LOVED BY TRAVELERS</p>
        <h2 className="section-title">为什么大家喜欢 KORA？</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, itemIndex) => (
            <article key={item.name} className={`rounded-[8px] border p-6 shadow-soft ${cardStyles[itemIndex]}`}>
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 min-h-28 text-base leading-8 text-slate-700">“{item.quote}”</p>
              <div className="mt-6 border-t border-white/80 pt-4">
                <p className="font-semibold">{item.name}</p>
                <p className="mt-1 text-sm text-slate-500">{item.context}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
