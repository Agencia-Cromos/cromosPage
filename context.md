# Project Context

## Tecnologias usadas
- Framework: Next.js (App Router)
- Estilo: Tailwind CSS
+ Animacoes: Framer Motion em pontos especificos

## Estrutura de pastas (alto nivel)
- `/src/app`: paginas Next.js, layout raiz e arquivos especiais (ex.: `favicon.ico`).
  - `/src/app/layout.tsx`: layout raiz (HTML, fontes Inter/Outfit, estilos globais e providers).
  - `/src/app/page.tsx`: landing page publica principal.
  - `/src/app/fundador`: rota dedicada ao fundador.
    - `/src/app/fundador/layout.tsx`: layout da rota do fundador (metadata especifica).
    - `/src/app/fundador/page.tsx`: pagina que orquestra as secoes do fundador.
  - `/src/app/projetos`: rota de portfolio da agencia.
    - `/src/app/projetos/page.tsx`: listagem geral de projetos.
    - `/src/app/projetos/[id]/page.tsx`: detalhe de cada projeto (usa dados de `projects.json`).
- `/src/assets`: imagens, videos e svgs usados nas telas.
- `/src/files`: arquivos de dados estaticos (ex.: `projects.json`).
- `/src/components/common`: atomos compartilhados (header, logo, botoes, player de audio, container, etc.).
- `/src/components/layouts/landingPage`: organismos de pagina para a landing (HeroSection, AboutSection, SolutionsSection, ProjectSocialSection, FooterSection, etc.).
- `/src/components/layouts/fundador`: organismos de pagina para o fundador (HeroSection, AboutSection, KnowledgeSection, ProjectsSection, ConnectionSection, ContactSection, FooterSection).
- `/src/components/layouts/projetos`: organismos de pagina para a area de projetos (ProjectsHeroSection, ProjectsHubSection, ProjectsFooterSection).
- `/src/components/fragments/landingPage`: fragmentos/moleculas especificas da landing (hero, cards de manifesto, nav/footer, partes do projeto social).
- `/src/components/fragments/fundador`: fragmentos/moleculas especificas do fundador (hero, about, knowledge, projects, contact, sideBar, footer).
- `/src/components/fragments/projetos`: fragmentos usados nas telas de projetos (cards, status, galeria de imagens, footer de projetos).
- `/src/utils`: funcoes utilitarias (ex.: `scrollToSection`).

## Convencoes de escrita
- Componentes React (arquivos e exports) usam PascalCase.
- Hooks, funcoes auxiliares, variaveis e constantes locais usam camelCase.
- Objetos de configuracao e listas estaticas usam UPPER_SNAKE_CASE quando exportados.
- Classes CSS utilitarias seguem padroes Tailwind e devem permanecer em lowercase.

## Paginas principais
- `src/app/layout.tsx`: define HTML raiz, aplica fontes Google, importa `globals.css` e registra o favicon via metadata/icons.
- `src/app/page.tsx`: landing page da agencia, composta por secoes de `layouts/landingPage` e fragments de hero, manifesto, solutions, projeto social e footer.
- `src/app/fundador/layout.tsx`: metadata dedicada para a rota do fundador (titulo/descricao da pagina pessoal).
- `src/app/fundador/page.tsx`: monta a pagina do fundador combinando as secoes de `layouts/fundador/sections` e a navegacao lateral `FundadorSidebar` (hero, about, knowledge, projects, connection, contact, footer).
- `src/app/projetos/page.tsx`: lista de projetos com hero (`ProjectsHeroSection`), hub de projetos (`ProjectsHubSection`) e footer especifico de projetos.
- `src/app/projetos/[id]/page.tsx`: pagina de detalhe de projeto, usando dados de `projects.json` e fragments de galeria, status e tech stack.

## Design atomico (common, fragments, layouts)
- `common`: atomos reutilizaveis (botoes de CTA, Header, logo, containers, player de audio, toggles de menu).
- `fragments`: moleculas e pequenos organismos locais a cada dominio (landingPage, fundador, projetos), por exemplo:
  - cards de manifesto/diferenciais (`AboutDifferentialCard` na landing);
  - cards de solutions (`SolutionCard`);
  - cards de highlights, stack e audio do fundador (`AboutHighlightCard`, `AboutTechStackGrid`, `AboutAtlasAudioBlock`);
  - cards de projeto (`ProjectCard` para o fundador, fragments em `fragments/projetos/common` para o hub de projetos);
  - cards de contato (`ContactMethodCard`) e soft skills (`SoftSkillCard`).
- `layouts`: organismos que representam secoes completas de pagina, sempre agrupando fragments (HeroSection, AboutSection, SolutionsSection, KnowledgeSection, ProjectsHubSection, etc.).

## Notas de manutencao
- Atualize este contexto sempre que novas pastas, convencoes ou paginas forem criadas ou renomeadas.
- Mantenha descricoes objetivas em portugues claro e sem acentuacao para preservar compatibilidade ASCII por padrao.
- Sincronize os ids listados em `FundadorSidebar` sempre que novas secoes forem adicionadas ou renomeadas (ids de secao precisam bater com os anchors).
- O sidebar do fundador seta `--fundador-sidebar-width` no `body`; mantenha esse contrato ao ajustar o layout principal do fundador.
- Sempre que extrair novos cards/listas para `fragments`, preserve a assinatura visual original (classes Tailwind) e evite acoplamento com paginas especificas (deixe os dados entrarem por props).
