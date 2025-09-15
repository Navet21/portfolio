import { Github, Linkedin} from "lucide-react";

interface LinkItem {
  href: string;
  label: string;
}

const links: LinkItem[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#about-me", label: "About me" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/60 backdrop-blur">
      <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#inicio" className="group inline-flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=120&auto=format&fit=crop"
            alt="Avatar"
            className="h-8 w-8 rounded-full ring-2 ring-white/10 object-cover"
          />
          <span className="font-semibold tracking-tight">
            <span className="group-hover:underline decoration-lime-300/70 underline-offset-4">
              MiNombre
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm">
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
          <a href="https://github.com/Navet21" target="_blank" aria-label="GitHub" className="hover:text-white transition">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/navet21" target="_blank" aria-label="LinkedIn" className="hover:text-white transition">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        <button className="md:hidden inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-neutral-300">
          Menu
        </button>
      </div>
    </header>
  );
}
