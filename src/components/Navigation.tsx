import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-paper-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Location */}
            <div />

            {/* Paper Portfolio Title */}
            <NavLink to="/" className="newspaper-title hover-lift">
              My Paper Portfolio
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 flex flex-col justify-center items-center group"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-paper-text transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-paper-text mt-1 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-paper-text mt-1 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-paper/98 backdrop-blur-md transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-8">
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `headline-small transition-all duration-300 hover:text-paper-accent animate-fade-in ${
                  isActive ? "text-paper-accent" : "text-paper-text"
                }`
              }
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
