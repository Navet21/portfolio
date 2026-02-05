import ProjectCard from "../components/ProjectCard";


const base = import.meta.env.BASE_URL;
const projects = [
  {
    title: "BioCycle",
    description:
      "BioCycle es una aplicación educativa desarrollada con un compañero. Su objetivo es llevar el control de los registros del compostaje, ayudando al usuario a obtener mejores resultados en el proceso. El back esta hecho con Laravel , usando Orion para la creación todos los endpoints en modo API, el front está hecho con React. Todo fue desplegado en un VPS para que sea en un entorno más sólido y cercano a lo que sería producción",
    images: [
      `${base}BioCycle/Composteras.png`,
      `${base}BioCycle/Formulario.png`,
      `${base}BioCycle/Login.png`,
      `${base}BioCycle/Temperatura.png`,
    ],
    techs: ["Laravel", "React", "Vps"],
    demoUrl: "https://biocycle.informaticamajada.es/",
    privateCode: true,
  },
  {
  title: "BoardLab",
  description:
    "Aplicación de entrenamiento de poker orientada al razonamiento real en mesa. El sistema presenta situaciones de juego y evalúa decisiones del usuario, explicando el porqué de cada resultado en lugar de limitarse a cálculos de equity. El backend está desarrollado en NestJS siguiendo una arquitectura modular y orientada a dominio, con lógica propia para el análisis de manos y sesiones de entrenamiento. El frontend en React consume la API y se centra en una experiencia clara y didáctica. Todo el sistema está dockerizado y desplegado en un VPS con Caddy como reverse proxy y CI/CD automatizado mediante GitHub Actions.",
  images: [
    `${base}BoardLab/Home.png`,
    `${base}BoardLab/OutsTrainer.png`,
    `${base}BoardLab/TextureTrainer.png`
  ],
  techs: ["NestJS", "React", "Docker", "Caddy", "CI/CD"],
  demoUrl: "https://board-lab.navet21dev.es",
  codeUrl: "https://github.com/Navet21/poker-training-frontend",
  codeUrl2: "https://github.com/Navet21/poker-training-backend",
  featured: true,
}


];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-neutral-950">
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold">Proyectos</h2>
        <div className="mx-auto mt-3 h-1 w-full bg-purple-500 rounded" />

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
