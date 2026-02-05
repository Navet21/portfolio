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
              Soy desarrollador con foco en <span className="font-semibold">backend</span> y en la
              construcción de aplicaciones completas, desde la lógica de negocio hasta el
              despliegue en producción.
            </p>

            <p>
              Trabajo principalmente con <span className="font-semibold">NestJS</span>,{" "}
              <span className="font-semibold">TypeScript</span> y{" "}
              <span className="font-semibold">Docker</span>, diseñando APIs estructuradas,
              mantenibles y pensadas para crecer. Me interesa especialmente entender el producto
              y tomar decisiones técnicas con criterio, no solo hacer que “funcione”.
            </p>

            <p>
              Tengo experiencia desplegando aplicaciones reales en{" "}
              <span className="font-semibold">VPS</span>, configurando{" "}
              <span className="font-semibold">Docker Compose</span>,{" "}
              <span className="font-semibold">HTTPS</span> y flujos de{" "}
              <span className="font-semibold">CI/CD</span> para automatizar los despliegues y reducir
              errores.
            </p>

            <p>
              Aunque tengo base sólida en <span className="font-semibold">frontend con React</span>,
              mi objetivo es seguir profundizando en backend, arquitectura y buenas prácticas
              profesionales, construyendo software robusto y bien diseñado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
