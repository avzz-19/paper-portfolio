const experience = [
  {
    company: "APPKNOX",
    location: "Bengaluru, India",
    title: "Software Development Engineer – II",
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
    ],
    bullets: [
      "Developed, tested, and deployed 6+ product features using Ember.js and TypeScript, directly improving platform performance and usability.",
      "Reduced frontend issues by 60% by introducing robust unit and integration testing using Ember Testing Library and Cypress.",
      "Built 5+ global components based on a standardised design system, using Storybook for documentation.",
      "Worked on critical features like Store Monitoring and SBOM, contributing to a 2% increase in company revenue.",
      "Led end-to-end Slack and Splunk integration, enabling real-time notifications and log tracking for 30+ clients.",
      "Automated test suites using GitHub Actions to streamline CI/CD workflows.",
      "Authored technical articles to boost company visibility and industry presence.",
      "Regularly conducted code reviews, documented tasks in JIRA, and participated in sprint planning sessions.",
    ],
  },
  {
    company: "APPKNOX",
    location: "Bengaluru, India",
    title: "Jr. Frontend Developer Associate",
    period: "June 2023 – June 2025",
    tags: ["SCSS", "Cypress", "QUnit", "TypeScript"],
    bullets: [
      "Built reusable components, implemented new features, and revamped pages to align with updated designs, utilising SCSS for consistent styling.",
      "Wrote integration and unit test cases using Cypress and Ember's QUnit framework to ensure software reliability.",
      "Acquired practical experience writing TypeScript to enhance project quality and maintainability.",
      "Created GitHub Action workflows to automate CI/CD processes, streamlining testing and deployment.",
    ],
  },
  {
    company: "INCRESCO TECHNOLOGIES",
    location: "Bengaluru, India",
    title: "Software Development Engineer Intern",
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
      "Gained hands-on experience with React, React Native, Next.js, and various web and app development tools.",
      "Built projects from scratch, created components, resolved bugs, and managed release processes on App Store and Play Store.",
      "Implemented CI/CD processes on AWS and Azure to facilitate smooth development and deployment cycles.",
    ],
  },
];

const TagRow = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2 pt-4 border-t border-paper-border mt-4">
    <span className="font-playfair text-[0.6rem] tracking-[0.2em] uppercase text-paper-text-muted self-center">
      Keywords:
    </span>
    {tags.map((tag) => (
      <span
        key={tag}
        className="font-playfair text-[0.6rem] tracking-[0.15em] uppercase text-paper-text border border-paper-border px-2 py-0.5"
      >
        {tag}
      </span>
    ))}
  </div>
);

const Work = () => {
  const [lead, ...supporting] = experience;

  return (
    <div className="pt-16 pb-20">
      {/* ── Page Header ── */}
      <section className="max-w-5xl mx-auto px-6 mb-12 animate-fade-in">
        <hr className="owl-rule-accent mb-0" />
        <hr className="owl-rule-thick mb-0" />
        <div className="flex items-center justify-center gap-4 py-3 bg-paper-text px-6">
          <span className="text-paper-accent text-sm">✦</span>
          <h1 className="font-playfair text-xl md:text-2xl font-black tracking-[0.25em] uppercase text-paper-surface">
            Career Chronicle
          </h1>
          <span className="text-paper-accent text-sm">✦</span>
        </div>
        <div className="flex items-center justify-between px-1 mt-2">
          <span className="font-playfair text-[0.6rem] tracking-[0.2em] uppercase text-paper-text-muted">
            Vol. III, No. 47
          </span>
          <span className="font-playfair text-[0.6rem] tracking-[0.2em] uppercase text-paper-text-muted">
            Selected Roles &amp; Responsibilities · Bengaluru Edition
          </span>
          <span className="font-playfair text-[0.6rem] tracking-[0.2em] uppercase text-paper-text-muted">
            Est. 2022
          </span>
        </div>
        <hr className="owl-rule mt-2" />
      </section>

      <div className="max-w-5xl mx-auto px-6 space-y-0">
        {/* ── Lead Story ── */}
        <article className="animate-fade-in border border-paper-border p-6 md:p-8 mb-0">
          {/* Article header */}
          <div className="mb-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-paper-accent text-white font-playfair text-[0.6rem] font-bold tracking-[0.2em] uppercase px-3 py-1">
                ✦ Lead Story
              </span>
              <span className="font-playfair text-[0.6rem] tracking-[0.2em] uppercase text-paper-text-muted">
                {lead.period}
              </span>
            </div>

            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tight uppercase text-paper-text mb-3">
              {lead.title}
            </h2>

            <hr className="owl-rule mb-3" />

            {/* Dateline */}
            <p className="font-playfair text-[0.65rem] tracking-[0.2em] uppercase text-paper-text-muted">
              {lead.company} · {lead.location}
            </p>
          </div>

          {/* Two-column bullets — newspaper column layout */}
          <ul className="columns-1 md:columns-2 gap-x-8 space-y-0 list-none mb-0">
            {lead.bullets.map((b, i) => (
              <li
                key={i}
                className="break-inside-avoid flex gap-2 leading-relaxed font-gideon text-sm text-paper-text-muted mb-3"
              >
                <span className="text-paper-text flex-shrink-0 mt-0.5">✦</span>
                <span className="text-justify">{b}</span>
              </li>
            ))}
          </ul>

          <TagRow tags={lead.tags} />
        </article>

        {/* ── Rule between lead and supporting ── */}
        <div className="flex items-center gap-4 py-4">
          <hr className="flex-1 owl-rule-thick" />
          <span className="font-playfair text-[0.6rem] tracking-[0.25em] uppercase text-paper-text-muted whitespace-nowrap">
            Earlier Positions
          </span>
          <hr className="flex-1 owl-rule-thick" />
        </div>

        {/* ── Supporting stories — 2-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-paper-border">
          {supporting.map((exp, i) => (
            <article
              key={exp.title}
              className={`p-6 animate-fade-in ${
                i === 0
                  ? "border-b md:border-b-0 md:border-r border-paper-border"
                  : ""
              }`}
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              {/* Article header */}
              <div className="mb-4">
                <span className="font-playfair text-[0.6rem] tracking-[0.2em] uppercase text-paper-text-muted">
                  {exp.period}
                </span>
                <h3 className="font-playfair text-lg md:text-xl font-black leading-tight tracking-tight uppercase text-paper-text mt-1 mb-2">
                  {exp.title}
                </h3>
                <hr className="owl-rule mb-2" />
                <p className="font-playfair text-[0.6rem] tracking-[0.2em] uppercase text-paper-text-muted">
                  {exp.company} · {exp.location}
                </p>
              </div>

              <ul className="space-y-2 list-none">
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-2 leading-relaxed font-gideon text-sm text-paper-text-muted"
                  >
                    <span className="text-paper-text flex-shrink-0 mt-0.5 text-xs">
                      ✦
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <TagRow tags={exp.tags} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
