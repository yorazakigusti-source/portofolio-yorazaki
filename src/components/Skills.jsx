export default function Skills() {
  const skills = ["JavaScript", "React", "Java", "Python", "Tailwind CSS", "Git"];

  return (
    <section id="skills" className="skills-section">
      <h2>Keahlian</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill-card">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}