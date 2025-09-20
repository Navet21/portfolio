import { Github, Linkedin } from "lucide-react";

interface LinkItem {
  href: string;
  label: string;
}

const links: LinkItem[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Tecnologías" },
  { href: "#projects", label: "Proyectos" },
];

export default function PortFolioHeader() {
  return (
    <header className="sticky top-0 z-40 bg-neutral-950/60 backdrop-blur border-b border-white/10">
      <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <nav className="flex-1 flex justify-center items-center gap-1 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 text-neutral-300">
          <a
            href="https://github.com/Navet21"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/navet21"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
