import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {lightTheme} from "../../styles/Theme";
import {font} from "../../styles/Common";
import {Link} from "../../components/Link";


const Footer = styled.footer`

  ${FlexWrapper} {
    ${font({
      family: '"DM Sans", sans-serif',
      weight: 400,
      color: `${lightTheme.colors.titleColor}`,
      lineHeight: 1.45,
      Fmax: 18,
      Fmin: 16
    })}
    margin: 45px 0 60px;

    p {
      text-align: center;
      font-family: "Poppins", sans-serif;

      background: ${lightTheme.colors.accentGradient};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      span {
        -webkit-text-fill-color: ${lightTheme.colors.darkContent};
      }
    }
  }

  @media ${lightTheme.media.tablet} {
    ${FlexWrapper} {
      flex-direction: column;
      gap: 25px;
      margin: 45px 0 20px;
    }
  }

`
const Menu = styled.nav`
  max-width: 560px;
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li ${Link} {
      position: relative;
      z-index: 0;

      &::before {
        content: "";
        display: block;
        width: 0;
        height: 5px;
        background: ${lightTheme.colors.titleColor};
        position: absolute;
        bottom: 2px;
        z-index: -1;
        transition: 0.5s;
      }

      &:hover {
        color: #2c2c2c;

        &::before {
          width: 100%;
          background: ${lightTheme.colors.titleColor};
        }
      }
    }
`
export const S = {
    Footer,
    Menu,
}