import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "BioCycle",
    description:
      "BioCycle es una aplicación educativa desarrollada con un compañero. Su objetivo es llevar el control de los registros del compostaje, ayudando al usuario a obtener mejores resultados en el proceso. El back esta hecho con Laravel , usando Orion para la creación todos los endpoints en modo API, el front está hecho con React. Todo fue desplegado en un VPS para que sea en un entorno más sólido y cercano a lo que sería producción",
    images : [
      new URL("/BioCycle/Composteras.png", import.meta.env.BASE_URL).href,
      new URL("/BioCycle/Formulario.png", import.meta.env.BASE_URL).href,
      new URL("/BioCycle/Login.png", import.meta.env.BASE_URL).href,
      new URL("/BioCycle/Temperatura.png", import.meta.env.BASE_URL).href,
  ],
    techs: ["Laravel", "React", "Vps"],
    demoUrl: "https://biocycle.informaticamajada.es/",
    privateCode: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-neutral-950">
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold">Proyectos</h2>
        <div className="mx-auto mt-3 h-1 w-full bg-purple-500 rounded" />

        {/* En lugar de grid → stack vertical */}
        <div className="mt-12 space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
