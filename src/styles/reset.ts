import { css } from '@emotion/react';

const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font: inherit;
    color: inherit;
  }

  html,
  body {
    height: 100%;
  }

  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }
`;

export default reset;
