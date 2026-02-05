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
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 flex flex-col md:flex-row gap-6 items-start">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="h-14 w-14 md:h-16 md:w-16 rounded-xl border border-white/10 bg-black/20 flex items-center justify-center">
                <img
                  src={mnxImage}
                  alt="Logo de MNX Online"
                  className="h-10 w-10 md:h-12 md:w-12 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">MNX Online</h3>

                <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
                  Marzo 2023 – Mayo 2023 · Prácticas (3 meses)
                </span>
              </div>

              <p className="mt-4 text-neutral-300 leading-relaxed text-justify">
                Durante mis prácticas en{" "}
                <span className="font-semibold">MNX Online</span> participé en
                proyectos de desarrollo para empresas de distintos sectores, lo
                que me permitió adaptarme a diferentes necesidades y contextos.
              </p>

              <ul className="mt-4 space-y-2 text-neutral-300 leading-relaxed">
                <li>
                  <span className="font-semibold">Frontend:</span> comencé
                  traduciendo componentes de Ionos y más adelante desarrollé{" "}
                  <span className="font-semibold">
                    interfaces limpias y usables con Angular
                  </span>{" "}
                  para distintos proyectos.
                </li>
                <li>
                  <span className="font-semibold">Backend:</span> trabajé con{" "}
                  <span className="font-semibold">NestJS</span> creando{" "}
                  <span className="font-semibold">APIs con lógica compleja</span>{" "}
                  y desarrollando <span className="font-semibold">seeders</span>{" "}
                  que automatizaban la inserción de datos desde ficheros Excel.
                </li>
                <li>
                  Apliqué <span className="font-semibold">metodologías ágiles</span>{" "}
                  para mejorar eficiencia, productividad y colaboración en equipo.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
