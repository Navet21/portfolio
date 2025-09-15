const About = () => {
  return (
    <section
      id="sobre-mi"
      className="relative w-full border-t border-white/10"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30
                   [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]"
        style={{
          backgroundImage:
            `linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
             linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)`,
          backgroundSize: "40px 40px, 40px 40px",
          backgroundPosition: "-1px -1px, -1px -1px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold">Sobre mí</h2>
        <div className="mx-auto mt-3 h-1 w-40 bg-purple-500 rounded" />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm uppercase tracking-wide text-neutral-300 mb-2">Perfil</div>
            <p className="text-neutral-300 leading-relaxed">
              Soy desarrollador backend con experiencia en Laravel y aprendizaje activo de NestJS.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm uppercase tracking-wide text-neutral-300 mb-2">Lo que puedo aportar</div>
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li>APIs REST y GraphQL</li>
              <li>ORMs y bases de datos</li>
              <li>Docker y entornos reproducibles</li>
              <li>Colaboración con frontend</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
