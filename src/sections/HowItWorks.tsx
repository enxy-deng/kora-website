import { AnimatedSection } from '../components/AnimatedSection';
import { steps } from '../data/content';

const stepStyles = [
  'from-sky-500 to-blue-600 shadow-sky-200',
  'from-fuchsia-500 to-pink-500 shadow-fuchsia-200',
  'from-amber-400 to-orange-500 shadow-amber-200',
  'from-emerald-400 to-teal-500 shadow-emerald-200',
];

export function HowItWorks() {
  return (
    <AnimatedSection id="how" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute right-[-120px] bottom-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="section-shell relative">
        <p className="eyebrow">HOW TO START</p>
        <h2 className="section-title">如何使用？</h2>
        <p className="section-copy">四步就能开始：打开 Telegram，找到 KORA，说清你的需求，然后拿到能直接出发的推荐。</p>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-12 hidden h-px w-[calc(100%+1.5rem)] bg-gradient-to-r from-sky-200 via-fuchsia-200 to-emerald-200 lg:block" />
              )}
              <div className="relative h-full rounded-[8px] border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-lg ${stepStyles[index]}`}
                >
                  <step.icon className="h-6 w-6" />
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
