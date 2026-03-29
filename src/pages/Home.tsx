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
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto w-full animate-fade-in">

          {/* ── Masthead ── */}
          <div className="text-center mb-4">
            <hr className="owl-rule-thick mb-3" />
            <h1 className="font-fraktur text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none text-paper-text">
              The Daily Prophet
            </h1>
            <hr className="owl-rule my-3" />
            <div className="flex items-center justify-between text-paper-text-muted font-playfair text-[0.6rem] tracking-[0.2em] uppercase px-1">
              <span>Vol. III, No. 47</span>
              <span>Bengaluru Edition · Est. 2022</span>
              <span>Price: Your Attention</span>
            </div>
            <hr className="owl-rule-thick mt-3" />
          </div>

          {/* ── Breaking ticker ── */}
          <div className="flex items-stretch overflow-hidden border-y-2 border-paper-text mb-8">
            <span className="bg-paper-accent text-white font-playfair text-[0.6rem] font-bold tracking-[0.2em] uppercase px-3 py-2 whitespace-nowrap flex-shrink-0">
              ✦ Breaking
            </span>
            <div className="overflow-hidden flex-1">
              <p className="font-playfair text-[0.65rem] tracking-[0.18em] uppercase text-paper-text py-2 px-4 whitespace-nowrap animate-ticker">
                Local engineer crafts exceptional digital
                products&emsp;·&emsp;Available for new
                projects&emsp;·&emsp;Specialising in React, Ember.js &amp; Full
                Stack systems&emsp;·&emsp;Bengaluru, India&emsp;·&emsp;
                Local engineer crafts exceptional digital
                products&emsp;·&emsp;Available for new
                projects&emsp;·&emsp;Specialising in React, Ember.js &amp; Full
                Stack systems&emsp;·&emsp;Bengaluru, India&emsp;·&emsp;
              </p>
            </div>
          </div>

          {/* ── Centered headline ── */}
          <div className="text-center mb-2">
            <h2 className="font-playfair text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] font-black leading-none tracking-tight uppercase text-paper-text">
              Avi Shah
            </h2>
          </div>

          {/* ── Rotating deck ── */}
          <div className="flex items-center gap-4 mb-8">
            <hr className="flex-1 owl-rule-thick" />
            <div className="h-8 flex items-center px-2 flex-shrink-0">
              <p
                key={currentIndex}
                className="font-playfair text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-paper-text animate-slide-up whitespace-nowrap"
              >
                {titles[currentIndex]}
              </p>
            </div>
            <hr className="flex-1 owl-rule-thick" />
          </div>

          {/* ── Two-column body: left = editorial, right = photo ── */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Left — editorial */}
            <div className="flex flex-col gap-5 flex-1 min-w-0">
              <p className="font-gideon text-base leading-relaxed text-paper-text-muted text-justify">
                <span className="float-left font-playfair text-6xl font-black leading-none mr-2 mt-1 text-paper-text">A</span>
                vi Shah is a software engineer practising her craft out of
                Bengaluru, India — building interfaces that are as thoughtfully
                constructed as they are technically sound. With a focus on
                React, Ember.js, and full-stack development, she brings
                precision to every pixel and every function.
              </p>

              <p className="font-gideon text-base leading-relaxed text-paper-text-muted text-justify">
                Her work spans frontend engineering, mobile applications, and
                full-stack systems — always with an eye toward performance,
                accessibility, and the kind of detail that separates good from
                exceptional.
              </p>

              <div className="flex items-center gap-3">
                <hr className="flex-1 owl-rule" />
                <span className="font-playfair text-[0.6rem] tracking-widest uppercase text-paper-text-muted whitespace-nowrap">
                  Areas of Practice
                </span>
                <hr className="flex-1 owl-rule" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Frontend Development",  detail: "React · Ember.js · Next.js" },
                  { label: "Mobile Engineering",    detail: "React Native · iOS · Android" },
                  { label: "Full Stack",            detail: "Node.js · REST · Firebase" },
                  { label: "UI/UX Implementation", detail: "Figma · Accessibility · Motion" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border border-paper-border p-3 hover:border-paper-text transition-colors duration-200"
                  >
                    <p className="font-playfair text-xs font-bold tracking-[0.15em] uppercase text-paper-text mb-1">
                      {item.label}
                    </p>
                    <p className="font-gideon text-xs text-paper-text-muted">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-5 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse" />
                  <span className="font-playfair text-[0.6rem] tracking-[0.25em] uppercase text-paper-text-muted">
                    Available for Projects
                  </span>
                </div>
                <span className="text-paper-border hidden sm:inline">·</span>
                <span className="font-playfair text-[0.6rem] tracking-[0.25em] uppercase text-paper-text-muted">
                  Bengaluru, IN
                </span>
              </div>
            </div>

            {/* Vertical rule — desktop only */}
            <div className="hidden lg:block w-px bg-paper-border self-stretch flex-shrink-0" />

            {/* Right — photograph — desktop only */}
            <div className="hidden lg:flex flex-col gap-3 w-[280px] xl:w-[320px] flex-shrink-0">
              <div className="overflow-hidden" style={{ maxHeight: "480px" }}>
                <Flow
                  src="/images/Tech_Girl.jpeg"
                  className="w-full"
                  style={{ maxHeight: "480px" }}
                />
              </div>
              <p className="font-playfair text-[0.55rem] tracking-[0.1em] uppercase text-paper-text-muted text-center border-t border-paper-border pt-2">
                ◆ Photograph — Avi Shah at work, Bengaluru
              </p>
            </div>

          </div>
        </div>

        {/* ── Scroll cue ── */}
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-1 mx-auto mt-10 text-paper-text-muted hover:text-paper-text transition-colors duration-300 group"
          aria-label="Scroll down"
        >
          <ChevronDown
            size={20}
            className="animate-float group-hover:text-paper-accent transition-colors"
          />
        </button>
      </section>
    </div>
  );
};

export default Home;
