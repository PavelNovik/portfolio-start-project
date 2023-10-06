import { createGlobalStyle } from "styled-components";
import {lightTheme} from "./Theme";

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
    color: ${lightTheme.colors.darkContent};
    background-color: ${lightTheme.colors.bodyBackground};
    // Changing theme
    transition: all 0.50s linear;
    
    min-width: 360px;
  }

  a {
    text-decoration: none;
    color: ${lightTheme.colors.darkContent};
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    color: ${lightTheme.colors.titleColor};

    &:hover {
      cursor: pointer;
    }
  }

  section {
    padding: 100px 0;
        
    &:first-of-type {
      padding-top: 200px;
    }
    
    @media ${lightTheme.media.tablet} {
      padding: 75px 0;
    }
    @media ${lightTheme.media.mobile} {
      padding: 50px 0;
    }
  }

`