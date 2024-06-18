import Skills from "./Skills";
export default function About() {
  return (
    <div id="about">
      <h2 className="about-title">About</h2>
      <p className="about-body">
        Senior Software Engineer with a Master’s degree in Computer Science and
        extensive experience in the software development lifecycle. A dynamic
        and driven professional, adept in crafting cutting-edge applications
        utilizing an array of technologies such as React, Angular, React Native,
        Redux, GraphQL, and RESTful services. Distinguished by a proven track
        record of innovative problem-solving and the ability to deliver
        high-performance software solutions that meet complex business needs.
      </p>
      <div className="about-title" id="skills">
        Skills
      </div>
      {/* <div className="skills">
        <CircularProgress
          size={250}
          strokeWidth={20}
          percentage={98}
          color="#03045E"
          title={"JavaScript"}
        />
        <CircularProgress
          size={250}
          strokeWidth={20}
          percentage={90}
          color="#03045E"
          title={"TypeScript"}
        />
        <CircularProgress
          size={250}
          strokeWidth={20}
          percentage={95}
          color="#03045E"
          title={"React Native"}
        />
        <CircularProgress
          size={250}
          strokeWidth={20}
          percentage={98}
          color="#03045E"
          title={"React"}
        />
        <CircularProgress
          size={250}
          strokeWidth={20}
          percentage={98}
          color="#03045E"
          title={"Redux"}
        />
        <CircularProgress
          size={250}
          strokeWidth={20}
          percentage={98}
          color="#03045E"
          title={"MobX"}
        />
        <CircularProgress
          size={250}
          strokeWidth={20}
          percentage={98}
          color="#03045E"
          title={"NodeJs (Express/Hapi)"}
        />
      </div> */}
      {/* <Skills /> */}
    </div>
  );
}
