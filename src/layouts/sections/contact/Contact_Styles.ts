import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {lightTheme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


const Contact = styled.section`
  padding-top: 400px;
  text-align: center;
  padding-bottom: 0;


  ${FlexWrapper} {
    margin-top: 222px;
    position: relative;
    padding-bottom: 40px;

    &::after {
      content: "";
      display: inline-block;
      height: 2px;
      width: 100%;
      background-color: ${lightTheme.colors.darkContent};
      opacity: 0.3;

      position: absolute;
      bottom: 0;
    }
  }

  @media ${lightTheme.media.tablet} {
    ${FlexWrapper} {
      margin-top: 122px;
      gap: 65px;
      flex-direction: column;
      align-items: center;
    }
  }
  @media ${lightTheme.media.mobile} {
    ${FlexWrapper} {
      margin-top: 62px;
     
    }
  }


`
const Title = styled.h2`
  ${font({
    family: '"DM Sans", sans-serif',
    weight: 700,
    color: `${lightTheme.colors.headingColor}`,
    lineHeight: 1.21,
    Fmax: 58,
    Fmin: 30
  })}
  letter-spacing: -1px;

  span {
    background: linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 65px;
  color: ${lightTheme.colors.titleColor};
  
  a {
    color: ${lightTheme.colors.titleColor};
  }
  span {
    ${font({
      family: '"DM Sans", sans-serif',
      weight: 400,
      lineHeight: 1.45,
    })}
    font-size: 18px
  }
  
@media ${lightTheme.media.tablet} {
  flex-direction: column;
}

`
export const S = {
    Contact,
    Title,
    Wrapper,
}