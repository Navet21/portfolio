import PortFolioHeader from "./components/PortFolioHeader";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from './sections/Contact';

const base = import.meta.env.BASE_URL;
const heroUrl = `${base}background2.jpg`

export default function App() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white"> 
      <Hero
        imageUrl={heroUrl}
        name="Pablo Santana Suárez"
        title="Junior Backend Developer"
        tagline="Especializado en NestJS, Docker y despliegue de aplicaciones reales en producción con CI/CD"
      />
      <PortFolioHeader/>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact/>
    </div>
  );
}
