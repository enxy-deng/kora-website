import { AnimatedSection } from '../components/AnimatedSection';
import { steps } from '../data/content';

export function HowItWorks() {
  return (
    <AnimatedSection id="how" className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <p className="eyebrow">HOW TO START</p>
        <h2 className="section-title">如何使用？</h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-12 hidden h-px w-[calc(100%+1.5rem)] bg-slate-200 lg:block" />
              )}
              <div className="relative rounded-[8px] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white">
                  <step.icon className="h-5 w-5" />
                </div>
                <p className="mt-6 text-sm font-semibold text-brand">Step {index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 min-h-20 leading-7 text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
