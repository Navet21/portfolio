import ProjectCard from "../components/ProjectCard";

const base = import.meta.env.BASE_URL;

const projects = [
  {
    title: "BoardLab",
    description:
      "Aplicación web de entrenamiento de poker centrada en el razonamiento real en mesa.\n\n• Análisis interactivo de boards y toma de decisiones\n• Backend en NestJS con arquitectura modular orientada a dominio\n• Frontend en React consumiendo una API desacoplada\n• Sistema dockerizado y desplegado en VPS con Caddy y CI/CD\n\nDemuestra: desarrollo fullstack, lógica de negocio compleja y despliegue en producción.",
    images: [
      `${base}BoardLab/Home.png`,
      `${base}BoardLab/OutsTrainer.png`,
      `${base}BoardLab/TextureTrainer.png`,
    ],
    techs: ["NestJS", "React", "Docker", "Caddy", "CI/CD", "VPS"],
    demoUrl: "https://board-lab.navet21dev.es",
    codeUrl: "https://github.com/Navet21/poker-training-frontend",
    codeUrl2: "https://github.com/Navet21/poker-training-backend",
    featured: true,
  },
  {
    title: "BioCycle",
    description:
      "Aplicación web para la gestión de procesos de compostaje en un entorno educativo, desarrollada en equipo.\n\n• Desarrollo fullstack con Laravel y React\n• API REST construida con Laravel Orion\n• Gestión de registros, formularios y visualización de datos\n• Despliegue en VPS en un entorno similar a producción\n\nDemuestra: trabajo en equipo, desarrollo de APIs y estructura fullstack en un caso práctico.",
    images: [
      `${base}BioCycle/Composteras.png`,
      `${base}BioCycle/Formulario.png`,
      `${base}BioCycle/Login.png`,
      `${base}BioCycle/Temperatura.png`,
    ],
    techs: ["Laravel", "React", "Orion", "VPS"],
    demoUrl: "https://biocycle.informaticamajada.es/",
    privateCode: true,
  },
  {
    title: "Pigeons",
    description:
      "Aplicación web orientada a la gestión de datos y resultados en competiciones de palomas.\n\n• Registro de resultados, estadísticas y datos de pedigree\n• Backend en NestJS con API desacoplada\n• Frontend en React para consulta y gestión de información\n• Sistema dockerizado y desplegado en VPS\n• Proyecto real actualmente en evolución y mejora\n\nActualmente en mejora funcional y visual.",
    images: [
      `${base}pigeons/login.png`,
      `${base}pigeons/palomasStats.png`,
      `${base}pigeons/pedigree.png`,
    ],
    techs: ["NestJS", "React", "Docker", "VPS"],
    demoUrl: "https://pigeons.navet21dev.es/",
    privateCode: true,
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-neutral-950">
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Proyectos</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400">
          Aplicaciones desarrolladas y desplegadas con foco en arquitectura, lógica
          de negocio y entornos reales.
        </p>
        <div className="mx-auto mt-3 h-1 w-full rounded bg-purple-500" />

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