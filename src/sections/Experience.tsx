const Experience = () => {
  return (
    <section id="experiencia" className="relative w-full border-t border-white/10">
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold">Experiencia</h2>
        <div className="mx-auto mt-3 h-1 w-40 bg-purple-500 rounded" />

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
              <p className="text-sm text-neutral-400">Marzo 2023 - Mayo 2023 (3 meses, prácticas)</p>

            <p className="mt-3 text-neutral-300 leading-relaxed">
              Durante mis prácticas como <span className="font-semibold">Full Stack Developer Junior</span>, 
              participé en proyectos para empresas de distintos sectores, lo que me permitió adaptarme a 
              diferentes necesidades y contextos.  
              En el <span className="font-semibold">frontend</span>, trabajé con 
              <span className="ml-1 font-semibold">Angular</span> desarrollando interfaces limpias y usables 
              para mejorar la experiencia de usuario.  
              En el <span className="font-semibold">backend</span>, utilicé 
              <span className="ml-1 font-semibold">NestJS</span> para crear APIs complejas y desarrollar 
              <span className="ml-1 font-semibold">seeders</span> que facilitaron la inserción y manejo de datos.  
              Además, aprendí y apliqué <span className="font-semibold">metodologías de trabajo ágiles</span> 
              que me ayudaron a ser más eficiente, productivo y a colaborar mejor en equipo.
            </p>

              <a
                href="https://mnxonline.com/es/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-purple-400 hover:text-purple-300 underline underline-offset-2"
              >
                Visitar MNX Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
