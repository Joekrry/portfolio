import { useState, useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const [isSoftwareOpen, setIsSoftwareOpen] = useState(false);
  const [isLawOpen, setIsLawOpen] = useState(false);
  const aboutRef = useRef(null);
  const hasInteractedRef = useRef(false);

  const softwareModules = [
    { name: "Advanced Software Development", grade: "" },
    { name: "Software Design and Development", grade: "" },
    { name: "Software Project Management", grade: "" },
    { name: "Research Methods", grade: "" },
    { name: "System Analysis and Design", grade: "" },
    { name: "Mobile Systems", grade: "" },
  ];

  const lawModules = [
    { name: "Land Law", grade: "" },
    { name: "Applied Legal Knowledge", grade: "" },
    { name: "Investment and Portfolio Management", grade: "" },
    { name: "Law of Trust", grade: "" },
    { name: "Corporate Governance & Risk Management", grade: "" },
    { name: "International Law", grade: "" },
    { name: "Criminal Law and Criminology", grade: "" },
    { name: "Tort Law", grade: "" },
    { name: "Civil Practice & Procedure", grade: "" },
    { name: "Financial Markets & Institutions", grade: "" },
    { name: "Contract Law", grade: "" },
    { name: "Business Analytics", grade: "" },
  ];

  const techStack = [
    { label: "Languages", items: ["Python", "C", "Java"] },
    {
      label: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    },
    { label: "Backend", items: ["Node.js", "REST APIs"] },
    { label: "Databases", items: ["SQL", "SQLite", "PostgreSQL"] },
    {
      label: "DevOps & Tools",
      items: ["Docker", "Git", "GitHub", "Linux", "Postman"],
    },
    {
      label: "Machine Learning / AI",
      items: ["PyTorch", "NumPy", "MNE-Python", "pytest"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (hasInteractedRef.current) return;
          if (entry.isIntersecting) {
            const isMobile = window.matchMedia("(max-width: 768px)").matches;
            if (!isMobile) {
              setIsSoftwareOpen(true);
            }
          } else {
            setIsSoftwareOpen(false);
            setIsLawOpen(false);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-story">
            <h3 className="about-card-title">Background</h3>
            <p className="about-intro">
              I'm a prolific gamer, I also do indoor bouldering, play both the
              acoustic and electric guitar and I love travelling with my
              girlfriend. I'm a huge fan of learning and I love a challenge that
              make me feel like I have no idea what I'm doing!
            </p>
            <p className="about-text">
              I did my Bachelors degree in Law with Business, I realised around
              the middle of my second year that I didn't want to pursue a career
              in law. I started learning to code and learning theoretical and
              practical knowledge to transition into a computing based career
              and therefore followed various roadmaps and courses to build a
              strong fundamental understanding of theoretical computer science
              and syntactical coding knowledge.
            </p>
            <p className="about-text">
              In September 2025, I enrolled in MSc Software Engineering to gain
              formal qualifications and a structured learning environment to not
              only learn more advanced practical coding, but also system
              architecture, design, planning and analysis. Below are the modules
              I am undertaking as part of this degree, alongside the modules
              from my undergraduate degree.
            </p>

            <p className="about-text">
              As of september 2026, I have completed my MSc degree, I will be
              consolidating my skills with respect to my desired field while I
              search for a job.
            </p>
          </div>

          <div className="education-modules">
            <h3 className="about-card-title">Education</h3>
            <div className="dropdown-container">
              <button
                className={`dropdown-toggle ${isSoftwareOpen ? "active" : ""}`}
                onClick={() => {
                  hasInteractedRef.current = true;
                  setIsSoftwareOpen(!isSoftwareOpen);
                }}
              >
                <span>MSc Software Engineering Modules</span>
                <svg
                  className={`chevron ${isSoftwareOpen ? "rotated" : ""}`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </button>
              <div
                className={`dropdown-content ${isSoftwareOpen ? "open" : ""}`}
              >
                <div className="module-tags">
                  {softwareModules.map((module) => (
                    <span
                      key={module.name}
                      className={`module-tag ${module.grade || ""}`}
                    >
                      {module.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="dropdown-container">
              <button
                className={`dropdown-toggle ${isLawOpen ? "active" : ""}`}
                onClick={() => {
                  hasInteractedRef.current = true;
                  setIsLawOpen(!isLawOpen);
                }}
              >
                <span>LLB Hons Law with Business Modules</span>
                <svg
                  className={`chevron ${isLawOpen ? "rotated" : ""}`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </button>
              <div className={`dropdown-content ${isLawOpen ? "open" : ""}`}>
                <div className="module-tags">
                  {lawModules.map((module) => (
                    <span
                      key={module.name}
                      className={`module-tag ${module.grade || ""}`}
                    >
                      {module.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="tech-stack">
            <h3 className="about-card-title">Tech Stack</h3>
            <div className="tech-stack-categories">
              {techStack.map((category) => (
                <div className="tech-stack-category" key={category.label}>
                  <span className="tech-stack-label">{category.label}</span>
                  <div className="tech-stack-items">
                    {category.items.map((item) => (
                      <span className="tech-stack-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
