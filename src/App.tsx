import PortFolioHeader from "./components/PortFolioHeader";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white">
      <Hero
        imageUrl="/background2.jpg"
        name="Pablo Santana Suárez"
        subtitle="Junior Full Stack Developer"
      />
      <PortFolioHeader/>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact/>
    </div>
  );
}
