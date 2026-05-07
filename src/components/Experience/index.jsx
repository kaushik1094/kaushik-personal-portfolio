import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../motion/SectionTitle";

const ITEMS = [
  {
    period: "2018 — Present",
    role: "Senior Software Engineer",
    summary:
      "Started as a National Security Internship Program intern in 2018; have since led the design, development, and deployment of mission-critical applications used by partner countries, federal agencies, and law enforcement worldwide.",
    bullets: [
      {
        title: "NSDD Frontline App",
        body:
          "Cross-platform application (Web, Android, iOS) available in 12 languages, supporting maintenance contractors, training coordinators, and law enforcement personnel across 90+ countries with immediate access to information on radiation detection equipment.",
      },
      {
        title: "ARAM Airport Security",
        body:
          "Operationalized ARAM security systems at Portland International Airport (PDX) and Chișinău International Airport in Moldova — bringing complex risk-analytics tooling into live aviation environments.",
      },
      {
        title: "NSDD SVFG & NSDD IMS Apps",
        body:
          "Led nuclear-security tooling used by partner programs for inventory management and operational support.",
      },
      {
        title: "ComCheck / ResCheck",
        body:
          "Contributed to the U.S. Department of Energy Energy Codes Program building-code compliance applications used nationwide by code officials, builders, and designers.",
      },
    ],
  },
];

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="section">
      <SectionTitle>Experience</SectionTitle>

      <div className="timeline">
        <motion.div
          className="timeline-line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: reduce ? 0 : 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {ITEMS.map((item, idx) => (
          <motion.div
            className="timeline-item"
            key={item.role}
            initial={{ opacity: 0, x: reduce ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: reduce ? 0 : 0.2 + idx * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-role">{item.role}</div>
              <p className="timeline-summary">{item.summary}</p>
              <ul className="timeline-bullets">
                {item.bullets.map((b, bIdx) => (
                  <motion.li
                    key={b.title}
                    initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.5,
                      delay: reduce ? 0 : 0.4 + bIdx * 0.08,
                    }}
                  >
                    <span className="bullet-title">{b.title}</span>
                    <span className="bullet-body">{b.body}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
