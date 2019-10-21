import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, block  quote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, input, label, legend,
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
  
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }
  
  body {
    line-height: 1;
  }
  
  ol, ul {
  	list-style: none;
  }
  
  blockquote, q {
  	quotes: none;
  }
  
  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: '';
  	content: none;
  }
  
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }

  html {
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 10px;
    margin: 0;
  }
  
  .FontsLoaded {
    font-family: ${(props: { theme: ITheme }) =>
      props.theme.typography.fontFamily};
    font-size: 1.5rem;
    line-height: 2;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  :focus {
    outline: 0;
  }
  
  ::selection {
    background-color: ${(props: { theme: ITheme }) =>
      props.theme.typography.color.highlight};
    color: ${props => props.theme.typography.color.primary};
  }
  
  ::-moz-selection {
    background-color: ${(props: { theme: ITheme }) =>
      props.theme.typography.color.highlight};
    color: ${(props: { theme: ITheme }) =>
      props.theme.typography.color.primary};
  }

  body {
    padding: 0;
    margin: 0;
    overflow: auto !important;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 42%, rgba(0,9,20,1) 76%, rgba(4,39,79,1) 100%);
  }
  
  body.stop-scrolling {
    position: relative;
  }
  
  a, a:hover, a:focus, a:active, a:visited {
    text-decoration: none;
    color: inherit;
  }
  
`;

export default GlobalStyle;
