import styled from "styled-components";
import {lightTheme} from "../../../styles/Theme";
import image from "../../../assets/img/drawing.png"
import {font} from "../../../styles/Common";


const About = styled.section`
  background: right bottom / contain no-repeat url(${image}) border-box;
    // background-image: url(${image});
  // background-repeat: no-repeat;
  // background-position: right top;
  // background-size: contain;


`

const Wrapper = styled.div`
  max-width: 60%;
  width: 100%;
 
  @media ${lightTheme.media.tablet} {
    max-width: 80%;
  }
  @media ${lightTheme.media.mobile} {
    max-width: 100%;
  }

`
const Title = styled.h2`
  ${font({weight: 700, color: `${lightTheme.colors.titleColor}`, lineHeight: 1.24, Fmax: 42, Fmin: 32})}
  letter-spacing: -0.4px;
  margin: 38px 0;

`
const Text = styled.p`
  ${font({weight: 400, color: `${lightTheme.colors.darkContent}`, lineHeight: 1.44, Fmax: 18, Fmin: 12})}
`
export const S = {
    About,
    Wrapper,
    Text,
    Title,
}