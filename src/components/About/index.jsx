import Skills from "./Skills";
import SectionTitle from "../motion/SectionTitle";
import Reveal from "../motion/Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle>About</SectionTitle>
      <Reveal>
        <p className="about-body">
          Senior Software Engineer with a Master&rsquo;s in Computer Science and
          a career rooted in national-security and human-centered computing
          since 2018. I lead the design and delivery of cross-platform
          applications &mdash; on web, Android, and iOS &mdash; that put critical
          information in the hands of operators across more than{" "}
          <strong>90 countries</strong> and <strong>12 languages</strong>. My work
          spans full-stack engineering with React, React Native, TypeScript,
          Node.js, and ASP.NET Core; AI / ML; and cloud delivery on AWS. I
          care most about building software that performs under real-world
          constraints &mdash; airports, border crossings, training facilities &mdash;
          where reliability and clarity are non-negotiable.
        </p>
      </Reveal>
      <Skills />
    </section>
  );
}
