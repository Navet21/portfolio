

const base = import.meta.env.BASE_URL;

const About = () => {
  return (
    <section id="about" className="relative w-full bg-neutral-950">
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white">Sobre mi</h2>
        <div className="mx-auto mt-3 h-1 w-full bg-purple-500 rounded" />

        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src={`${base}/placeholder.png`}
              alt="Tu foto"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="text-neutral-100 space-y-6 leading-relaxed">
            <p>
              Soy un <span className="font-semibold">Programador Junior Full Stack</span> que creció 
              rodeado de consolas y ordenadores, lo que despertó mi curiosidad por la tecnología. 
              Animado por amigos, probé la programación y descubrí que era lo mío, así que decidí 
              formarme en el <span className="font-semibold">Grado Superior de Desarrollo de Aplicaciones Web</span>.
            </p>

            <p>
              Aunque disfruto tanto del <span className="font-semibold">frontend</span> como del{" "}
              <span className="font-semibold">backend</span>, con el tiempo me he sentido más atraído 
              por el backend, sin dejar de lado la parte visual. Sigo aprendiendo de forma autodidacta 
              y busco mejorar cada día para ser lo más profesional posible.
            </p>

            <p>
              Me considero una persona <span className="font-semibold">seria, perfeccionista y comprometida</span>, 
              que valora el trabajo en equipo y siempre intenta aportar su granito de arena para encontrar 
              las mejores soluciones.
            </p>

            <p>
              Fuera del teclado, me gusta <span className="font-semibold">aprender idiomas</span>, 
              <span className="font-semibold"> jugar a videojuegos</span> y 
              <span className="font-semibold"> viajar para conocer lugares nuevos</span>. 
              Creo que estas aficiones refuerzan mi curiosidad y mi capacidad de adaptación.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
