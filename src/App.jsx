import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Intro from "../components/Intro";
import About from "../components/About";

function App() {
  const [count, setCount] = useState(0);
  function openResume() {
    window.open(
      "https://www.kaushikthallapally.me/uploads/9/9/3/0/99300024/kaushik_thallapally_resume.pdf",
      "_blank"
    );
  }
  return (
    <div className="body-div">
      <Intro />
      <About />
    </div>
  );
}

export default App;
