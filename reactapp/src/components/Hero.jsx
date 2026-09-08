import "./Hero.css";

const Hero = () => {
  // One random pastel accent (same generator as the tech tags / info swatches),
  // shared by the ASCII art and the info keys so they match on each refresh.
  let hue = Math.floor(Math.random() * 360) - 20;
  if (hue < 0) hue += 360;
  const accentColor = `hsl(${hue}, 70%, 85%)`;

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-greeting">Hello, I'm</span>
            <span className="hero-name">Joseph Kerry</span>
            <span className="hero-subtitle">
              West Bridgford, Nottingham, England
            </span>
          </h1>
          <p className="hero-description">
            MSc Software Engineering graduate and backend developer!
          </p>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-glow"></div>
            <div className="arch-terminal">
              <div className="arch-header">
                <div className="arch-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="arch-title">joe@arch: ~</span>
              </div>
              <div className="arch-content">
                <pre
                  className="arch-logo"
                  style={{
                    color: accentColor,
                    textShadow: `0 0 8px ${accentColor}`,
                  }}
                >{`                   -\`
                  .o+\`
                 \`ooo/
                \`+oooo:
               \`+oooooo:
               -+oooooo+:
             \`/:-:++oooo+:
            \`/++++/+++++++:
           \`/++++++++++++++:
          \`/+++ooooooooooooo/\`
         ./ooosssso++osssssso+\`
        .oossssso-\`\`\`\`/ossssss+\`
       -osssssso.      :ssssssso.
      :osssssss/        osssso+++.
     /ossssssss/        +ssssooo/-
   \`/ossssso+/:-        -:/+osssso+-
  \`+sso+:-\`                 \`.-/+oso:
 \`++:.                           \`-/+/
 .\`                                 \`/`}</pre>
                <div className="arch-info">
                  <div className="arch-info-user">
                    <span className="arch-user" style={{ color: accentColor }}>
                      joe
                    </span>
                    @
                    <span className="arch-host" style={{ color: accentColor }}>
                      arch
                    </span>
                  </div>
                  <div className="arch-info-divider">-----------</div>
                  <div className="arch-info-row">
                    <span className="arch-key" style={{ color: accentColor }}>
                      OS
                    </span>
                    Arch Linux x86_64
                  </div>
                  <div className="arch-info-row">
                    <span className="arch-key" style={{ color: accentColor }}>
                      Host
                    </span>
                    Joseph Kerry
                  </div>
                  <div className="arch-info-row">
                    <span className="arch-key" style={{ color: accentColor }}>
                      Degree
                    </span>
                    MSc Software Engineering
                  </div>
                  <div className="arch-info-row">
                    <span className="arch-key" style={{ color: accentColor }}>
                      Languages
                    </span>
                    Python, Java, C
                  </div>
                  <div className="arch-info-row">
                    <span className="arch-key" style={{ color: accentColor }}>
                      Grade
                    </span>
                    Low Distinction
                  </div>
                  <div className="arch-info-colors">
                    {Array.from({ length: 8 }).map((_, i) => {
                      // Same random pastel generation used for the project tech tags
                      let hue = Math.floor(Math.random() * 360) - 20;
                      if (hue < 0) hue += 360;
                      const pastelColor = `hsl(${hue}, 70%, 85%)`;
                      return (
                        <span
                          key={i}
                          style={{ background: pastelColor }}
                        ></span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
