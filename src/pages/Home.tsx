import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Flow from "../components/flowmap/Flow";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    "Software Engineer",
    "Frontend Engineer",
    "React/React Native Developer",
    "Full Stack Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-radial from-portfolio-accent/5 via-transparent to-transparent animate-pulse" />

        {/* Main Content */}
        <div className="text-center z-10 px-6">
          <div className="mb-8 animate-fade-in">
            <h1 className="font-Gideon text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-portfolio-text mb-4">
              Avi Shah
            </h1>
            <div className="h-16 md:h-20 flex items-center justify-center">
              <h2
                key={currentIndex}
                className="heading-large gradient-text animate-slide-up"
              >
                {titles[currentIndex]}
              </h2>
            </div>
          </div>

          <div
            className="max-w-3xl mx-auto mb-12 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="body-large text-center leading-relaxed">
              As a Software Engineer, I'm passionate about creating innovative
              and user-friendly software solutions that solve real-world
              problems.
            </p>
          </div>

          {/* Location Badge */}
          <div
            className="inline-flex items-center bg-portfolio-surface-hover border border-white/10 rounded-full px-6 py-3 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-2 h-2 bg-portfolio-accent rounded-full mr-3 animate-pulse" />
            <span className="font-inter text-sm tracking-wider uppercase text-portfolio-text-muted">
              Based in Bengaluru, IN
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300 animate-float"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-portfolio-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-large mb-6">Creative Excellence</h2>
              <p
                className="body-medium mb-8"
                style={{ animationDelay: "0.1s" }}
              >
                Combining artistic vision with technical expertise to deliver
                exceptional digital experiences that captivate and inspire.
              </p>
              <div
                className="flex flex-wrap gap-4"
                style={{ animationDelay: "0.2s" }}
              >
                {[
                  "Frontend Development",
                  "React/React Native",
                  "Full Stack Development",
                  "Mobile App Development",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-portfolio-surface-hover border border-white/10 rounded-full text-sm font-inter tracking-wider uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* Featured Visual */}
            <div className="max-w-6xl mx-auto px-6">
              <div className="surface-card rounded-2xl overflow-hidden animate-fade-in group transition-all duration-300 hover:shadow-hover">
                <Flow
                  src="/images/Tech_Girl.jpeg"
                  className="surface-card rounded-2xl overflow-hidden animate-fade-in"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
