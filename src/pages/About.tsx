import CertificateBoard from "@/components/CertificateBoard";
import { Award, Users, Coffee, Heart } from "lucide-react";

const SectionHeading = ({ title, sub }: { title: string; sub?: string }) => (
  <div className="mb-12 text-center">
    <hr className="owl-rule-accent mb-0" />
    <hr className="owl-rule-thick mb-0" />
    <div className="flex items-center justify-center gap-4 py-3 bg-paper-text px-6">
      <span className="text-paper-accent text-sm">✦</span>
      <h2 className="font-playfair text-xl md:text-2xl font-black tracking-[0.25em] uppercase text-paper-surface">
        {title}
      </h2>
      <span className="text-paper-accent text-sm">✦</span>
    </div>
    {sub && (
      <p className="font-playfair text-[0.6rem] tracking-[0.3em] uppercase text-paper-text-muted mt-2">
        {sub}
      </p>
    )}
    <hr className="owl-rule mt-2" />
  </div>
);

const About = () => {
  const education = [
    {
      school: "REVA UNIVERSITY",
      location: "Bengaluru, IN",
      degree: "Bachelor of Technology – Computer Science",
      date: "Oct 2023",
      gpa: "9.2/10",
      coursework:
        "Software Engineering, Operating Systems, Algorithms, Machine Learning, AI",
    },
  ];

  const skills = {
    languages: ["TypeScript", "JavaScript", "Java"],
    frontend: ["Ember.js", "React", "Next.js", "React Native", "HTML", "CSS"],
    familiar: ["AWS", "Azure", "Docker", "Linux", "Git", "Firebase"],
  };

  const volunteering = [
    {
      org: "REVA HACK 2023",
      role: "Sponsorship Team",
      desc: "Managed sponsor relationships, coordinated deliverables, and optimised sponsorship strategies.",
    },
    {
      org: "Environmentalist Foundation of India (E.F.I)",
      role: "Volunteer",
      desc: "Participated in the Lake Cleanup drive on World Environment Day 2019.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Education */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <SectionHeading
          title="Education"
          sub="Academic Record · Bengaluru, IN"
        />
        {education.map((ed) => (
          <div key={ed.school} className="surface-card p-6">
            <div className="md:flex items-start gap-9">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-1">
                      {ed.school}
                    </h3>
                    <p className="text-paper-accent font-inter text-sm tracking-wider uppercase">
                      {ed.location}
                    </p>
                  </div>
                  <div className="bg-portfolio-accent/10 text-paper-accent px-4 py-2 rounded-full text-sm font-inter font-medium mt-2 md:mt-0 inline-block">
                    {ed.date}
                  </div>
                </div>
                <p className="body-medium mb-1">{ed.degree}</p>
                <p className="text-paper-text-muted mb-2">GPA: {ed.gpa}</p>
                <p className="text-paper-text-muted">
                  Relevant Coursework: {ed.coursework}
                </p>
              </div>
              <div className="mt-6 md:mt-0 w-full md:w-48 flex-shrink-0 prophet-photo-wrap overflow-hidden border border-paper-border">
                <img
                  src="/images/graduation.gif"
                  alt="Graduation"
                  className="prophet-photo w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <SectionHeading
          title="Enchantments & Skills"
          sub="Proficiencies Catalogue · Vol. III"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="surface-card p-6">
            <h3 className="headline-small mb-4">Programming Languages</h3>
            <ul className="list-disc pl-5 space-y-1 text-paper-text-muted">
              {skills.languages.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <h3 className="headline-small mb-4">Frontend Development</h3>
            <ul className="list-disc pl-5 space-y-1 text-paper-text-muted">
              {skills.frontend.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <h3 className="headline-small mb-4">Familiar</h3>
            <ul className="list-disc pl-5 space-y-1 text-paper-text-muted">
              {skills.familiar.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Volunteering */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <SectionHeading
          title="Community Service"
          sub="Society Pages · Good Works Reported"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteering.map((v) => (
            <div key={v.org} className="surface-card p-6">
              <h3 className="font-playfair text-lg font-semibold mb-1">
                {v.org}
              </h3>
              <p className="text-paper-accent font-inter text-sm tracking-wider uppercase mb-2">
                {v.role}
              </p>
              <p className="text-paper-text-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <SectionHeading
          title="Personal Pursuits"
          sub="Leisure & Recreation · Observed by Our Correspondent"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Photography */}
          <div className="surface-card overflow-hidden prophet-photo-wrap">
            <div className="relative overflow-hidden border-b border-paper-border">
              <img
                src="/images/camera.gif"
                alt="Photography"
                className="prophet-photo w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <h3 className="font-playfair text-lg font-semibold text-paper-text">
                Photography
              </h3>
              <span className="font-playfair text-[0.6rem] tracking-[0.2em] uppercase text-paper-text-muted">
                Creative Lens
              </span>
            </div>
          </div>

          {/* Swimming */}
          <div className="surface-card overflow-hidden prophet-photo-wrap">
            <div className="relative overflow-hidden border-b border-paper-border">
              <img
                src="/images/swimming.gif"
                alt="Swimming"
                className="prophet-photo w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <h3 className="font-playfair text-lg font-semibold text-paper-text">
                Swimming
              </h3>
              <span className="font-playfair text-[0.6rem] tracking-[0.2em] uppercase text-paper-text-muted">
                Active Lifestyle
              </span>
            </div>
          </div>

          {/* Gaming */}
          <div className="surface-card overflow-hidden prophet-photo-wrap">
            <div className="relative overflow-hidden border-b border-paper-border">
              <img
                src="/images/gaming.gif"
                alt="Gaming"
                className="prophet-photo w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <h3 className="font-playfair text-lg font-semibold text-paper-text">
                Gaming
              </h3>
              <span className="font-playfair text-[0.6rem] tracking-[0.2em] uppercase text-paper-text-muted">
                Recreation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <SectionHeading
          title="Certifications & Awards"
          sub="Official Commendations · Ministry Verified"
        />

        <CertificateBoard />
      </section>
    </div>
  );
};

export default About;
