import styled from "styled-components";
import {lightTheme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({color: `${lightTheme.colors.titleColor}`, weight: 700, lineHeight: 0.54, Fmax: 48, Fmin: 36})} 
`
export const SectionText = styled.p`
  //display: inline-block;
  ${font({color: `${lightTheme.colors.darkContent}`, weight: 400, lineHeight: 0.81, Fmax: 32, Fmin: 20})} 
  
  @media ${lightTheme.media.tablet} {
  line-height: 1.2;
}
`