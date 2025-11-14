export type KnowledgeEntry = {
  technology: string;
  percentage: number;
  classificationLabel: string;
  badge: string;
};

export type KnowledgeSkillType = "hard" | "soft";

export const KNOWLEDGE_SKILL_OPTIONS: { value: KnowledgeSkillType; label: string }[] = [
  { value: "hard", label: "Hard skills" },
  { value: "soft", label: "Soft skills" },
];

export type KnowledgeCategory = {
  id: string;
  title: string;
  description: string;
  color: string;
  filterLabel: string;
  skillType: KnowledgeSkillType;
  entries: KnowledgeEntry[];
};

export const KNOWLEDGE_CATEGORIES: KnowledgeCategory[] = [
  {
    id: "knowledge-base-web",
    title: "Base Web",
    description: "Fundamentos solidos para qualquer interface front-end.",
    color: "#4C9FFF",
    filterLabel: "Base",
    skillType: "hard",
    entries: [
      { technology: "HTML", percentage: 89, classificationLabel: "Avancado", badge: "*" },
      { technology: "CSS", percentage: 83, classificationLabel: "Avancado", badge: "*" },
      { technology: "JavaScript (ES6+)", percentage: 86, classificationLabel: "Avancado", badge: "*" },
      { technology: "TypeScript", percentage: 92, classificationLabel: "Especialista", badge: "*" },
    ],
  },
  {
    id: "knowledge-frameworks",
    title: "Frameworks",
    description: "Experiencia em ecosistema React para web e mobile.",
    color: "#7AE4FF",
    filterLabel: "Frameworks",
    skillType: "hard",
    entries: [
      { technology: "React.js", percentage: 88, classificationLabel: "Avancado", badge: "*" },
      { technology: "Next.js", percentage: 80, classificationLabel: "Avancado", badge: "*" },
      { technology: "React Native", percentage: 75, classificationLabel: "Intermediario alto", badge: "*" },
    ],
  },
  {
    id: "knowledge-styling",
    title: "Estilizacao / UI",
    description: "Criacao de interfaces escalaveis com diferentes abordagens de estilo.",
    color: "#FFD778",
    filterLabel: "Estilizacao",
    skillType: "hard",
    entries: [
      { technology: "Tailwind", percentage: 60, classificationLabel: "Intermediario", badge: "*" },
      { technology: "Chakra UI", percentage: 87, classificationLabel: "Avancado", badge: "*" },
      { technology: "Styled Components / Sass / CSS Modules", percentage: 82, classificationLabel: "Avancado", badge: "*" },
    ],
  },
  {
    id: "knowledge-state",
    title: "Gerenciamento de Estado",
    description: "Modelagem de dados reativos em projetos complexos.",
    color: "#A78BFA",
    filterLabel: "Estado",
    skillType: "hard",
    entries: [
      { technology: "Context API", percentage: 95, classificationLabel: "Especialista", badge: "*" },
      { technology: "Zustand / Redux", percentage: 40, classificationLabel: "Intermediario teorico", badge: "*" },
    ],
  },
  {
    id: "knowledge-quality",
    title: "Qualidade e Testes",
    description: "Garantia de estabilidade focada em testes e qualidade de codigo.",
    color: "#38BDF8",
    filterLabel: "Testes",
    skillType: "hard",
    entries: [
      { technology: "Jest / Vitest / Testing Library", percentage: 75, classificationLabel: "Intermediario alto", badge: "*" },
      { technology: "Cypress", percentage: 60, classificationLabel: "Intermediario", badge: "*" },
      { technology: "ESLint / Prettier", percentage: 95, classificationLabel: "Especialista", badge: "*" },
    ],
  },
  {
    id: "knowledge-integrations",
    title: "Integracoes e Dados",
    description: "Integracao com APIs modernas e caching inteligente.",
    color: "#F97316",
    filterLabel: "Ferramentas",
    skillType: "hard",
    entries: [
      { technology: "REST / Axios", percentage: 90, classificationLabel: "Avancado", badge: "*" },
      { technology: "GraphQL", percentage: 40, classificationLabel: "Intermediario teorico", badge: "*" },
      { technology: "TanStack Query", percentage: 45, classificationLabel: "Intermediario", badge: "*" },
    ],
  },
  {
    id: "knowledge-deploy",
    title: "Deploy e Build",
    description: "Ciclos completos de entrega e automacao.",
    color: "#22D3EE",
    filterLabel: "Deploy",
    skillType: "hard",
    entries: [
      { technology: "Vercel", percentage: 95, classificationLabel: "Especialista", badge: "*" },
      { technology: "Netlify / Firebase Hosting", percentage: 40, classificationLabel: "Intermediario teorico", badge: "*" },
    ],
  },
  {
    id: "knowledge-ui-extra",
    title: "Formularios e UX",
    description: "Detalhes que elevam a experiencia e confiabilidade.",
    color: "#10B981",
    filterLabel: "Formularios",
    skillType: "hard",
    entries: [
      { technology: "Framer Motion", percentage: 55, classificationLabel: "Intermediario", badge: "*" },
      { technology: "React Hook Form", percentage: 90, classificationLabel: "Avancado", badge: "*" },
      { technology: "Zod", percentage: 85, classificationLabel: "Avancado", badge: "*" },
    ],
  },
  {
    id: "knowledge-architecture",
    title: "Arquitetura e Performance",
    description: "Estrategias de componentizacao e otimizacao continua.",
    color: "#14B8A6",
    filterLabel: "Arquitetura",
    skillType: "hard",
    entries: [
      { technology: "Padroes, componentizacao, otimizacao", percentage: 96, classificationLabel: "Especialista", badge: "*" },
    ],
  },
  {
    id: "knowledge-soft-autogestao",
    title: "Autogestao",
    description: "Alta autonomia, foco e senso de entrega.",
    color: "#F4A261",
    filterLabel: "Autogestao",
    skillType: "soft",
    entries: [
      { technology: "Disciplina e rotina", percentage: 92, classificationLabel: "Dominio alto", badge: "AUTO" },
    ],
  },
  {
    id: "knowledge-soft-resiliencia",
    title: "Resiliencia",
    description: "Racional e estavel, resolve desafios com calma.",
    color: "#EF476F",
    filterLabel: "Resiliencia",
    skillType: "soft",
    entries: [
      { technology: "Controle sob pressao", percentage: 90, classificationLabel: "Solidez emocional", badge: "RESI" },
    ],
  },
  {
    id: "knowledge-soft-colaboracao",
    title: "Colaboracao",
    description: "Respeitoso e lider tecnico quando necessario.",
    color: "#4ADE80",
    filterLabel: "Colaboracao",
    skillType: "soft",
    entries: [
      { technology: "Comunicacao em equipe", percentage: 91, classificationLabel: "Confianca elevada", badge: "COLA" },
    ],
  },
  {
    id: "knowledge-soft-produtividade",
    title: "Produtividade",
    description: "Rotina solida e consistente em blocos de foco.",
    color: "#38BDF8",
    filterLabel: "Produtividade",
    skillType: "soft",
    entries: [
      { technology: "Organizacao e blocos de foco", percentage: 88, classificationLabel: "Cadencia constante", badge: "PROD" },
    ],
  },
  {
    id: "knowledge-soft-solucao",
    title: "Solucao de Problemas",
    description: "Autodidata, entende o por que das solucoes.",
    color: "#A855F7",
    filterLabel: "Solucao",
    skillType: "soft",
    entries: [
      { technology: "Criatividade e analise", percentage: 93, classificationLabel: "Insight rapido", badge: "SOLV" },
    ],
  },
  {
    id: "knowledge-soft-visao",
    title: "Visao de Negocio",
    description: "Pensa em ROI, usabilidade e resultado.",
    color: "#FACC15",
    filterLabel: "Negocio",
    skillType: "soft",
    entries: [
      { technology: "Mentalidade de dono", percentage: 97, classificationLabel: "Especialista", badge: "BIZZ" },
    ],
  },
  {
    id: "knowledge-soft-aprendizado",
    title: "Aprendizado",
    description: "Curioso, explora tendencias e aprende rapido.",
    color: "#FB7185",
    filterLabel: "Aprendizado",
    skillType: "soft",
    entries: [
      { technology: "Adaptabilidade e inovacao", percentage: 94, classificationLabel: "Curva acelerada", badge: "LEARN" },
    ],
  },
  {
    id: "knowledge-soft-comunicacao",
    title: "Comunicacao",
    description: "Alta inteligencia emocional e influencia positiva.",
    color: "#93C5FD",
    filterLabel: "Comunicacao",
    skillType: "soft",
    entries: [
      { technology: "Persuasao e empatia", percentage: 95, classificationLabel: "Impacto alto", badge: "COMM" },
    ],
  },
];
