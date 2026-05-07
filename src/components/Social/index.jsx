import { motion, useReducedMotion } from "framer-motion";
import "./index.css";

const SOCIALS = [
  {
    id: "email",
    href: "mailto:thallapallyk@gmail.com",
    icon: "fa fa-envelope",
    label: "Email",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/kaushik-thallapally/",
    icon: "fa fa-linkedin",
    label: "LinkedIn",
  },
  {
    id: "github",
    href: "https://github.com/kaushik1094",
    icon: "fa fa-github",
    label: "GitHub",
  },
];

export default function Social() {
  const reduce = useReducedMotion();

  return (
    <div className="footer-social-icons">
      <h4 className="_14" style={{ color: "#213547" }}>
        Follow me on
      </h4>
      <ul className="social-icons">
        {SOCIALS.map((s) => (
          <li key={s.id}>
            <motion.a
              href={s.href}
              target={s.id === "email" ? undefined : "_blank"}
              rel={s.id === "email" ? undefined : "noreferrer"}
              className="social-icon"
              aria-label={s.label}
              whileHover={reduce ? undefined : { y: -3, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <i className={s.icon}></i>
            </motion.a>
          </li>
        ))}
      </ul>
    </div>
  );
}
