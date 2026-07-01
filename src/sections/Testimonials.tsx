import { Star } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { testimonials } from '../data/content';

export function Testimonials() {
  return (
    <AnimatedSection className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <p className="eyebrow">LOVED BY TRAVELERS</p>
        <h2 className="section-title">为什么大家喜欢 KORA？</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex gap-1 text-mint">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 min-h-28 text-base leading-8 text-slate-700">“{item.quote}”</p>
              <div className="mt-6 border-t border-slate-100 pt-4">
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
