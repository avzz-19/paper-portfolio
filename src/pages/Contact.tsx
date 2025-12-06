import { useState } from "react";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/avi-shah2001" },
    { name: "LinkedIn", url: "https://linkedin.com/in/avi-shah2001" },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center">
          <h1 className="heading-display mb-8 animate-fade-in">
            Let's Create Together
          </h1>
          <p
            className="body-large max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Ready to bring your vision to life? I'm always excited to
            collaborate on innovative projects that push creative boundaries and
            deliver exceptional results.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="heading-medium mb-8">Start a Project</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-inter font-medium tracking-wider uppercase text-portfolio-text-muted mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-portfolio-surface border border-white/10 rounded-lg text-portfolio-text placeholder-portfolio-text-muted focus:outline-none focus:border-portfolio-accent transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-inter font-medium tracking-wider uppercase text-portfolio-text-muted mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-portfolio-surface border border-white/10 rounded-lg text-portfolio-text placeholder-portfolio-text-muted focus:outline-none focus:border-portfolio-accent transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-inter font-medium tracking-wider uppercase text-portfolio-text-muted mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-portfolio-surface border border-white/10 rounded-lg text-portfolio-text placeholder-portfolio-text-muted focus:outline-none focus:border-portfolio-accent transition-colors duration-300"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-inter font-medium tracking-wider uppercase text-portfolio-text-muted mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-portfolio-surface border border-white/10 rounded-lg text-portfolio-text focus:outline-none focus:border-portfolio-accent transition-colors duration-300"
                  >
                    <option value="">Select budget</option>
                    <option value="5k-10k">€5k - €10k</option>
                    <option value="10k-25k">€10k - €25k</option>
                    <option value="25k-50k">€25k - €50k</option>
                    <option value="50k+">€50k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-inter font-medium tracking-wider uppercase text-portfolio-text-muted mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-portfolio-surface border border-white/10 rounded-lg text-portfolio-text placeholder-portfolio-text-muted focus:outline-none focus:border-portfolio-accent transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center bg-portfolio-accent hover:bg-portfolio-accent-secondary text-portfolio px-8 py-4 rounded-lg font-inter font-medium tracking-wider uppercase transition-all duration-300 hover-glow group"
              >
                Send Message
                <Send
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  size={16}
                />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="heading-medium mb-8">Get in Touch</h2>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-portfolio-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-portfolio-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-inter font-medium mb-1">Email</h3>
                  <a
                    href="mailto:avishah1904@gmail.com"
                    className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300"
                  >
                    avishah1904@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-portfolio-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-portfolio-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-inter font-medium mb-1">Phone</h3>
                  <a
                    href="tel:+918792802773"
                    className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300"
                  >
                    +91 8792802773
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-portfolio-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-portfolio-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-inter font-medium mb-1">Location</h3>
                  <p className="text-portfolio-text-muted">Bengaluru, IN</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="surface-card p-6 mb-8">
              <h3 className="font-playfair text-xl font-semibold mb-4">
                Current Availability
              </h3>
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
                <span className="text-portfolio-text">
                  Available for new projects
                </span>
              </div>
              <p className="text-portfolio-text-muted text-sm">
                Currently working at Appknox.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-inter text-sm font-medium tracking-wider uppercase text-portfolio-text-muted mb-4">
                Follow My Work
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-portfolio-surface border border-white/10 rounded-lg text-sm font-inter tracking-wider uppercase text-portfolio-text-muted hover:text-portfolio-accent hover:border-portfolio-accent transition-all duration-300 group"
                  >
                    {link.name}
                    <ExternalLink
                      className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      size={12}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center mt-32">
        <div className="surface-card p-12 animate-fade-in">
          <h2 className="heading-medium mb-4">
            Ready to Make Something Amazing?
          </h2>
          <p className="body-medium mb-8 max-w-2xl mx-auto">
            Whether you need a complete brand overhaul, an interactive website,
            or innovative digital experiences, I'm here to help bring your
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center bg-portfolio-accent hover:bg-portfolio-accent-secondary text-portfolio px-8 py-4 rounded-lg font-inter font-medium tracking-wider uppercase transition-all duration-300 hover-glow">
              Schedule a Call
            </button>
            <button className="inline-flex items-center bg-transparent border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio px-8 py-4 rounded-lg font-inter font-medium tracking-wider uppercase transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
