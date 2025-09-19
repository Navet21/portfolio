import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
    return (
        <footer
        id="contact"
        className="relative w-full bg-neutral-900"
        >
        <div className="relative mx-auto max-w-3xl px-4 py-12 md:py-16 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
            Pablo Santana Suárez
            </h2>
            <div className="mx-auto mt-2 h-[2px] w-28 bg-purple-500" />

            <div className="mt-6 flex justify-center gap-6">
            <a
                href="mailto:tuemail@ejemplo.com"
                className="text-neutral-400 hover:text-white transition"
                aria-label="Email"
            >
                <Mail className="h-6 w-6" />
            </a>
            <a
                href="https://github.com/Navet21"
                target="_blank"
                className="text-neutral-400 hover:text-white transition"
                aria-label="GitHub"
            >
                <Github className="h-6 w-6" />
            </a>
            <a
                href="https://linkedin.com/in/navet21"
                target="_blank"
                className="text-neutral-400 hover:text-white transition"
                aria-label="LinkedIn"
            >
                <Linkedin className="h-6 w-6" />
            </a>
            </div>
        </div>
        </footer>
    );
};

export default Contact;
