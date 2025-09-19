const Experience = () => {
  return (
    <section id="experiencia"className="relative w-full bg-neutral-950">
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold">Experiencia</h2>
        <div className="mx-auto mt-3 h-1 w-full bg-purple-500 rounded" />

        <div className="mt-12 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <img
                src="/mnx.png" 
                alt="MNX Online logo"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="flex-1">
            <h3 className="text-xl font-semibold text-white">MNX Online</h3>
            <p className="text-sm text-neutral-400">
              Marzo 2023 - Mayo 2023 (3 meses, prácticas)
            </p>

            <p className="mt-3 text-neutral-300 leading-relaxed">
              Durante mis prácticas en <span className="font-semibold">MNX Online</span> participé en proyectos de desarrollo para empresas de distintos sectores, lo que me permitió adaptarme a diferentes necesidades y contextos.  
              En el <span className="font-semibold">front</span>, comencé traduciendo componentes de Ionos y más adelante desarrollé <span className="font-semibold">interfaces limpias y usables con Angular</span> para distintos proyectos.  
              En el <span className="font-semibold">back</span>, trabajé con <span className="font-semibold">NestJS</span> creando <span className="font-semibold">APIs con lógica compleja</span> y desarrollando <span className="font-semibold">seeders</span> que automatizaban la inserción de datos desde ficheros Excel.  
              Además, aprendí y apliqué <span className="font-semibold">metodologías ágiles</span> que me ayudaron a ser más eficiente, productivo y a colaborar mejor en equipo.
            </p>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
