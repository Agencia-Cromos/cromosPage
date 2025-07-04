import { StyleProjectsList } from "./StyleProjectsList";
import Catalogo from "../../../assets/projects/Catalogo.png";
import PsyIa from "../../../assets/projects/PsyIa.png";
import Profit from "../../../assets/projects/Profit.png";
import SistemaCartorio from "../../../assets/projects/SistemaCartorio.png";
import VivaSaude from "../../../assets/projects/VivaSaude.png";
import Portfolio from "../../../assets/projects/Portfolio.png";
import AppCartorio from "../../../assets/projects/AppCartorio.png";


const projects = [
  {
    title: "Portfolio",
    layer: "front-end",
    description: "Template de portfólio pessoal com foco em storytelling, funil de atenção e apresentação estratégica de projetos reais.",
    technology: "Next.js, TypeScript, Chakra UI",
    site: "https://agenciacromos.com.br/nataspitz",
    code: "https://github.com/Nataspitz/portfolio-nataspitz", 
    image: Portfolio, 
  },
  {
    title: "Viva Saúde",
    layer: "front-end",
    description: "Site institucional para evento comunitário com foco em SEO, captação de patrocinadores e storytelling visual.",
    technology: "Next.js, Chakra UI, React Hook Form, Vercel",
    site: "https://viva-nine.vercel.app/",
    image: VivaSaude,
  },
  {
    title: "App – Apostilamento na Palma da Mão",
    layer: "mobile",
    description: "Aplicativo oficial do Cartório 5º Ofício para acompanhar processos, enviar documentos, resolver pendências e interagir via chat.",
    technology: "React Native, Expo",
    site: "https://play.google.com/store/apps/details?id=br.com.appcartorio5df.apostilamento",
    image: AppCartorio,
  },
  {
    title: "Sistema Web – Cartório 5º Ofício",
    layer: "front-end",
    description: "Dashboard interativo com Kanban, controle financeiro, uploads, chat e gerenciamento de usuários, integrado ao app mobile.",
    technology: "Next.js, Chakra UI, TypeScript",
    image: SistemaCartorio,
  },
  {
    title: "PSAI-A – Plataforma de Saúde com IA",
    layer: "front-end",
    description: "Interface para assistente de saúde mental com IA conversacional e voz, focado em empatia, UX emocional e fluidez.",
    technology: "Next.js, Chakra UI",
    image: PsyIa,
  },
  {
    title: "Profit System",
    layer: "front-end",
    description: "Sistema compacto de gestão empresarial para PMEs com foco em simplicidade e automação.",
    technology: "React.js, Electron.js",
    code: "https://github.com/Kenzie-Academy-Brasil-Developers/m4-kimoveis_proj-final-Nataspitz",
    image: Profit,
  },
  {
    title: "Cattálogo Inteligente",
    layer: "front-end",
    description: "Catálogo de produtos com IA, automação de mensagens e foco em conversão para delivery e e-commerce.",
    technology: "React.js, Express.js",
    image: Catalogo,
  },
];


export function ProjectsList() {
  return (
    <StyleProjectsList>
      {projects.map((project, index) => (
        <li key={index}>
          <h2>{project.title}</h2>
          <div className="tech">
            <p>Tech:</p>
            <span>{project.technology}</span>
          </div>
          <figure>
            <img src={project.image} alt={project.title} />
          </figure>
          <div className="description">
            <p className="description">{project.description}</p>
          </div>
        </li>
      ))}
    </StyleProjectsList>
  );
}