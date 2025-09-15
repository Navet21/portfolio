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
  // Backend
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },

  // Fullstack con TypeScript
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "NestJS", icon: SiNestjs },
  { name: "Prisma", icon: SiPrisma },

  // Tooling & Apoyos
  { name: "Docker", icon: SiDocker },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Git", icon: SiGit },
  { name: "Testing (Pest/Jest)", icon: SiTestinglibrary },

  // Bases de datos
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full border-t border-white/10">
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold">Skills</h2>
        <div className="mx-auto mt-3 h-1 w-40 bg-purple-500 rounded" />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
          {skills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-3 group"
            >
              <Icon className="h-12 w-12 text-neutral-400 group-hover:text-purple-400 transition" />
              <span className="text-neutral-300 group-hover:text-white transition font-medium">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
