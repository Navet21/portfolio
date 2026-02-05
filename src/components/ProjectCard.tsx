import { useEffect, useMemo, useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  images?: string[];
  techs: string[];
  demoUrl?: string;
  codeUrl?: string;
  codeUrl2?: string;
  privateCode?: boolean;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  images = [],
  techs,
  demoUrl,
  codeUrl,
  codeUrl2,
  privateCode = false,
  featured = false,
}: ProjectCardProps) => {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const hasImages = safeImages.length > 0;

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!hasImages) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % safeImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hasImages, safeImages.length]);

  return (
    <div
      className={[
        "grid md:grid-cols-2 gap-8 items-center py-12 border-b border-white/10 last:border-0",
        featured ? "md:py-16" : "",
      ].join(" ")}
    >
      {/* Media */}
      <div
        className={[
          "relative w-full h-64 rounded overflow-hidden border border-white/10",
          featured ? "h-72 md:h-80" : "",
        ].join(" ")}
      >
        {hasImages ? (
          <>
            <img
              src={safeImages[current]}
              alt={`${title} preview ${current + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            />
            
            {safeImages.length > 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {safeImages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-2 w-2 rounded-full ${
                      idx === current ? "bg-purple-500" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-white/5 text-neutral-400">
            Sin capturas todavía
          </div>
        )}
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-purple-600/20 text-purple-300 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {featured && (
            <span className="ml-auto px-2 py-1 text-xs bg-purple-600 text-white rounded">
              Destacado
            </span>
          )}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>

        <p className="mt-3 text-neutral-300 text-base leading-relaxed text-justify">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 text-white text-sm font-medium text-center hover:bg-purple-700 transition"
            >
              Ver en producción
            </a>
          )}

          {privateCode ? (
            <button
              disabled
              className="px-4 py-2 bg-white/10 text-neutral-400 text-sm font-medium text-center cursor-not-allowed"
              title="Este proyecto tiene el código privado"
            >
              Código privado
            </button>
          ) : (
            <>
              {codeUrl && (
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-neutral-900 text-sm font-medium text-center hover:bg-neutral-200 transition"
                >
                  Repositorio (Front)
                </a>
              )}
              {codeUrl2 && (
                <a
                  href={codeUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-neutral-900 text-sm font-medium text-center hover:bg-neutral-200 transition"
                >
                  Repositorio (Back)
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
