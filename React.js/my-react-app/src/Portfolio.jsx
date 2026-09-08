import "./Portfolio.css";

const projects = [
  "WEB DESIGN",
  "MOBILE DESIGN",
  "LOGO DESIGN",
  "WEB APPLICATION DEVELOPMENT",
  "MOBILE APPLICATION DEVELOPMENT",
  "PWA DEVELOPMENT",
];

export const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <article className="portfolio-card" key={project}>
            <span>{project}</span>
          </article>
        ))}
      </div>
    </section>
  );
};
