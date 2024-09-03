import { StyleProjectsList } from "./StyleProjectsList";

// Importações diretas das imagens
import Contacts from "../../../assets/Contacts.png";
import Catalogo from "../../../assets/Catalogo.png";
import Profit from "../../../assets/Profit.png";
import Portfolio from "../../../assets/Portfolio.png";
import Empresas from "../../../assets/Empresas.png";
import Jobs from "../../../assets/Jobs.png";

// Objeto nativo de JavaScript contendo os dados dos projetos
const projects = [
  {
    title: "Portfolio",
    layer: "front-end",
    description: "Um template de portfolio para devs focado em um funil de atenção poderoso.",
    technology: "JavaScript",
    code: "https://github.com/Kenzie-Academy-Brasil-Developers/Kenzie-Academy-Brasil-Developers-M1-Ecommerce.-Nataspitz",
    site: "https://kenzie-academy-brasil-developers.github.io/Kenzie-Academy-Brasil-Developers-M1-Ecommerce.-Nataspitz/",
    image: Portfolio, // Imagem importada diretamente
  },
  {
    title: "Kenzie Empresas",
    layer: "front-end",
    description: "A complete dashboard integrated into an API for managing employees and companies.",
    technology: "JavaScript",
    code: "https://github.com/Kenzie-Academy-Brasil-Developers/Kenzie-Academy-Brasil-Developers-m2-projeto-Nataspitz",
    site: "https://kenzie-academy-brasil-developers.github.io/Kenzie-Academy-Brasil-Developers-m2-projeto-Nataspitz/",
    image: Empresas, // Imagem importada diretamente
  },
  {
    title: "Jobs",
    layer: "front-end",
    description: "Uma plataforma social para prgramadores e empresas com a possibilidade de extender suas promoções e buscas por vagas em desenvolvedores",
    technology: "React.js",
    code: "https://github.com/Kenzie-Academy-Brasil-Developers/https-github.com-Kenzie-Academy-Brasil-Developers-react-entrega-kenzie-hub-Nataspitz",
    site: "https://my-react-app-xi-six.vercel.app/",
    image: Jobs, // Imagem importada diretamente
  },
  {
    title: "Profit System",
    layer: "Front end",
    description: "Um gerenciador empresarial compacto e completo para pequenos e medios negócios. Seu maior foco é facilitar toda o uso e gesto com poucos cliques",
    technology: "React.js, Electron.js",
    code: "https://github.com/Kenzie-Academy-Brasil-Developers/m4-kimoveis_proj-final-Nataspitz",
    image: Profit, // Imagem importada diretamente
  },
  {
    title: "Cattálogo Inteligente",
    layer: "Front-end",
    description: "Um catalogo que destaca o melhor do produto com integração com inteligência artificial e messagens automaticas. Seu objetico e cobrir a demaqnda de clientes e fechar os melhores pedidos.",
    technology: "React.js, Express.js",
    code: "https://github.com/Nataspitz/M5-Peojeto-Final-Kanvas-Nataspitz",
    image: Catalogo, // Imagem importada diretamente
  },
  {
    title: "Kenzie Contacts",
    layer: "front-end",
    description: "Um gerenciador de dados robusto com automação de contatdos e lista de leads podendo ser integrada a qualuqer sistema de email marketing.",
    technology: "Next.js, Express.js",
    code: "https://github.com/Kenzie-Academy-Brasil-Developers/M6-tech1-projeto-full-stack-Nataspitz",
    site: "https://m6-tech1-projeto-full-stack-nataspitz-nataspitz-kenzie.vercel.app/",
    image: Contacts, // Imagem importada diretamente
  },
];

// Função para renderizar a lista de projetos
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