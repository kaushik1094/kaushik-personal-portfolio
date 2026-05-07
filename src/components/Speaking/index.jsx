import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../motion/SectionTitle";
import { Stagger, StaggerItem } from "../motion/Stagger";

const TALKS = [
  {
    event: "INMM Annual Meeting 2025",
    location: "Washington, DC",
    date: "Mon, Aug 25, 2025 — 10:40 a.m. EDT",
    title:
      "Empowering Global Radiation Detection: The NSDD Frontline App for Enhanced Operational and Maintenance Efficiency",
    href: "https://www.pnnl.gov/events/institute-nuclear-materials-management-annual-meeting-2025",
  },
  {
    event: "EFCOG Training Workshop Group 2024",
    location: "Concurrent session: After Training Events",
    date: "Tue, Mar 19, 2024",
    title:
      "NSDD Frontline App and its use cases across 90 countries",
    href: null,
  },
];

export default function Speaking() {
  const reduce = useReducedMotion();

  return (
    <section id="speaking" className="section">
      <SectionTitle>Speaking</SectionTitle>

      <Stagger className="talks">
        {TALKS.map((talk) => (
          <StaggerItem key={talk.event}>
            <motion.article
              className="talk-card"
              whileHover={
                reduce
                  ? undefined
                  : { y: -3, borderColor: "#f5ee84" }
              }
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div className="talk-event">{talk.event}</div>
              <div className="talk-date">{talk.date}</div>
              <div className="talk-location">{talk.location}</div>
              <div className="talk-title">
                {talk.href ? (
                  <a
                    href={talk.href}
                    target="_blank"
                    rel="noreferrer"
                    className="talk-title-link"
                  >
                    {talk.title}
                  </a>
                ) : (
                  talk.title
                )}
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
