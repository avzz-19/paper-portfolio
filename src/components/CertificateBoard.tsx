import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const certs = [
  { image: "/images/certificates/appknox.png",     label: "Appknox Certified",       issuer: "Appknox" },
  { image: "/images/certificates/codedamn.png",    label: "Full-Stack Development",   issuer: "Codedamn" },
  { image: "/images/certificates/Hack-o-Heist.png",label: "Hack-o-Heist",             issuer: "Hackathon" },
  { image: "/images/certificates/ibm.png",          label: "IBM Certificate I",        issuer: "IBM" },
  { image: "/images/certificates/ibm2.png",         label: "IBM Certificate II",       issuer: "IBM" },
  { image: "/images/certificates/microsoft.png",    label: "Microsoft Certified",      issuer: "Microsoft" },
  { image: "/images/certificates/microsoft2.png",   label: "Microsoft Learn",          issuer: "Microsoft" },
  { image: "/images/certificates/nptel.png",        label: "NPTEL Certificate",        issuer: "NPTEL" },
  { image: "/images/certificates/phase-shift.png",  label: "Phase Shift",              issuer: "Hackathon" },
  { image: "/images/certificates/RevaHack.png",     label: "Reva Hack 2023",           issuer: "REVA University" },
  { image: "/images/certificates/udemy.png",        label: "HTML & CSS Mastery",       issuer: "Udemy" },
  { image: "/images/certificates/Udemy2.png",       label: "Web Development Bootcamp", issuer: "Udemy" },
];

// Render list twice for seamless infinite loop
const doubled = [...certs, ...certs];

const SPROCKET_COUNT = 40;
const SCROLL_SPEED = 0.6; // px per frame

export default function CertificateBoard() {
  const [active, setActive] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  // Close lightbox on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  // Auto-scroll loop
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const tick = () => {
      if (!pausedRef.current && !isDragging.current) {
        el.scrollLeft += SCROLL_SPEED;
        // When we've scrolled through the first copy, jump back silently
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Drag-to-scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onDown = (e: MouseEvent) => {
      isDragging.current = true;
      dragStartX.current = e.pageX - el.offsetLeft;
      dragScrollLeft.current = el.scrollLeft;
      el.style.cursor = "grabbing";
    };
    const onUp = () => {
      isDragging.current = false;
      el.style.cursor = "grab";
    };
    const onMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = dragScrollLeft.current - (x - dragStartX.current);
    };

    el.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      el.removeEventListener("mousemove", onMove);
    };
  }, []);

  const SprocketRow = () => (
    <div className="cert-sprocket">
      {Array.from({ length: SPROCKET_COUNT }).map((_, i) => (
        <div key={i} className="cert-sprocket-hole" />
      ))}
    </div>
  );

  return (
    <>
      {/* ── Filmstrip ── */}
      <div
        className="cert-filmstrip-wrap"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <SprocketRow />

        {/* Track — list rendered twice for seamless loop */}
        <div className="cert-filmstrip-track" ref={trackRef}>
          {doubled.map((cert, i) => {
            const certIndex = i % certs.length;
            return (
              <button
                key={`${cert.image}-${i}`}
                className="cert-frame"
                onClick={() => setActive(certIndex)}
                aria-label={`View certificate: ${cert.label}`}
              >
                <div className="cert-frame-img-wrap">
                  <img
                    src={cert.image}
                    alt={cert.label}
                    className="cert-frame-img"
                    loading="lazy"
                  />
                </div>
                <div className="cert-frame-number">
                  {String(certIndex + 1).padStart(2, "0")} ▸
                </div>
                <div className="cert-frame-caption">
                  <span className="cert-caption-title">{cert.label}</span>
                  <span className="cert-caption-issuer">— {cert.issuer}</span>
                </div>
              </button>
            );
          })}
        </div>

        <SprocketRow />
      </div>

      {/* ── Lightbox ── */}
      {active !== null && (
        <div
          className="cert-lightbox-overlay"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={certs[active].label}
        >
          <div
            className="cert-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cert-lightbox-close"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <img
              src={certs[active].image}
              alt={certs[active].label}
              className="cert-lightbox-img"
            />

            <div className="cert-lightbox-caption">
              <span className="cert-caption-title">{certs[active].label}</span>
              <span className="cert-caption-issuer">— {certs[active].issuer}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
