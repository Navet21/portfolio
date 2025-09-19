import {
  SiPhp,
  SiLaravel,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNestjs,
  SiPrisma,
  SiDocker,
  SiGraphql,
  SiGit,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTestinglibrary,
} from "react-icons/si";

const skills = [
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Testing (Pest/Jest)", icon: SiTestinglibrary, color: "#CC0000" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-neutral-950">
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Trabajo con las siguientes tecnologías:
        </h2>
        <div className="mx-auto mt-3 h-1 w-full bg-purple-500 rounded" />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
          {skills.map(({ name, icon: Icon, color }) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <Icon className="h-12 w-12 transition" style={{ color }} />
              <span className="text-neutral-300 font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
