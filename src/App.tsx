import Header from "./components/Header";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]"
        style={{
          backgroundImage:
            `linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),` +
            `linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)`,
          backgroundSize: "40px 40px, 40px 40px",
          backgroundPosition: "-1px -1px, -1px -1px",
        }}
      />

      <Header />
      <Hero />
      <Skills />
      <Experience/>
      <Projects />
    </div>
  );
}
