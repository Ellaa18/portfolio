
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const projects = [
  {
    title: "Help Desk Management System",
    type: "Full stack",
    year: "2024",
    description:
      "A ticket management system for tracking support requests and improving service delivery.",
    tags: ["System development", "Ticket management", "Problem solving"],
    link: "https://github.com/Ellaa18/helpdesk_system",
    accent: "coral",
  },
  {
    title: "IT Asset Tracker",
    type: "Product",
    year: "2024",
    description:
      "A web application for organizing IT assets and improving resource tracking.",
    tags: ["Asset management", "Database systems", "System design"],
    demo: "https://it-asset-tracker-nu.vercel.app/",
    accent: "lime",
  },
  {
    title: "2D Platform Game",
    type: "Creative code",
    year: "2023",
    description:
      "An interactive 2D game featuring character movement, collision detection, and scoring.",
    tags: ["Game development", "Programming", "Debugging"],
    play: "https://ellaa18.github.io/platformer-game/",
    accent: "blue",
  },
];

function App() {
  const [filter, setFilter] = useState("All work");
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState("");
  const [botReply, setBotReply] = useState(
    "Hi! I’m Hermela. What would you like to discuss?"
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const filters = ["All work", "Full stack", "Product", "Creative code"];

  const visibleProjects =
    filter === "All work"
      ? projects
      : projects.filter((project) => project.type === filter);

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting &&
            entry.target.classList.add("is-visible")
        ),
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      reveal.observe(element);
    });

    document.querySelector(".experience")?.setAttribute("id", "experience");
    document.querySelector(".work")?.setAttribute("id", "projects");
    document.querySelector(".toolkit")?.setAttribute("id", "skills");

    const messageLink = document.querySelector(".writing-status");
    const openMessage = () => openChat();

    const openMessageWithKeyboard = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        openChat();
      }
    };

    messageLink?.setAttribute("role", "button");
    messageLink?.setAttribute("tabindex", "0");
    messageLink?.addEventListener("click", openMessage);
    messageLink?.addEventListener("keydown", openMessageWithKeyboard);

    const launcher = document.querySelector(".chat-launcher");
    const footer = document.querySelector("footer");

    const updateLauncherPosition = () => {
      if (!launcher || !footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const launcherHeight = launcher.offsetHeight;
      const gap = 24;

      if (footerTop < window.innerHeight - gap) {
        launcher.classList.add("is-docked");
        launcher.style.top = `${
          footer.offsetTop - launcherHeight - gap
        }px`;
      } else {
        launcher.classList.remove("is-docked");
        launcher.style.top = "";
      }
    };

    window.addEventListener("scroll", updateLauncherPosition, {
      passive: true,
    });
    window.addEventListener("resize", updateLauncherPosition);

    updateLauncherPosition();

    return () => {
      reveal.disconnect();
      window.removeEventListener("scroll", updateLauncherPosition);
      window.removeEventListener("resize", updateLauncherPosition);
      messageLink?.removeEventListener("click", openMessage);
      messageLink?.removeEventListener(
        "keydown",
        openMessageWithKeyboard
      );
    };
  }, [filter]);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  const openChat = () => {
    setChatOpen(true);
    setSent(false);
    setFormError("");
    setBotReply("Hi! I’m Hermela. What would you like to discuss?");
  };

  const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitMessage = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href =
      `mailto:hermelayeshanewella@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
    setBotReply(
      "Your email draft is ready. Press Send in your mail app to contact me."
    );
  };

  return (
    <>
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top">
          <span>HERMELA.Y</span>
          <strong>
            Hermela
            <br />
            Yeshanew
          </strong>
        </a>

        <button
          className="menu-button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav className={menuOpen ? "open" : ""}>
          <button onClick={() => scrollTo("#about")}>About</button>
          <button onClick={() => scrollTo("#projects")}>Projects</button>
          <button onClick={() => scrollTo("#skills")}>Skills</button>
        </nav>

        <button className="header-link" onClick={openChat}>
          Let's talk <span>↗</span>
        </button>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="scanline"></div>

          <div className="hero-copy">
            <div className="status-badge reveal">
              <span></span>
              Available for opportunities
            </div>

            <h1 className="reveal">
              Hermela
              <br />
              <em>Yeshanew</em>
            </h1>

            <p className="hero-intro reveal">
              Frontend Developer focused on <strong>React, Node.js,</strong>{" "}
              and polished user interfaces. I build responsive, intuitive
              web experiences with the flexibility to deliver{" "}
              <b>full-stack solutions.</b>
            </p>

            <div className="hero-actions reveal">
              <button
                className="button button-fill"
                onClick={() => scrollTo("#projects")}
              >
                View my work <span>↗</span>
              </button>

              <button
                className="text-link"
                onClick={() => scrollTo("#experience")}
              >
                My experience <span>↗</span>
              </button>
            </div>
          </div>

          <div className="terminal-window reveal">
            <div className="terminal-bar">
              <span></span>
              <span></span>
              <span></span>
              <b>hermela.js</b>
            </div>

            <pre>
              <code>
                <i>class</i> HermelaDeveloper {"{"}
                <br />
                {"  "}<i>constructor</i>() {"{"}
                <br />
                {"    "}this.name = <em>'Hermela Yeshanew'</em>;
                <br />
                {"    "}this.role = <em>'Frontend Developer'</em>;
                <br />
                {"    "}this.stack = [<em>'React', 'Node.js', 'SQL'</em>];
                <br />
                {"  "}{"}"}
                <br />
                <br />
                {"  "}<i>async</i> build(problem) {"{"}
                <br />
                {"    "}<i>return</i> this.solve(problem).optimize();
                <br />
                {"  "}{"}"}
                <br />
                <br />
                {"  "}<small>
                  // clean code. thoughtful design. reliable systems.
                </small>
                <br />
                {"}"}
              </code>
            </pre>
          </div>

          <div className="hero-orbit" aria-hidden="true"></div>
        </section>

        <section id="about" className="about wrap reveal">
          <p className="section-kicker">About me</p>

          <div>
            <h2>
              Thoughtful design.
              <br />
              <span>Reliable engineering.</span>
            </h2>

            <p className="about-text">
              I'm a Software Engineering graduate who enjoys building
              user-friendly web applications, solving technical problems,
              and improving system performance. My focus is frontend
              development, with experience across full-stack projects.
            </p>

            <div className="stats">
              <div>
                <strong>03</strong>
                <span>Featured projects</span>
              </div>
              <div>
                <strong>10+</strong>
                <span>Technical skills</span>
              </div>
              <div>
                <strong>2025</strong>
                <span>Industry internship</span>
              </div>
            </div>
          </div>
        </section>

        <section className="capabilities wrap reveal">
          <div className="section-heading">
            <div>
              <p className="section-kicker">What I do</p>
              <h2>
                Digital ideas.
                <br />
                <span>Built with purpose.</span>
              </h2>
            </div>
          </div>

          <div className="capability-grid">
            <article>
              <span>01</span>
              <h3>Frontend development</h3>
              <p>
                Responsive, accessible interfaces built with React,
                JavaScript, HTML, and CSS.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>UI & UX implementation</h3>
              <p>
                Clear layouts, consistent styling, and intuitive
                interactions that improve the user experience.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Backend & APIs</h3>
              <p>
                Node.js-powered functionality, API integration, and
                database-backed application features.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Testing & optimization</h3>
              <p>
                Debugging, database query improvements, and testing
                to help applications run reliably.
              </p>
            </article>
          </div>
        </section>

        <section className="experience wrap reveal">
          <div>
            <p className="section-kicker">Professional experience</p>
            <h2>
              Practical skills.
              <br />
              <span>Real-world learning.</span>
            </h2>
          </div>

          <div className="experience-entry">
            <div className="experience-top">
              <h3>System Developer Intern</h3>
              <span>Mar — Jun 2025</span>
            </div>

            <p className="experience-company">
              Amhara Science and Technology Commission
              <span> • </span>
              Bahir Dar, Ethiopia
            </p>

            <p>
              Contributed to software quality and system performance
              through automated testing, database query optimization,
              debugging, and collaborative system improvements.
            </p>
          </div>
        </section>

        <section id="work" className="work wrap">
          <div className="section-heading reveal">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2>
                Projects that
                <br />
                <span>solve problems.</span>
              </h2>
            </div>

            <p className="work-note">
              A selection of my development
              <br />
              work and technical interests.
            </p>
          </div>

          <div className="filters reveal">
            {filters.map((item) => (
              <button
                className={filter === item ? "active" : ""}
                key={item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <article
                className={`project-card ${project.accent} reveal`}
                style={{ "--delay": `${index * 100}ms` }}
                key={project.title}
              >
                <a
                  className="project-visual-link"
                  href={project.demo || project.play || project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  <div className="project-visual">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div className="visual-lines"></div>
                    <b>{project.type}</b>
                  </div>
                </a>

                <div className="project-info">
                  <div className="project-meta">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View source ↗
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live demo ↗
                      </a>
                    )}

                    {project.play && (
                      <a
                        href={project.play}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Play game ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="toolkit wrap reveal">
          <div>
            <p className="section-kicker">Technical toolkit</p>
            <h2>
              The technology
              <br />
              <span>behind my work.</span>
            </h2>
          </div>

          <div className="skill-list">
            <div>
              <span>Frontend</span>
              <strong>React · JavaScript · HTML · CSS</strong>
            </div>
            <div>
              <span>Backend</span>
              <strong>Node.js · PHP</strong>
            </div>
            <div>
              <span>Languages</span>
              <strong>Java · C++ · C#</strong>
            </div>
            <div>
              <span>Database</span>
              <strong>SQL · Database optimization</strong>
            </div>
            <div>
              <span>Tools & methods</span>
              <strong>Git · GitHub · SDLC · TDD · Debugging</strong>
            </div>
          </div>
        </section>

        <section className="principles wrap reveal">
          <p className="section-kicker">My approach</p>

          <div className="principle-intro">
            <h2>
              Good software
              <br />
              <em>makes a difference.</em>
            </h2>

            <p>
              I focus on practical solutions that balance usability,
              performance, and maintainability.
            </p>
          </div>

          <div className="principle-list">
            <div>
              <b>01</b>
              <strong>User focused</strong>
              <span>Design around real user needs.</span>
            </div>

            <div>
              <b>02</b>
              <strong>Continuous learning</strong>
              <span>Grow with new tools and technologies.</span>
            </div>

            <div>
              <b>03</b>
              <strong>Quality first</strong>
              <span>Test, refine, and build with care.</span>
            </div>

            <div>
              <b>04</b>
              <strong>Teamwork</strong>
              <span>Communicate clearly and collaborate effectively.</span>
            </div>
          </div>
        </section>

        <section id="contact" className="contact wrap reveal">
          <p className="section-kicker">Have a project in mind?</p>

          <h2>
            Let's build
            <br />
            <em>something great.</em>
          </h2>

          <p>
            Open to development opportunities, collaborations,
            and meaningful projects.
          </p>

          <button className="contact-email" onClick={openChat}>
            Start a conversation <span>↗</span>
          </button>

          <div className="contact-bottom">
            <span>Open to opportunities</span>

            <a
              href="https://github.com/Ellaa18"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <button onClick={openChat}>Email me ↗</button>
          </div>
        </section>

        <section className="contact-final wrap reveal" id="contact-final">
          <div className="contact-final-heading">
            <p className="section-kicker">Get in touch</p>

            <h2>
              Let's talk
              <br />
              <em>about your project.</em>
            </h2>

            <p className="writing-status">
              <span></span>
              Happy to hear from you
            </p>
          </div>

          <div className="contact-links">
            <a
              href="https://github.com/Ellaa18"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <b>@Ellaa18 ↗</b>
            </a>

            <a href="mailto:hermelayeshanewella@gmail.com">
              <span>Email</span>
              <b>hermelayeshanewella@gmail.com ↗</b>
            </a>

            <a href="tel:0930000307">
              <span>Phone</span>
              <b>0930000307 ↗</b>
            </a>

            <a
              href="https://t.me/hermi_ella1"
              target="_blank"
              rel="noreferrer"
            >
              <span>Telegram</span>
              <b>@hermi_ella1 ↗</b>
            </a>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <span>© Hermela Yeshanew</span>
        <span>Designed & built with care</span>
        <a
          href="https://github.com/Ellaa18"
          target="_blank"
          rel="noreferrer"
        ></a>
        <a href="#top">Back to top ↑</a>
      </footer>

      {chatOpen && (
        <div
          className="chat-backdrop"
          role="presentation"
          onMouseDown={(event) =>
            event.target === event.currentTarget && setChatOpen(false)
          }
        >
          <section
            className="chat-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="chat-title"
          >
            <div className="chat-head">
              <div>
                <span className="status-dot"></span>
                <span className="chat-label">chat with me.</span>
                <h2 id="chat-title">Let's talk.</h2>
              </div>

              <button
                className="chat-close"
                aria-label="Close conversation"
                onClick={() => setChatOpen(false)}
              >
                ×
              </button>
            </div>

            {sent ? (
              <div className="chat-success">
                <strong>Draft created.</strong>
                <p>
                  Your mail app should have a ready-to-send message
                  addressed to me.
                </p>

                <button
                  className="button button-fill"
                  onClick={() => setChatOpen(false)}
                >
                  Done
                </button>
              </div>
            ) : (
              <form className="chat-form" onSubmit={submitMessage}>
                <div className="chat-bubble bot">{botReply}</div>

                <div className="chat-quick-replies">
                  <button
                    type="button"
                    onClick={() =>
                      setBotReply(
                        "I build React interfaces, Node.js applications, and database-backed web solutions."
                      )
                    }
                  >
                    What do I do?
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setBotReply(
                        "I'm open to development opportunities, collaborations, and meaningful software projects."
                      )
                    }
                  >
                    Work together?
                  </button>
                </div>

                <p className="chat-intro">
                  Leave a message and I'll prepare an email for you to send.
                </p>

                <label>
                  Your name
                  <input
                    name="name"
                    value={form.name}
                    onChange={updateForm}
                    required
                    placeholder="Your name"
                  />
                </label>

                <label>
                  Email address
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateForm}
                    required
                    placeholder="you@example.com"
                  />
                </label>

                <label>
                  Your message
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={updateForm}
                    required
                    minLength="10"
                    rows="4"
                    placeholder="Tell me about your project..."
                  />
                </label>

                {formError && (
                  <p className="form-error" role="alert">
                    {formError}
                  </p>
                )}

                <button className="button button-fill chat-submit">
                  Create email draft ↗
                </button>

                <small>Your email app will handle sending the message.</small>
              </form>
            )}
          </section>
        </div>
      )}

      <button
        className="chat-launcher"
        onClick={openChat}
        aria-label="Open chat assistant"
      >
        <span className="chat-launcher-dot"></span>
        <span>Chat with me</span>
        <b>↗</b>
      </button>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
