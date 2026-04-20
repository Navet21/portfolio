const base = import.meta.env.BASE_URL;
const mnxImage = `${base}mnx.png`;

const Experience = () => {
  return (
    <section id="experiencia" className="relative w-full bg-neutral-950">
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white">
          Experiencia
        </h2>
        <div className="mx-auto mt-3 h-1 w-full bg-purple-500 rounded" />

        <div className="mt-12 space-y-6">
          <article className="flex flex-col items-start gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex-row md:p-7">
            <div className="flex-shrink-0">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-black/20 md:h-16 md:w-16">
                <img
                  src={mnxImage}
                  alt="Logo de MNX Online"
                  className="h-10 w-10 object-contain md:h-12 md:w-12"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold text-white">
                  Desarrollador Fullstack Junior · MNX Online
                </h3>

                <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
                  Marzo 2025 – Mayo 2025 · Prácticas
                </span>
              </div>

              <p className="mt-4 leading-relaxed text-neutral-300">
                Experiencia en entorno profesional desarrollando funcionalidades
                frontend y backend para proyectos reales, trabajando con Angular
                y NestJS dentro de un equipo de desarrollo.
              </p>

              <ul className="mt-4 space-y-2 leading-relaxed text-neutral-300">
                <li>
                  Desarrollo de componentes e interfaces en{" "}
                  <span className="font-semibold">Angular</span>.
                </li>
                <li>
                  Implementación de endpoints y lógica de negocio en{" "}
                  <span className="font-semibold">NestJS</span>.
                </li>
                <li>
                  Creación de <span className="font-semibold">seeders</span> para
                  carga masiva de datos desde archivos Excel.
                </li>
                <li>
                  Adaptación de componentes a{" "}
                  <span className="font-semibold">Material Design</span> y mejora
                  de consistencia visual.
                </li>
                <li>
                  Trabajo colaborativo con metodologías ágiles y coordinación con
                  el equipo de desarrollo.
                </li>
              </ul>

              <p className="mt-5 text-sm text-neutral-400">
                <span className="font-semibold text-white">Stack:</span> Angular,
                NestJS, SCSS, Material Design
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;