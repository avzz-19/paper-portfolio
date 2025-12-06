// Work Experience Page

const Work = () => {
  const experience = [
    {
      company: "APPKNOX",
      location: "Bengaluru, India",
      title: "Software Development Engineer - II",
      period: "June 2025 – Present",
      tags: [
        "Ember.js",
        "TypeScript",
        "Cypress",
        "Storybook",
        "Slack",
        "Splunk",
        "GitHub Actions",
        "JIRA",
        "SBOM",
        "Store Monitoring",
      ],
      bullets: [
        "Developed, tested, and deployed 6+ product features using Ember.js and TypeScript, directly improving platform performance and usability.",
        "Reduced frontend issues by 60% by introducing robust unit and integration testing using Ember Testing Library and Cypress, increasing codebase reliability. Performed debugging to identify and fix product defects.",
        "Built 5+ global components based on a standardized design system, using Storybook for documentation, and streamlined handoffs between design and engineering.",
        "Worked on critical features like Store Monitoring and SBOM, contributing to a 2% increase in company revenue.",
        "Led end-to-end Slack and Splunk integration, enabling real-time notifications and log tracking for 30+ clients.",
        "Automated test suites using GitHub Actions to streamline CI/CD workflows.",
        "Authored technical articles to boost company visibility and industry presence, helping improve brand credibility.",
        "Regularly conducted code reviews, documented tasks in JIRA, and participated in sprint planning and knowledge-sharing sessions to support team collaboration. Provided technical support to resolve user issues.",
      ],
    },
    {
      company: "APPKNOX",
      location: "Bengaluru, India",
      title: "Jr. Frontend Developer Associate",
      period: "June 2023 — June 2025",
      tags: ["SCSS", "Cypress", "QUnit", "TypeScript", "GitHub Actions"],
      bullets: [
        "Built reusable components, implemented new features, and revamped pages to align with updated designs, utilizing SCSS for consistent and maintainable styling, enhancing product functionality and UX.",
        "Wrote integration and unit test cases using Cypress and Ember's QUnit framework to ensure software reliability and robustness.",
        "Acquired practical experience in writing TypeScript code to enhance project quality and maintainability.",
        "Created GitHub Action workflows to automate CI/CD processes, streamlining testing and deployment workflows.",
      ],
    },
    {
      company: "INCRESCO TECHNOLOGIES",
      location: "Bengaluru, India",
      title: "Software Development Engineer Intern (SDE-1)",
      period: "Aug 2022 – May 2023",
      tags: [
        "React",
        "React Native",
        "Next.js",
        "AWS",
        "Azure",
        "App Store",
        "Play Store",
      ],
      bullets: [
        "Gained hands-on experience working with technologies like React, React Native, Next and various other web and app development tools.",
        "Built projects from scratch, created various components, resolved bugs, and managed the release processes on both App and Play Store.",
        "Implemented CI/CD processes on AWS and Azure to facilitate smooth development and deployment cycles.",
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Newspaper Masthead */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-3 animate-fade-in">
            <span className="px-3 py-1 border border-white/20 rounded-full text-xs font-inter tracking-wider uppercase text-portfolio-text-muted">
              Bengaluru Edition
            </span>
            <span className="px-3 py-1 border border-white/20 rounded-full text-xs font-inter tracking-wider uppercase text-portfolio-text-muted">
              Since 2022
            </span>
          </div>
          <h1
            className="newspaper-title text-4xl md:text-5xl lg:text-6xl mb-2 animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="inline-block bg-black text-[hsl(var(--paper-bg))] px-4 md:px-6 py-2 md:py-3 rounded-md">
              Work Experience
            </span>
          </h1>
          <p
            className="body-medium max-w-3xl mx-auto text-portfolio-text-muted animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Selected roles and responsibilities, typeset in a vintage newspaper
            aesthetic.
          </p>
          <div
            className="mt-6 h-[2px] w-24 mx-auto bg-gradient-to-r from-portfolio-accent/0 via-portfolio-accent to-portfolio-accent/0 animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          />
        </div>
      </section>

      {/* Experience - Full Width Cards */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="space-y-10">
          {experience.map((exp, index) => (
            <div
              key={exp.company + index}
              className="surface-card border border-white/10 rounded-xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Left accent rail layout */}
              <div className="grid grid-cols-[6px_1fr]">
                <div className="bg-portfolio-accent" />
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-playfair text-xl md:text-2xl font-semibold tracking-wide mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-portfolio-accent font-inter text-xs tracking-wider uppercase">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <div className="mt-3 md:mt-0">
                      <span className="px-3 py-1 rounded-full bg-portfolio-accent/10 text-portfolio-accent text-xs font-inter tracking-wider uppercase">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 text-portfolio-text-muted list-none">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="leading-relaxed flex gap-2">
                        <span className="text-portfolio-accent" aria-hidden>
                          ✦
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  {exp.tags && exp.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-portfolio-surface-hover border border-white/10 rounded-full text-xs font-inter tracking-wider uppercase text-portfolio-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;
