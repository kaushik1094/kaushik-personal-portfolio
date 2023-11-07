import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="body-div">
      <Intro />
      <About />
      <Contact />
    </div>
  );
}

export default App;
