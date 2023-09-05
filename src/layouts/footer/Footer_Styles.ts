import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Theme} from "../../styles/Theme";
import {font} from "../../styles/Common";


const Footer = styled.footer`

  ${FlexWrapper} {
    ${font({
      family: '"DM Sans", sans-serif',
      weight: 400,
      color: `${Theme.colors.titleColor}`,
      lineHeight: 1.45,
      Fmax: 18,
      Fmin: 16
    })}
    margin: 45px 0 60px;

    p {
      text-align: center;
      font-family: "Poppins", sans-serif;

      background: linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      span {
        -webkit-text-fill-color: ${Theme.colors.darkContent};
      }
    }
  }

  @media ${Theme.media.tablet} {
    ${FlexWrapper} {
      flex-direction: column;
      gap: 25px

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
  }
`
export const S = {
    Footer,
    Menu,
}