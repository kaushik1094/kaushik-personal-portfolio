import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "../motion/SectionTitle";
import Reveal from "../motion/Reveal";

const TEAM = [
  "Robert Brigantic",
  "Nick Betzsold",
  "Casey Perkins",
  "Natalie Lamar",
  "John Buckheit",
  "Todd Billow",
  "Nancy O'Brien",
  "Ryan Warren",
  "Shane Gentry",
  "Kaushik Thallapally",
];

const PNNL_URL = "https://www.pnnl.gov/about/rd-100-awards";
const RD100_URL =
  "https://www.rdworldonline.com/winners-unveiled-for-2025-rd-100-special-recognition-categories/";

export default function Awards() {
  const reduce = useReducedMotion();

  const openPnnl = () =>
    window.open(PNNL_URL, "_blank", "noopener,noreferrer");

  return (
    <section id="awards" className="section">
      <SectionTitle>Awards</SectionTitle>

      <Reveal>
        <motion.article
          className={`award-card award-card--link${
            reduce ? " award-card--no-shimmer" : ""
          }`}
          role="link"
          tabIndex={0}
          aria-label="R&D 100 Award — read more on PNNL"
          onClick={openPnnl}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openPnnl();
            }
          }}
          whileHover={
            reduce
              ? undefined
              : {
                  y: -4,
                  boxShadow: "0 20px 40px -16px rgba(3, 4, 94, 0.35)",
                }
          }
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <div className="award-shimmer" aria-hidden="true" />
          <div className="award-year">2025</div>
          <h3 className="award-title">R&amp;D 100 Award</h3>
          <div className="award-medal">
            Gold Medal &mdash; Special Recognition: Market Disruptor
          </div>
          <p className="award-project">
            <strong>Airport Risk Assessment Model</strong> &mdash; a data-driven,
            risk-based decision-analytics tool that helps airports evaluate and
            prioritize security measures. By combining statistical modeling,
            simulations, and real-world operational data, it gives
            decision-makers a clearer picture of threats and vulnerabilities and
            lets them allocate resources where they have the greatest impact.
          </p>
          <div className="award-team-label">Team co-recipients</div>
          <div className="award-team">
            {TEAM.map((name, idx) => (
              <span key={name} className="award-team-name">
                {name}
                {idx < TEAM.length - 1 ? "," : ""}
              </span>
            ))}
          </div>
          <div className="award-source">
            <a
              className="award-source-link"
              href={RD100_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Source: R&amp;D 100 Awards
            </a>
          </div>
        </motion.article>
      </Reveal>
    </section>
  );
}
