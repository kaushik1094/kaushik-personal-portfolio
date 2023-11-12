import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { useEffect } from "react";

export default function Header() {
  const scrollDirection = useScrollDirection();
  const [headerBackground, setHeaderBackground] = useState("header");

  useEffect(() => {
    if (scrollDirection > 0) {
      setHeaderBackground("header header-background");
    } else {
      setHeaderBackground("header");
    }
  }, [scrollDirection]);
  return (
    <div className={headerBackground}>
      <Link
        activeClass="active"
        to="/"
        spy={true}
        smooth={true}
        duration={1000}
        className="header-title"
      >
        Kaushik Thallapally
      </Link>
      <div className="header-links">
        {" "}
        <span>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
          >
            About
          </Link>
        </span>
        <span>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Skills
          </Link>
        </span>
        <span>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Contact
          </Link>
        </span>
      </div>
      <div className="header-socials">
        {" "}
        <a href="">
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </a>
        <a href="">
          <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
        </a>
        <a href="">
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </a>
      </div>
    </div>
  );
}
