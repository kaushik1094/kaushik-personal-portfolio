import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ROLES = [
  "Senior Software Engineer",
  "Full-Stack Engineer",
  "AI / ML Engineer",
];

const TYPE_SPEED = 70;
const DELETE_SPEED = 35;
const HOLD_AFTER_TYPE = 1600;
const HOLD_AFTER_DELETE = 250;

function useTypewriter(words, enabled) {
  const [text, setText] = useState(enabled ? "" : words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    if (!enabled) return undefined;
    const current = words[wordIndex];
    let timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPE_SPEED
        );
      } else {
        timeout = setTimeout(() => setPhase("deleting"), HOLD_AFTER_TYPE);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          DELETE_SPEED
        );
      } else {
        timeout = setTimeout(() => {
          setWordIndex((wordIndex + 1) % words.length);
          setPhase("typing");
        }, HOLD_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, words, enabled]);

  return text;
}

function openResume() {
  window.open("/Kaushik_Thallapally_Resume.pdf", "_blank");
}

export default function Intro() {
  const reduce = useReducedMotion();
  const typed = useTypewriter(ROLES, !reduce);

  return (
    <section className="intro-section">
      <motion.div
        initial={{ opacity: 0, x: reduce ? 0 : -32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="intro-title"
      >
        Hello, I&rsquo;m Kaushik,
      </motion.div>

      <div className="profession" aria-label={ROLES[0]}>
        <span>{reduce ? ROLES[0] : typed}</span>
        <span className="caret" aria-hidden="true" />
      </div>

      <motion.div
        className="intro-tagline"
        initial={{ opacity: 0, y: reduce ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        building secure, full-stack and cross-platform software for
        national-security and human-centered computing.
      </motion.div>

      <motion.div
        className="buttonWrapper"
        initial={{ opacity: 0, y: reduce ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.button
          className="resume-button"
          onClick={openResume}
          whileHover={reduce ? undefined : { y: -3, scale: 1.03 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
        >
          Resume
        </motion.button>
      </motion.div>
    </section>
  );
}
