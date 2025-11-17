import { ProjectCard } from "./ProjectCard";

type Project = {
  title: string;
  description: string;
  stack: string;
};

const PROJECTS: Project[] = [
  {
    title: "PSY-IA — Plataforma de Saúde com IA",
    description:
      "Interface para assistente psicológico com IA conversacional e voz. Foco em empatia, UX emocional e fluidez.",
    stack: "Next.js, Chakra UI",
  },
  {
    title: "Sistema Web — Cartório 5º Ofício",
    description: "Dashboard com Kanban, controle financeiro, chat e gerenciamento de usuários.",
    stack: "Next.js, TypeScript",
  },
  {
    title: "Viva Saúde",
    description: "Site institucional otimizado para SEO e performance de eventos comunitários.",
    stack: "Next.js, Chakra UI",
  },
  {
    title: "Profit System",
    description: "Sistema desktop de gestão empresarial simples e eficiente para PMEs.",
    stack: "React.js, Electron.js",
  },
  {
    title: "Catálogo Inteligente",
    description: "Catálogo de produtos com IA e automação de mensagens para e-commerce.",
    stack: "React.js, Express.js",
  },
];

export function ProjectsShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          stack={project.stack}
          index={index}
        />
      ))}
    </div>
  );
}
