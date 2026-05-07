import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../motion/SectionTitle";
import { Stagger, StaggerItem } from "../motion/Stagger";

const SKILL_GROUPS = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "C#", "Python", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "React Native", "Expo", "Redux", "Angular", "GraphQL"],
  },
  {
    label: "Backend",
    items: ["Node.js (Express / Hapi)", "ASP.NET Core", "REST APIs"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS Lightsail", "AWS Amplify"],
  },
  {
    label: "Domains",
    items: [
      "AI / ML",
      "Deep Learning",
      "Reinforcement Learning",
      "Full-Stack",
      "Cross-Platform Mobile",
      "High-Performance Computing",
    ],
  },
];

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <div className="skills-wrapper">
      <SectionTitle id="skills">Skills</SectionTitle>
      <div className="skill-groups">
        {SKILL_GROUPS.map((group) => (
          <div className="skill-group" key={group.label}>
            <h3 className="skill-group-label">{group.label}</h3>
            <Stagger className="skill-chips" gap={0.04}>
              {group.items.map((item) => (
                <StaggerItem key={item}>
                  <motion.span
                    className="skill-chip"
                    whileHover={
                      reduce
                        ? undefined
                        : {
                            y: -2,
                            backgroundColor: "#f5ee84",
                            color: "#03045e",
                          }
                    }
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {item}
                  </motion.span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        ))}
      </div>
    </div>
  );
}
