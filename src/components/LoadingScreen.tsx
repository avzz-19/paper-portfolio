import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-portfolio flex flex-col items-center justify-center transition-all duration-800 ${
        isComplete ? "translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Logo */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold gradient-text mb-4">
          Avi Shah
        </h1>
        <p className="font-inter text-sm tracking-wider uppercase text-portfolio-text-muted">
          Software Engineer
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-80 max-w-sm mx-auto mb-8">
        <div className="flex justify-between text-xs font-inter tracking-wider uppercase text-portfolio-text-muted mb-2">
          <span>Loading</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-0.5 bg-portfolio-surface relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-portfolio-accent to-portfolio-accent-secondary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Loading Dots */}
      <div className="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Subtitle */}
      <p className="font-inter text-xs tracking-wider uppercase text-portfolio-text-muted mt-8 animate-fade-in">
        Preparing Experience
      </p>
    </div>
  );
};

export default LoadingScreen;
