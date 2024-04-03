import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useEffect } from "react";


const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">OM GORE</h6>
        <p>© All CopyRights Reserved 2022</p>
      </footer>
    </div>
  );
};

export default App;
