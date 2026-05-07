import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollDirection } from "../../hooks/useScrollDirection";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "awards", label: "Awards" },
  { id: "speaking", label: "Speaking" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SOCIALS = [
  {
    id: "github",
    href: "https://github.com/kaushik1094",
    label: "GitHub",
    path: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.39.97 0 1.95.13 2.86.39 2.18-1.48 3.14-1.17 3.14-1.17.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12 24 5.65 18.85.5 12 .5z",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/kaushik-thallapally/",
    label: "LinkedIn",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43A2.06 2.06 0 113.28 5.37a2.06 2.06 0 012.06 2.06zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.99 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.22 0z",
  },
];

export default function Header() {
  const scrollDirection = useScrollDirection();
  const [headerBackground, setHeaderBackground] = useState("header");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (scrollDirection > 0) {
      setHeaderBackground("header header-background");
    } else {
      setHeaderBackground("header");
    }
  }, [scrollDirection]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const onClickHome = () => {
    scroll.scrollToTop({ duration: 1000, smooth: true });
    setMenuOpen(false);
  };

  return (
    <>
      <div className={headerBackground}>
        <motion.div
          className="header-title"
          whileHover={{ letterSpacing: "0.04em" }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <Link to="/" smooth duration={1000} onClick={onClickHome}>
            Kaushik Thallapally
          </Link>
        </motion.div>

        <nav className="header-links">
          {NAV.map((item) => (
            <span className="nav-link" key={item.id}>
              <Link
                activeClass="active"
                to={item.id}
                spy
                smooth
                duration={800}
                offset={-60}
              >
                {item.label}
                <span className="nav-underline" aria-hidden="true" />
              </Link>
            </span>
          ))}
        </nav>

        <div className="header-socials">
          {SOCIALS.map((s) => (
            <motion.a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              whileHover={{ y: -2, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={s.path} />
              </svg>
            </motion.a>
          ))}
        </div>

        <button
          type="button"
          className={`menu-toggle${menuOpen ? " menu-toggle--open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              key="panel"
              className="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav>
                {NAV.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    className="mobile-menu-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      to={item.id}
                      smooth
                      duration={800}
                      offset={-60}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mobile-menu-socials">
                {SOCIALS.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
