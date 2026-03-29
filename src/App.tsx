import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Scroll-reveal for .reveal elements
  useEffect(() => {
    if (isLoading) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}

        <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <Navigation />

          <main>
            <section id="home">
              <Home />
            </section>

            <section id="work" className="scroll-mt-14">
              <Work />
            </section>

            <section id="about" className="scroll-mt-14">
              <About />
            </section>

            <section id="contact" className="scroll-mt-14">
              <Contact />
            </section>
          </main>

          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
