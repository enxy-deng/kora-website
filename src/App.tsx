import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ChatExample } from './sections/ChatExample';
import { Compare } from './sections/Compare';
import { FAQ } from './sections/FAQ';
import { Features } from './sections/Features';
import { Hero } from './sections/Hero';
import { HowItWorks } from './sections/HowItWorks';
import { Testimonials } from './sections/Testimonials';
import { WhatIsKora } from './sections/WhatIsKora';

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <WhatIsKora />
        <Compare />
        <Features />
        <HowItWorks />
        <ChatExample />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
