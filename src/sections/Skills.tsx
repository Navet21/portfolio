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

type Skill = {
  name: string;
  icon: any;
  color: string;
};

const backend: Skill[] = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Testing (Jest / Pest)", icon: SiTestinglibrary, color: "#CC0000" },
];

const infra: Skill[] = [
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

const frontend: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
];

const databases: Skill[] = [
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const legacy: Skill[] = [
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
];

function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-semibold text-white text-center">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center">
        {skills.map(({ name, icon: Icon, color }) => (
          <div key={name} className="flex flex-col items-center gap-3">
            <Icon className="h-12 w-12" style={{ color }} />
            <span className="text-neutral-300 font-medium">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-neutral-950">
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Tecnologías
        </h2>
        <div className="mx-auto mt-3 h-1 w-full bg-purple-500 rounded" />

        <div className="mt-14 grid gap-16">
          <SkillGroup title="Backend" skills={backend} />
          <SkillGroup title="Infra / DevOps" skills={infra} />
          <SkillGroup title="Frontend" skills={frontend} />
          <SkillGroup title="Bases de datos" skills={databases} />
          <SkillGroup title="Experiencia previa" skills={legacy} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
