import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import ParticlesComponent from "./components/Particles/Particles";

function App() {
  return (
    <>
      <Navbar />
      <ParticlesComponent />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
