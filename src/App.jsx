import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="body-div">
        <Intro />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
