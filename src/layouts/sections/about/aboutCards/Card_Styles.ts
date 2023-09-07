import styled from "styled-components";
import {lightTheme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";

const Card = styled.div<{status: string}>`
  //border: 1px solid #EBEAED;
  & + & {
    margin-top: 30px;
  }

  position: relative;

  &::before {
    content: "${props => props.status}";
    display: inline-block;
    text-align: center;
    font-weight: 600;
    line-height: 2.89;
    
    width: 84px;
    height: 24px;
    font-size: 9px;
    border-radius: 100px;
    background-color: ${lightTheme.colors.buttonBg};
    color: ${lightTheme.colors.buttonText};

    position: absolute;
    right: 0;
    top: -3px;
  }

  &::after {
    content: '';
    display: inline-block;
    height: 2px;
    width: 100%;
    background-color: ${lightTheme.colors.colorsGrey};
  }

`
const Wrapper = styled.div`
  min-width: 33%;

  &:last-of-type {
    text-align: right;
  }
`
export const Text = styled.h3`
  ${font({color: `${lightTheme.colors.darkContent}`, weight: 400, lineHeight: 1.4, Fmax: 20, Fmin: 14})};
  letter-spacing: 1px;
  margin-bottom: 5px;
  margin-right: 90px;
`
export const Info = styled.span`
  ${font({color: `${lightTheme.colors.lightContent}`, weight: 400, lineHeight: 2.34, Fmax: 12, Fmin: 8})};
   letter-spacing: 1px;
`

export const S = {
    Card,
    Wrapper,
    Text,
    Info,

}