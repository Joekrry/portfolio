import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Masters Dissertation Thesis",
      source: "Dissertation",
      subtitle:
        "Assessing the Galea Headset on a Benchmark of Deep Learning Architectures and Pre-processing Pipelines for EEG Motor-Imagery Task Classification",
      description:
        "For my dissertation I built a leakage-safe benchmark to test whether three EEG motor-imagery decoders (EEGNet, EEG-Conformer, and my own GRFNet) could hold up on the sparse four-channel montage of the OpenBCI Galea headset. I found that compact models matched or exceeded the transformer at a fraction of the parameters, but cross-hardware transfer to the Galea's dry electrodes fell to chance, which isolated signal quality rather than architecture as the limiting factor.",
      technologies: [
        "Python 3.11+",
        "PyTorch",
        "MNE-Python",
        "EEGNet",
        "EEG-Conformer",
        "GRFNet (novel)",
        "NumPy",
        "SciPy",
        "Scikit-learn",
      ],
      githubUrl: "https://github.com/Joekrry/EEGCHTB-MScThesis",
      featured: true,
    },
    {
      id: 2,
      title:
        "Convolutional Vision Transformer - Temporal Convolutional Network (CvT-TCN) for EEG Motor Imagery Classification",
      source: "open source",
      subtitle:
        "Independent CvT-TCN experiment for EEG motor imagery classification.",
      description:
        "I built a Convolutional Vision Transformer in PyTorch to deepen my understanding of attention-based models on 4-class EEG motor imagery, using the EEGMMIDB dataset. It matched EEGNet's subject-independent accuracy end-to-end, and I visualised the attention maps and filter activations to confirm they aligned with known motor-imagery neurophysiology.",
      technologies: [
        "Python",
        "PyTorch",
        "EEGMMIDB",
        "Matplotlib",
        "Jupyter Notebooks",
      ],
      githubUrl: "https://github.com/Joekrry/CVTTCN",
      featured: true,
    },
    {
      id: 3,
      title: "ParticlePipe",
      source: "open source",
      subtitle:
        "High-energy-physics data pipeline and analysis platform (LHC Run 3 simulation).",
      description:
        "I built ParticlePipe in pure Python (no ROOT or NumPy) to work through the physics and engineering of a collider data pipeline from first principles. A seeded Monte Carlo generator simulates LHC particle collisions and a three-level asynchronous trigger reconstructs them, recovering the Z boson and J/ψ mass peaks at their expected energies through a CLI and a streaming FastAPI service.",
      technologies: [
        "Python 3.11+",
        "FastAPI",
        "Uvicorn",
        "Pydantic",
        "asyncio",
        "aiosqlite",
        "pytest",
      ],
      githubUrl: "https://github.com/Joekrry/particlepipe",
    },
    {
      id: 4,
      title: "CaMLL",
      source: "open source",
      subtitle:
        "Classical Machine Learning / Deep Learning library written in raw C11.",
      description:
        "I started CaMLL to build a strong, code-level understanding of machine learning by implementing it from scratch in raw C11 with zero dependencies. It provides hand-written row-major matrix and vector types over a custom arena allocator, a seeded xorshift PRNG, CSV loading with train/test splits and standardisation, and linear regression via both the closed-form normal equation and gradient descent, with the longer-term aim of serving as a native, low-latency analysis layer for ParticlePipe.",
      technologies: [
        "C11",
        "Arena allocator (mmap)",
        "GCC",
        "Makefile",
        "Static library",
      ],
      githubUrl: "https://github.com/Joekrry/CaMLL",
    },
    {
      id: 6,
      title: "Cloud Load Balancer",
      source: "open source",
      subtitle:
        "Implementation and Validation of a distributred cloud load balancer with encrypted file storage.",
      description:
        "I built a Java distributed-cloud simulator to understand how storage systems encrypt, chunk, and distribute files across Docker containers at scale. A load balancer applies FCFS, Round Robin, and Priority scheduling while an MQTT host manager scales containers on demand, with dual SQLite/MySQL databases for offline resilience and centralised storage, all backed by a Jenkins CI/CD pipeline and a self-hosted Git server.",
      technologies: [
        "Java20+",
        "JavaFX",
        "Apache Maven",
        "Docker",
        "Eclipse Mosquitto (MQTT)",
        "SQLite",
        "MySQL8",
        "Jenkins",
      ],
      githubUrl: "https://github.com/Joekrry/DistributedCloudLoadBalancer",
    },
    {
      id: 5,
      title: "vimline-errors",
      source: "open source",
      subtitle:
        "An open source inline error diagnostic tool for native Vim 9.0+",
      description:
        "I wrote vimline-errors as a self-contained inline diagnostic tool for native Vim 9.0+, running each language's own compiler or interpreter in check-only mode to avoid per-language linters or language servers. It supports Python, C, C++, JavaScript, Bash, Perl, and Lua, and new languages can be added through a config edit rather than code changes.",
      technologies: [
        "Vim Script 9.0+",
        "Compilers",
        "Interpreters",
        "+textprop",
        "ale",
      ],
      githubUrl: "https://github.com/Joekrry/vimline-errors",
    },
  ];

  const miniProjects = [
    {
      title: "minimaFetch",
      technologies: ["Shell", "Arch Linux"],
      githubUrl: "https://github.com/Joekrry/minimaFetch",
    },
    {
      title: "GeometryWars2D",
      technologies: ["C#", "Xna Framework", "Monogame"],
      githubUrl: "https://github.com/Joekrry/Geometry-Wars-2D-Remake-in-Xna",
    },
    {
      title: "TextEditor",
      technologies: ["C#", ".NET 8", "Console Application"],
      githubUrl: "https://github.com/Joekrry/TextEditor",
    },
    {
      title: "MrMandelbrot",
      technologies: ["C", "SDL2"],
      githubUrl: "https://github.com/Joekrry/MrMandelbrot",
    },
    {
      title: "CoverLetterGenerator",
      technologies: ["JavaScript", "React", "GoLang", "OpenAI API", "Postman"],
      githubUrl: "https://github.com/Joekrry/CoverLetterGenerator",
    },
  ];

  // Work out how much room is left in the last row of the 6-column grid so the
  // "Other Projects" card can fill a 1/3 (span 2) or 1/2 (span 3) gap, etc.
  // If the last row is already full, fall back to a full-width card.
  const columnSpan = (project) => {
    if (project.featured) return 3; // half row
    if (project.id > 100) return 6; // full row
    if (project.id < 0) return 4; // two-thirds row
    return 2; // one-third row
  };

  const usedInLastRow = projects.reduce((col, project) => {
    const span = columnSpan(project);
    return (col + span > 6 ? span : col + span) % 6;
  }, 0);

  const leftover = usedInLastRow === 0 ? 6 : 6 - usedInLastRow;
  const fillClass =
    { 2: "", 3: "project-card-half", 4: "project-card-wide" }[leftover] ??
    "project-card-full";

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Projects with details and GitHub repository access.
          </p>
        </div>

        <div className="all-projects-section">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${
                  project.featured
                    ? "project-card-half"
                    : project.id > 100
                      ? "project-card-full"
                      : project.id < 0
                        ? "project-card-wide"
                        : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card header: title + source badge */}
                <div className="card-header">
                  <h3 className="card-title">{project.title}</h3>
                  <span
                    className={`source-badge ${
                      project.source === "Dissertation"
                        ? "dissertation"
                        : project.source === "open source"
                          ? "open"
                          : project.source === "in-development"
                            ? "dev"
                            : "closed"
                    }`}
                  >
                    {project.source}
                  </span>
                </div>

                {/* Card body */}
                <div className="card-body">
                  <p className="card-subtitle">{project.subtitle}</p>
                  <p className="card-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => {
                      // Generate a pastel color for each tech tag
                      let hue = Math.floor(Math.random() * 360) - 20;
                      if (hue < 0) hue += 360;
                      const pastelColor = `hsl(${hue}, 70%, 85%)`;
                      return (
                        <span
                          key={i}
                          className="tech-tag"
                          style={{
                            background: pastelColor,
                            color: "#222",
                            borderColor: pastelColor,
                          }}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      className="action-btn github-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  ) : (
                    <span
                      className="action-btn github-btn github-btn-disabled"
                      aria-disabled="true"
                      aria-label={`${project.title}: no repository available`}
                    >
                      <i className="fab fa-github"></i>
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Smaller projects: a list card, always rendered last */}
            <div
              className={["project-card", fillClass, "mini-projects-card"]
                .filter(Boolean)
                .join(" ")}
              style={{ animationDelay: `${projects.length * 0.1}s` }}
            >
              <div className="card-header">
                <h3 className="card-title">Other Projects and Coding</h3>
                <span className="source-badge misc">misc</span>
              </div>
              <div className="mini-projects-body">
                <ul className="mini-projects-list">
                  {miniProjects.map((mini) => (
                    <li key={mini.title} className="mini-project-row">
                      <span className="mini-project-title">{mini.title}</span>
                      <div className="mini-project-tech">
                        {mini.technologies.map((tech, i) => {
                          let hue = Math.floor(Math.random() * 360) - 20;
                          if (hue < 0) hue += 360;
                          const pastelColor = `hsl(${hue}, 70%, 85%)`;
                          return (
                            <span
                              key={i}
                              className="tech-tag"
                              style={{
                                background: pastelColor,
                                color: "#222",
                                borderColor: pastelColor,
                              }}
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                      <a
                        href={mini.githubUrl}
                        className="action-btn github-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${mini.title} on GitHub`}
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
