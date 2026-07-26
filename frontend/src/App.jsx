import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import HowItWorks from './components/sections/HowItWorks';
import Pricing from './components/sections/Pricing';
import Contact from './components/sections/Contact';
import { useVisitHistory } from './hooks/useVisitHistory';

export default function App() {
  const { addVisit } = useVisitHistory();

  useEffect(() => {
    addVisit('homepage');
  }, [addVisit]);

  const handleNavigate = (pageId) => {
    addVisit(pageId);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Header onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <Services />
        <HowItWorks />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
