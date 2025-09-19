import { useState, useEffect } from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    images: string[];
    techs: string[];
    demoUrl?: string;
    codeUrl?: string;
    privateCode?: boolean;
}

const ProjectCard = ({
    title,
    description,
    images,
    techs,
    demoUrl,
    codeUrl,
    privateCode = false,
}: ProjectCardProps) => {

    const [current, setCurrent] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
}, [images.length]);

return (
        <div className="grid md:grid-cols-2 gap-8 items-center py-12 border-b border-white/10 last:border-0">
        <div className="relative w-full h-64 rounded overflow-hidden">
            <img
            src={images[current]}
            alt={`${title} preview ${current + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            />

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
                <span
                key={idx}
                className={`h-2 w-2 rounded-full ${
                    idx === current ? "bg-purple-500" : "bg-white/30"
                }`}
                />
            ))}
            </div>
        </div>


        <div>
            <div className="flex flex-wrap gap-2 mb-4">
            {techs.map((tech) => (
                <span
                key={tech}
                className="px-2 py-1 text-xs bg-purple-600/20 text-purple-400 rounded"
                >
                {tech}
                </span>
            ))}
            </div>

            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="mt-3 text-neutral-300 text-base leading-relaxed">
            {description}
            </p>

            <div className="mt-6 flex gap-3">
            {demoUrl && (
                <a
                href={demoUrl}
                target="_blank"
                className="px-4 py-2 bg-purple-600 text-white text-sm font-medium text-center hover:bg-purple-700 transition"
                >
                Ver demo
                </a>
            )}

            {privateCode ? (
                <button
                disabled
                className="px-4 py-2 bg-white/10 text-neutral-400 text-sm font-medium text-center cursor-not-allowed"
                >
                Código privado
                </button>
            ) : (
                codeUrl && (
                <a
                    href={codeUrl}
                    target="_blank"
                    className="px-4 py-2 bg-white text-neutral-900 text-sm font-medium text-center hover:bg-neutral-200 transition"
                >
                    Ver código
                </a>
                )
            )}
            </div>
        </div>
        </div>
    );
    };

export default ProjectCard;
