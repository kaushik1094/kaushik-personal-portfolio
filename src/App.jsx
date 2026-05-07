import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Awards from "./components/Awards";
import Speaking from "./components/Speaking";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <div className="bg-blobs" aria-hidden="true">
        <div className="blob blob--blue" />
        <div className="blob blob--gold" />
      </div>
      <Header />
      <div className="body-div">
        <Intro />
        <About />
        <Experience />
        <Awards />
        <Speaking />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
