import "./Skills.css";

const skills = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 94 },
  { name: "JavaScript", level: 88 },
  { name: "React", level: 82 },
  { name: "Photoshop", level: 88 },
  { name: "Adobe XD", level: 88 },
  { name: "Node.js", level: 72 },
  { name: "WordPress", level: 55 },
];

export const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        <h1>Skills</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
      </div>

      <div className="skills-content">
        <div className="focus-list">
          <h2>MY FOCUS</h2>
          <span className="focus-rule" />
          <ul>
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>Web Design</li>
            <li>Mobile App Design</li>
          </ul>
        </div>

        <div className="skill-bars" aria-label="Skill levels">
          {skills.map((skill) => (
            <div className="skill-row" key={skill.name}>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-track">
                <span
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
