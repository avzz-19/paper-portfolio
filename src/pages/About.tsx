import CircularGallery from "@/components/circular-gallery";
import { Award, Users, Coffee, Heart } from "lucide-react";

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
    <div className="pt-24 pb-20">
      {/* Education */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="heading-large text-center mb-12">Education</h2>
        {education.map((ed) => (
          <div key={ed.school} className="surface-card p-6">
            <div className="md:flex items-start gap-9">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-1">
                      {ed.school}
                    </h3>
                    <p className="text-portfolio-accent font-inter text-sm tracking-wider uppercase">
                      {ed.location}
                    </p>
                  </div>
                  <div className="bg-portfolio-accent/10 text-portfolio-accent px-4 py-2 rounded-full text-sm font-inter font-medium mt-2 md:mt-0 inline-block">
                    {ed.date}
                  </div>
                </div>
                <p className="body-medium mb-1">{ed.degree}</p>
                <p className="text-portfolio-text-muted mb-2">GPA: {ed.gpa}</p>
                <p className="text-portfolio-text-muted">
                  Relevant Coursework: {ed.coursework}
                </p>
              </div>
              <div className="mt-6 md:mt-0 w-full md:w-48 flex-shrink-0">
                <img
                  src="/images/Graduation.jpeg"
                  alt="Graduation"
                  className="w-full h-auto rounded-lg border border-white/10"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="heading-large text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="surface-card p-6">
            <h3 className="headline-small mb-4">Programming Languages</h3>
            <ul className="list-disc pl-5 space-y-1 text-portfolio-text-muted">
              {skills.languages.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <h3 className="headline-small mb-4">Frontend Development</h3>
            <ul className="list-disc pl-5 space-y-1 text-portfolio-text-muted">
              {skills.frontend.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <h3 className="headline-small mb-4">Familiar</h3>
            <ul className="list-disc pl-5 space-y-1 text-portfolio-text-muted">
              {skills.familiar.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Volunteering */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="heading-large text-center mb-12">Volunteering</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteering.map((v) => (
            <div key={v.org} className="surface-card p-6">
              <h3 className="font-playfair text-lg font-semibold mb-1">
                {v.org}
              </h3>
              <p className="text-portfolio-accent font-inter text-sm tracking-wider uppercase mb-2">
                {v.role}
              </p>
              <p className="text-portfolio-text-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="heading-large text-center mb-12">Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Photography */}
          <div className="surface-card rounded-2xl">
            <div className="relative p-4">
              <img
                src="/images/Camera.jpeg"
                alt="Photography"
                className="w-full h-auto object-contain max-h-72 md:max-h-80 mx-auto"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <h3 className="font-playfair text-lg font-semibold">
                Photography
              </h3>
              <span className="text-xs font-inter tracking-wider uppercase text-portfolio-text-muted">
                Creative Lens
              </span>
            </div>
          </div>

          {/* Swimming */}
          <div className="surface-card rounded-2xl">
            <div className="relative p-4">
              <img
                src="/images/swimming.jpeg"
                alt="Swimming"
                className="w-full h-auto object-contain max-h-72 md:max-h-80 mx-auto"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <h3 className="font-playfair text-lg font-semibold">Swimming</h3>
              <span className="text-xs font-inter tracking-wider uppercase text-portfolio-text-muted">
                Active Lifestyle
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="heading-large text-center">Certifications & Awards</h2>

        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </section>

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
  );
};

export default About;
