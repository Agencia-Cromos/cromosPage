import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #623CEA;
    --color-primary-50: #311E75;
    --color-secondary: #50CF9A;
    --color-secondary-50: #E4F7EF;
    --color-tertiary: #FF2253;
    --color-tertiary-50: #FFE9EE;
    --color-quaternary: #4ACA94;
    --color-quaternary-50: #E4F7EF;

    --grey-5-75: #121214b8;
    --grey-5: #0A0A0B;
    --grey-4: #212529;
    --grey-3: #868E96;
    --grey-2: #E9ECFA;
    --grey-1-75: #cfd0d1;
    --grey-1: #F8F9FA;

    --title1-font-size: 1.75rem;
    --title2-font-size: 1.5rem;
    --title3-font-size: 1.25rem;
    --title4-font-size: 1rem;
    --headline-font-size: 0.875rem;
    --body-font-size: 1rem;
    --caption-font-size: 0.875rem;
    --detail-font-size: 0.625rem;

    --font-family: 'Inter', sans-serif;
    --font-weight-bold: 700;
    --font-weight-regular: 400;

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      box-sizing: border-box;
      font-family: var(--font-family);
      background-color: var(--grey-4);
      font-family: var(--font-family);
      background-color: var(--grey-4);
      color: var(--grey-1);
    }

    h1 {
      font-size: var(--title1-font-size);
      color: var(--grey-1);
      font-weight: var(--font-weight-bold);
    }

    h2 {
      font-size: var(--title2-font-size);
      color: var(--grey-1);
      font-weight: var(--font-weight-bold);
    }

    p {
      font-size: var(--body-font-size);
      color: var(--grey-2);
      font-weight: var(--font-weight-regular);
    }

    li, ol {
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    button {
      cursor: pointer;
      font-size: var(--body-font-size);
      border: none;
    }
  }

    .headerMenu-animate {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000; 
    }
`;
