import { useState, useEffect } from "react";

const navItems = [
  { name: "Home",    id: "home"    },
  { name: "Work",    id: "work"    },
  { name: "About",   id: "about"   },
  { name: "Contact", id: "contact" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navigation = () => {
  const [isOpen,     setIsOpen]     = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [activeId,   setActiveId]   = useState("home");

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    const onScroll = () => { if (isOpen) setIsOpen(false); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b border-paper-border transition-all duration-300 ${
          scrolled ? "bg-paper/98 backdrop-blur-sm shadow-sm" : "bg-paper/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">

            {/* Wordmark */}
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
            >
              <img
                src="/images/hogwarts.png"
                alt="Hogwarts crest"
                className="h-8 w-8 object-contain"
              />
              <span className="font-fraktur text-xl md:text-2xl leading-none text-paper-text">
                The Daily Prophet
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`font-playfair text-[0.65rem] font-bold tracking-[0.25em] uppercase transition-colors duration-200 ${
                    activeId === item.id
                      ? "text-paper-accent border-b-2 border-paper-accent pb-0.5"
                      : "text-paper-text-muted hover:text-paper-text"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-paper-text transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-0.5 bg-paper-text mt-1.5 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-paper-text mt-1.5 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-paper/98 backdrop-blur-md transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => { scrollTo(item.id); setIsOpen(false); }}
              className={`headline-small transition-all duration-300 hover:text-paper-accent animate-fade-in ${
                activeId === item.id ? "text-paper-accent" : "text-paper-text"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
