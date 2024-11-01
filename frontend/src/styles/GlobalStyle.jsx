import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
/* Reset básico para todos os elementos */
  *, *::before, *::after {
    font-family: "Poppins", serif;
    font-weight: 500;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Remoção de borda e estilo padrão */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* Exibição padrão de HTML5 */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  /* Fontes padrão */
  body {
    line-height: 1;
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Estilização de listas */
  ol, ul {
    list-style: none;
  }

  /* Células de tabelas */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Links sem sublinhado */
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
