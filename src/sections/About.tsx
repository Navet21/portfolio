const base = import.meta.env.BASE_URL;

const About = () => {
  return (
    <section id="about" className="relative w-full bg-neutral-950">
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white">
          Sobre mí
        </h2>
        <div className="mx-auto mt-3 h-1 w-full bg-purple-500 rounded" />

        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src={`${base}about.jpg`}
              alt="Foto de Pablo Santana Suárez"
              className="
                w-56 md:w-64
                aspect-[3/4]
                object-cover
                object-top
                rounded-xl
                shadow-lg
              "
            />
          </div>

          <div className="text-neutral-200 space-y-5 leading-relaxed text-base md:text-lg">
            <p>
              Soy desarrollador <span className="font-semibold">fullstack junior</span> con experiencia
              construyendo aplicaciones completas, desde la interfaz hasta la lógica de negocio y el despliegue.
            </p>

            <p>
              Trabajo principalmente con <span className="font-semibold">React</span>,{" "}
              <span className="font-semibold">NestJS</span>,{" "}
              <span className="font-semibold">TypeScript</span> y{" "}
              <span className="font-semibold">Docker</span>, desarrollando soluciones mantenibles y preparadas para crecer.
            </p>

            <p>
              Tengo mayor afinidad por la parte de <span className="font-semibold">backend</span>, APIs y arquitectura,
              pero también puedo trabajar en <span className="font-semibold">frontend</span> y en entornos fullstack.
            </p>

            <p>
              Además, tengo experiencia desplegando aplicaciones reales en{" "}
              <span className="font-semibold">VPS</span>, configurando{" "}
              <span className="font-semibold">Docker Compose</span>,{" "}
              <span className="font-semibold">HTTPS</span> y flujos de{" "}
              <span className="font-semibold">CI/CD</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;