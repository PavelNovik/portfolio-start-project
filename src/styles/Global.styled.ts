import { createGlobalStyle } from "styled-components";
import { Theme } from './Theme';

export const GlobalStyled = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${Theme.colors.darkContent};

    min-width: 360px;
  }

  a {
    text-decoration: none;
    color: ${Theme.colors.darkContent};
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    color: ${Theme.colors.titleColor};

    &:hover {
      cursor: pointer;
    }
  }

  section {
    padding: 100px 0;
        
    &:first-of-type {
      margin-top: 100px;
    }
    @media ${Theme.media.tablet} {
      padding: 75px 0;
    }
    @media ${Theme.media.mobile} {
      padding: 50px 0;
    }
  }

`