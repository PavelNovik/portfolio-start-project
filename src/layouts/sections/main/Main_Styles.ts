import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {font} from "../../../styles/Common";
import {lightTheme} from "../../../styles/Theme";

const Main = styled.section`
  @media screen and (max-width: 650px) {
    ${FlexWrapper} {
      flex-direction: column;
      gap: 50px;
    }
  }
`
const Title = styled.h1`
  ${font({weight: 700, lineHeight: 1.27, color: `${lightTheme.colors.titleColor}`, Fmax: 58, Fmin: 30})} //font-size: 58px;
                  //color: ${lightTheme.colors.titleColor};
          //font-weight: 700;
          //line-height: 1.27; /* 120.69% */
  letter-spacing: -1px;

  span {
    background: ${lightTheme.colors.accentGradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

`
const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  //height: 365px;
  height: calc((100vw - 360px) / (1600 - 360) * (365 - 300) + 300px);
  //width: 365px;
  width: calc((100vw - 360px) / (1600 - 360) * (365 - 300) + 300px);
  border-radius: 50%;
  background: ${lightTheme.colors.mainBackground};

  img {
    //width: 349px;
    width: calc((100vw - 360px) / (1600 - 360) * (349 - 288) + 288px);
    object-fit: cover;
    border-radius: 50%;

  }

`
export const S = {
    Main,
    Title,
    Photo,
}