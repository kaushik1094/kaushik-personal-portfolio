import SectionTitle from "../motion/SectionTitle";
import { Stagger, StaggerItem } from "../motion/Stagger";

const DEGREES = [
  {
    degree: "Master of Science, Computer Science",
    school: "Concordia University Ann Arbor",
  },
  {
    degree: "Bachelor of Engineering, Information Technology",
    school: "Gandhi Institute of Technology and Management (GITAM)",
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionTitle>Education</SectionTitle>

      <Stagger className="education-list" gap={0.08}>
        {DEGREES.map((d) => (
          <StaggerItem key={d.degree}>
            <div className="education-item">
              <div className="education-degree">{d.degree}</div>
              <div className="education-school">{d.school}</div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
