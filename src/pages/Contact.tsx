import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Bird,
  ExternalLink,
  CheckCheck,
  Loader2,
} from "lucide-react";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError(null);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          title: `New Owl Post from ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "avishah1904@gmail.com",
        },
        PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSendError(
        "The owl lost its way. Please try again or write directly to avishah1904@gmail.com.",
      );
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/avi-shah2001" },
    { name: "LinkedIn", url: "https://linkedin.com/in/avi-shah2001" },
  ];

  return (
    <div className="pt-16 pb-20">
      {/* ── Masthead ── */}
      <section className="max-w-5xl mx-auto px-6 mb-16 animate-fade-in">
        <hr className="owl-rule-accent mb-0" />
        <hr className="owl-rule-thick mb-3" />
        <div className="text-center py-4">
          <p className="font-playfair text-xs tracking-[0.3em] uppercase text-paper-text-muted mb-3">
            The Daily Prophet · Correspondence Division
          </p>
          <h1 className="headline-large mb-4">Dispatch Your Owl</h1>
          <p
            className="body-large max-w-2xl mx-auto"
            style={{ animationDelay: "0.1s" }}
          >
            Send word by owl post and I shall respond with all haste. Whether
            you seek a collaborator, wish to commission enchantments, or simply
            desire correspondence — your owl is most welcome.
          </p>
        </div>
        <hr className="owl-rule-thick mt-3" />
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            {/* ── Owl Post Form ── */}
            <div
              className="animate-fade-in"
              style={{ animationDelay: "0.15s" }}
            >
              {/* Form section header */}
              <div className="mb-8">
                <p className="owl-post-label mb-1">— Submit Correspondence —</p>
                <h2 className="headline-small">Compose Your Missive</h2>
                <hr className="owl-rule mt-4" />
              </div>

              {submitted ? (
                <div className="owl-dispatched">
                  <div className="owl-dispatched-seal">
                    <CheckCheck size={32} />
                  </div>
                  <div>
                    <p className="font-playfair text-xs tracking-[0.25em] uppercase text-paper-text-muted mb-2">
                      — Official Confirmation —
                    </p>
                    <h3 className="headline-small mb-3">Owl Dispatched</h3>
                    <p className="body-medium max-w-xs mx-auto">
                      Your owl has taken flight. Expect a reply within 2–3
                      working days.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        message: "",
                      });
                    }}
                    className="owl-post-label underline underline-offset-4 cursor-pointer hover:text-paper-accent transition-colors"
                  >
                    Send another missive
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="owl-post-label">
                        Correspondent's Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="owl-post-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="owl-post-label">
                        Owl Return Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="owl-post-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="owl-post-label">
                      Your Missive *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="owl-post-input resize-none"
                      placeholder="Describe your project, its goals, timeline, and any enchantments required..."
                    />
                  </div>

                  {sendError && (
                    <p className="font-gideon text-sm text-red-700 border border-red-300 bg-red-50 px-4 py-3">
                      ✦ {sendError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="dispatch-btn disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  >
                    {sending ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Owl in flight…
                      </>
                    ) : (
                      <>
                        <Bird size={16} />
                        Dispatch Owl
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <section>
              {/* Resume Download */}
              <div
                className="mt-6 animate-fade-in"
                style={{ animationDelay: "0.15s" }}
              >
                <a
                  href="/Avi_Shah_Resume.pdf"
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center bg-portfolio-accent hover:bg-portfolio-accent-secondary text-portfolio px-6 py-3 rounded-lg font-inter font-medium tracking-wider uppercase transition-all duration-300 hover-glow"
                >
                  Download Resume
                </a>
              </div>
            </section>
          </div>

          <div className="space-y-12">
            {/* ── Contact Information ── */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="mb-8">
                <p className="owl-post-label mb-1">
                  — Locate the Correspondent —
                </p>
                <h2 className="headline-small">Find Me in the Directory</h2>
                <hr className="owl-rule mt-4" />
              </div>

              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 border border-paper-border flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-paper-text" />
                  </div>
                  <div>
                    <p className="owl-post-label mb-1">Owl Return Address</p>
                    <a
                      href="mailto:avishah1904@gmail.com"
                      className="font-gideon text-paper-text hover:text-paper-accent transition-colors duration-300"
                    >
                      avishah1904@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 border border-paper-border flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-paper-text" />
                  </div>
                  <div>
                    <p className="owl-post-label mb-1">
                      Floo Network Extension
                    </p>
                    <a
                      href="tel:+918792802773"
                      className="font-gideon text-paper-text hover:text-paper-accent transition-colors duration-300"
                    >
                      +91 8792802773
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 border border-paper-border flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-paper-text" />
                  </div>
                  <div>
                    <p className="owl-post-label mb-1">Known Whereabouts</p>
                    <p className="font-gideon text-paper-text">Bengaluru, IN</p>
                  </div>
                </div>

                <div>
                  <p className="owl-post-label mb-4">— Magical Directory —</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-paper-text text-sm font-playfair tracking-wider uppercase text-paper-text hover:bg-paper-text hover:text-paper-surface transition-all duration-300 group"
                      >
                        {link.name}
                        <ExternalLink
                          className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                          size={11}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <hr className="owl-rule mb-8" />

              {/* Availability */}
              <div className="border border-paper-border p-6 mb-8 relative">
                {/* Corner ornament */}
                <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-paper-text" />
                <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-paper-text" />
                <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-paper-text" />
                <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-paper-text" />

                <p className="owl-post-label mb-3">— Current Status —</p>
                <h3 className="font-playfair text-lg font-semibold mb-3">
                  Accepting Owl Post
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse flex-shrink-0" />
                  <span className="font-gideon text-paper-text text-sm">
                    Available for new projects
                  </span>
                </div>
                <p className="font-gideon text-paper-text-muted text-sm">
                  Currently practising enchantments at Appknox.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
