# Project Context

## Tecnologias usadas
- Framework: Next.js
- Estilo: Tailwind CSS

## Estrutura de pastas
- `/src/app`: paginas Next.js, layout raiz e assets globais.
  - `/src/app/page.tsx`: landing page publica principal.
- `/src/app/fundador/page.tsx`: pagina dedicada ao fundador com sidebar proprio e padding dinamico via CSS custom property.
  - `/src/app/layout.tsx`: layout raiz e configuracao de fontes.
- `/src/assets`: imagens e midia da interface.
- `/src/components/common`: componentes compartilhados (container, header, botoes).
- `/src/components/layouts/landingPage`: secoes compostas usadas na landing page.
- `/src/components/layouts/fundador`: secoes compostas da pagina do fundador.
- `/src/components/fragments/landingPage`: fragmentos menores reutilizados pelas secoes da landing page.
- `/src/components/fragments/fundador`: fragmentos menores reutilizados pelas secoes da pagina do fundador (hero, sideBar, knowledge, etc.).
- `/src/utils`: funcoes utilitarias (ex.: scrollToSection).

## Convencoes de escrita
- Componentes React (arquivos e exports) usam PascalCase.
- Hooks, funcoes auxiliares, variaveis e constantes locais usam camelCase.
- Objetos de configuracao e listas estaticas usam UPPER_SNAKE_CASE quando exportados.
- Classes CSS utilitarias seguem padroes Tailwind e devem permanecer em lowercase.

## Paginas
- `src/app/layout.tsx`: define HTML raiz, aplica fontes Google (Inter, Outfit) e importa estilos globais.
- `src/app/page.tsx`: implementa a landing page com header, secoes principais (hero, about, solutions, testimonials, project social) e footer compartilhado.
- `src/app/fundador/page.tsx`: monta a pagina do fundador combinando as secoes de `layouts/fundador/sections` e a navegacao lateral `FundadorSidebar` (hero, about, projects, knowledge, connection, contact, footer).

## Notas de manutencao
- Atualize esta memoria sempre que novas pastas, convencoes ou paginas forem criadas ou alteradas.
- Mantenha descricoes objetivas em portugues claro e sem acentuacao para preservar compatibilidade ASCII por padrao.
- Sincronize os ids listados em `FundadorSidebar` sempre que novas secoes forem adicionadas ou renomeadas.
- O sidebar seta `--fundador-sidebar-width` no `body`; mantenha esse contrato ao ajustar layout principal.
