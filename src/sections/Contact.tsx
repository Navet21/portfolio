import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="relative w-full bg-neutral-900 border-t border-white/10"
    >
      <div className="relative mx-auto max-w-3xl px-4 py-14 md:py-20 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Pablo Santana Suárez
        </h2>

        <p className="mt-2 text-neutral-400 text-sm md:text-base">
          Junior Backend Developer · Abierto a nuevas oportunidades
        </p>

        <div className="mx-auto mt-4 h-[2px] w-28 bg-purple-500 rounded" />

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="mailto:navet21dev@gmail.com"
            className="group flex items-center justify-center h-12 w-12 rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition"
            aria-label="Enviar email"
          >
            <Mail className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/Navet21"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center h-12 w-12 rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href="https://linkedin.com/in/navet21"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center h-12 w-12 rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        <p className="mt-10 text-xs text-neutral-500">
          © {new Date().getFullYear()} · Portfolio personal
        </p>
      </div>
    </footer>
  );
};

export default Contact;
