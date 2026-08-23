import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const projects = [
  { title: "Help Desk Management System", type: "Full stack", year: "2024", description: "A support management application for recording, tracking, and managing tickets and user requests.", tags: ["System development", "Ticket management", "Problem solving"], link: "https://github.com/Ellaa18/helpdesk_system", accent: "coral" },
  { title: "IT Asset Tracker", type: "Product", year: "2024", description: "An organized asset management system that helps teams track resources and improve operational visibility.", tags: ["Asset management", "Database systems", "System design"], link: "https://github.com/Ellaa18/it-asset-tracker", accent: "lime" },
  { title: "2D Platform Game", type: "Creative code", year: "2023", description: "A 2D game with character movement, collision detection, and scoring built to sharpen debugging and logic.", tags: ["Game development", "Programming", "Debugging"], link: "https://github.com/Ellaa18/platformer-game", play: "https://ellaa18.github.io/platformer-game/", accent: "blue" }
];

function App() {
  const [filter, setFilter] = useState("All work");
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState("");
  const [botReply, setBotReply] = useState("Hi! I’m Hermela. What would you like to talk about?");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const filters = ["All work", "Full stack", "Product", "Creative code"];
  const visibleProjects = filter === "All work" ? projects : projects.filter((project) => project.type === filter);

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => reveal.observe(element));
    document.querySelector(".experience")?.setAttribute("id", "experience");
    document.querySelector(".work")?.setAttribute("id", "projects");
    document.querySelector(".toolkit")?.setAttribute("id", "skills");
    const messageLink = document.querySelector(".writing-status");
    const openMessage = () => openChat();
    const openMessageWithKeyboard = (event) => (event.key === "Enter" || event.key === " ") && openChat();
    messageLink?.setAttribute("role", "button");
    messageLink?.setAttribute("tabindex", "0");
    messageLink?.addEventListener("click", openMessage);
    messageLink?.addEventListener("keydown", openMessageWithKeyboard);
    return () => { reveal.disconnect(); messageLink?.removeEventListener("click", openMessage); messageLink?.removeEventListener("keydown", openMessageWithKeyboard); };
  }, [filter]);

  const scrollTo = (id) => { document.querySelector(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  const openChat = () => { setChatOpen(true); setSent(false); setFormError(""); setBotReply("Hi! I’m Hermela. What would you like to talk about?"); };
  const updateForm = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submitMessage = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:hermelayeshanewella@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setBotReply("Your email draft is ready. Just press send in your mail app and i will receive it.");
  };

  return <>
    <div className="grain" aria-hidden="true" />
    <header className="site-header">
      <a className="brand" href="#top"><span>HERMELA.Y</span><strong>Hermela<br />Yeshanew</strong></a>
      <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}</button>
      <nav className={menuOpen ? "open" : ""}><button onClick={() => scrollTo("#about")}>About</button><button onClick={() => scrollTo("#projects")}>Projects</button><button onClick={() => scrollTo("#skills")}>Skills</button><button onClick={() => scrollTo("#contact")}>Contact</button></nav>
      <button className="header-link" onClick={openChat}>Let's talk <span>↗</span></button>
    </header>
    <main id="top">
      <section className="hero wrap"><div className="scanline"></div><div className="hero-copy"><div className="status-badge reveal"><span></span>System online </div><h1 className="reveal">Hermela<br /><em>Yeshanew</em></h1><p className="hero-intro reveal">Software Engineer &amp; Full stack Developer. Architecting <strong>strong backends</strong> and <b>dynamic systems</b> through clean, performant code.</p><div className="hero-actions reveal"><button className="button button-fill" onClick={() => scrollTo("#projects")}>View my work <span>↗</span></button><button className="text-link" onClick={() => scrollTo("#experience")}>See my experience <span>↗</span></button></div></div><div className="terminal-window reveal"><div className="terminal-bar"><span></span><span></span><span></span><b>hermela.js</b></div><pre><code><i>class</i> HermelaDeveloper {'{'}<br />  <i>constructor</i>() {'{'}<br />    this.name = <em>'Hermela Yeshanew'</em>;<br />    this.role = <em>'Software Engineer'</em>;<br />    this.skills = [<em>'Java', 'React', 'SQL'</em>];<br />  {'}'}<br /><br />  <i>async</i> build(problem) {'{'}<br />    <i>return</i> this.solve(problem).optimize();<br />  {'}'}<br /><br />  <small>// system stability prioritized</small><br />{'}'}</code></pre></div><div className="hero-orbit" aria-hidden="true"></div></section>
      <section id="about" className="about wrap reveal"><p className="section-kicker">About me</p><div><h2>Thoughtful by default.<br /><span>Technical by nature.</span></h2><p className="about-text">I am a Software Engineering graduate with practical experience in software development and system improvement. I enjoy turning real world problems into practical solutions, from debugging an existing system to improving database performance.</p><div className="stats"><div><strong>03</strong><span>Featured projects</span></div><div><strong>10+</strong><span>Technical skills</span></div><div><strong>2025</strong><span>Industry internship</span></div></div></div></section>
      <section className="capabilities wrap reveal"><div className="section-heading"><div><p className="section-kicker">What I do</p><h2>Useful software.<br /><span>Better experiences.</span></h2></div></div><div className="capability-grid"><article><span>01</span><h3>Software development</h3><p>I develop maintainable applications with a focus on functionality, reliability, and a positive user experience.</p></article><article><span>02</span><h3>Web development</h3><p>I build responsive interfaces using HTML, CSS, JavaScript, and React with clarity at the center.</p></article><article><span>03</span><h3>Database optimization</h3><p>I work with SQL databases and query optimization to improve performance and reduce processing delays.</p></article><article><span>04</span><h3>Testing & debugging</h3><p>I create automated testing scripts and use disciplined debugging practices to improve software quality.</p></article></div></section>
      <section className="experience wrap reveal"><div><p className="section-kicker">Professional experience</p><h2>Learning by<br /><span>doing the work.</span></h2></div><div className="experience-entry"><div className="experience-top"><h3>System Developer Intern</h3><span>Mar — Jun 2025</span></div><p className="experience-company">Amhara Science and Technology Commission <span>•</span> Bahir Dar, Ethiopia</p><p>During my internship, I improved software quality and system performance by developing automated testing scripts, optimizing database queries, identifying system inefficiencies, and collaborating with team members on system improvements.</p></div></section>
      <section id="work" className="work wrap"><div className="section-heading reveal"><div><p className="section-kicker">Selected work</p><h2>A few things<br /><span>I've made.</span></h2></div><p className="work-note">Projects shaped by real problems,<br />curiosity, and a bias for action.</p></div><div className="filters reveal">{filters.map((item) => <button className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="project-grid">{visibleProjects.map((project, index) => <article className={`project-card ${project.accent} reveal`} style={{ "--delay": `${index * 100}ms` }} key={project.title}><div className="project-visual"><span>{String(index + 1).padStart(2, "0")}</span><div className="visual-lines"></div><b>{project.type}</b></div><div className="project-info"><div className="project-meta"><span>{project.type}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.link} target="_blank" rel="noreferrer">View source ↗</a>{project.play && <a href={project.play} target="_blank" rel="noreferrer">Play it ↗</a>}</div></div></article>)}</div></section>
      <section className="toolkit wrap reveal"><div><p className="section-kicker">Technical toolkit</p><h2>The tools behind<br /><span>the work.</span></h2></div><div className="skill-list"><div><span>Languages</span><strong>Java · C++ · C# · PHP · JavaScript</strong></div><div><span>Web</span><strong>HTML · CSS · React</strong></div><div><span>Database</span><strong>SQL</strong></div><div><span>Tools & concepts</span><strong>Git · GitHub · SDLC · TDD · Debugging</strong></div></div></section>
      <section className="principles wrap reveal"><p className="section-kicker">My approach</p><div className="principle-intro"><h2>Good software<br /><em>solves something real.</em></h2><p>I believe software should be reliable, purposeful, and a positive experience for the people who use it.</p></div><div className="principle-list"><div><b>01</b><strong>Problem solving</strong><span>Understand the problem before designing the solution.</span></div><div><b>02</b><strong>Continuous learning</strong><span>Keep improving and adapt to new technologies.</span></div><div><b>03</b><strong>Quality</strong><span>Test, debug, and refine until the work is dependable.</span></div><div><b>04</b><strong>Teamwork</strong><span>Communicate clearly and collaborate with purpose.</span></div></div></section>
      <section id="contact" className="contact wrap reveal"><p className="section-kicker">Have a good idea?</p><h2>Let's make it<br /><em>real.</em></h2><p>I'm open to conversations, collaborations, and interesting problems.</p><button className="contact-email" onClick={openChat}>Start a private conversation <span>↗</span></button><div className="contact-bottom"><span>Available for select projects</span><a href="https://github.com/Ellaa18" target="_blank" rel="noreferrer">GitHub ↗</a><button onClick={openChat}>Email me ↗</button></div></section>
      <section className="contact-final wrap reveal" id="contact-final"><div className="contact-final-heading"><p className="section-kicker">Contact me</p><h2>Let's talk<br /><em>directly.</em></h2><p className="writing-status"><span></span>Writing back as soon as I can...</p></div><div className="contact-links"><a href="https://github.com/Ellaa18" target="_blank" rel="noreferrer"><span>GitHub</span><b>@Ellaa18 ↗</b></a><a href="mailto:hermelayeshanewella@gmail.com"><span>Email</span><b>hermelayeshanewella@gmail.com ↗</b></a><a href="tel:0930000307"><span>Phone</span><b>0930000307 ↗</b></a><a href="https://t.me/hermi_ella1" target="_blank" rel="noreferrer"><span>Telegram</span><b>@hermi_ella1 ↗</b></a></div></section>
    </main>
    <footer className="wrap"><span>© 2026 Hermela Yeshanew</span><span>Designed & built with care</span><a href="https://github.com/Ellaa18" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">Back to top ↑</a></footer>
    {chatOpen && <div className="chat-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setChatOpen(false)}><section className="chat-panel" role="dialog" aria-modal="true" aria-labelledby="chat-title"><div className="chat-head"><div><span className="status-dot"></span><span className="chat-label">chat with me.</span><h2 id="chat-title">Let's talk.</h2></div><button className="chat-close" aria-label="Close conversation" onClick={() => setChatOpen(false)}>×</button></div>{sent ? <div className="chat-success"><strong>Draft created.</strong><p>Your mail app should now have a ready to send message addressed to Me.</p><button className="button button-fill" onClick={() => setChatOpen(false)}>Done</button></div> : <form className="chat-form" onSubmit={submitMessage}><div className="chat-bubble bot">{botReply}</div><div className="chat-quick-replies"><button type="button" onClick={() => setBotReply("I build software, websites,webapplications, database systems, and testing solutions.")}>What do I do?</button><button type="button" onClick={() => setBotReply("I am open to meaningful software projects, collaborations, and conversations about system development.")}>Work together?</button></div><p className="chat-intro">Leave your details and I will open a ready to send email from you.</p><label>Your name<input name="name" value={form.name} onChange={updateForm} required placeholder="hermela" /></label><label>Email address<input type="email" name="email" value={form.email} onChange={updateForm} required placeholder="hermela@example.com" /></label><label>Your message<textarea name="message" value={form.message} onChange={updateForm} required minLength="10" rows="4" placeholder="I'd love to talk about..." /></label>{formError && <p className="form-error" role="alert">{formError}</p>}<button className="button button-fill chat-submit">Create email draft ↗</button><small> Your email app sends the message.</small></form>}</section></div>}
    <button className="chat-launcher" onClick={openChat} aria-label="Open chat assistant"><span className="chat-launcher-dot"></span><span>Chat with me</span><b>↗</b></button>
  </>;
}

createRoot(document.getElementById("root")).render(<App />);
