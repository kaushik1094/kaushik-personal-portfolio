import React from "react";

function Intro() {
  function openResume() {
    window.open(
      "https://www.kaushikthallapally.me/uploads/9/9/3/0/99300024/kaushik_thallapally_resume.pdf",
      "_blank"
    );
    // window.location.href =
    //   "https://www.kaushikthallapally.me/uploads/9/9/3/0/99300024/kaushik_thallapally_resume.pdf";
  }
  return (
    <>
      <div className="intro-title">Hello, I’m Kaushik,</div>
      <div className="profession">Software Engineer</div>
      <div className="intro-title">
        based in India/United States of America.
      </div>
      <div className="buttonWrapper">
        <button className="resume-button" onClick={openResume}>
          Resume
        </button>
      </div>
    </>
  );
}

export default Intro;
