export default function Footer() {
  return (
    <footer className="mt-0">
      <hr className="owl-rule-accent" />
      <hr className="owl-rule-thick" />

      {/* Main footer body */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        {/* Masthead */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <img
              src="/images/hogwarts.png"
              alt="Hogwarts crest"
              className="h-10 w-10 object-contain opacity-80"
            />
            <span className="font-fraktur text-3xl md:text-4xl leading-none text-paper-text">
              The Daily Prophet
            </span>
          </div>
          <p className="font-playfair text-[0.6rem] tracking-[0.3em] uppercase text-paper-text-muted">
            Bengaluru Edition · Est. 2022 · All the News That's Fit to Ship
          </p>
        </div>

        {/* Colophon */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-paper-text-muted">
          <p className="font-playfair text-[0.6rem] tracking-[0.15em] uppercase">
            © {new Date().getFullYear()} Avi Shah. All Rights Reserved.
          </p>
          <p className="font-playfair text-[0.6rem] tracking-[0.15em] uppercase">
            Vol. III, No. 47 · Printed in Bengaluru, India
          </p>
        </div>
      </div>

      <hr className="owl-rule-thick" />
    </footer>
  );
}
