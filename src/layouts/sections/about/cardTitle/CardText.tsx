import styled from "styled-components";
import {Theme} from "../../../../styles/Theme";

export const CardText = styled.h3`
  color: ${Theme.colors.darkContent};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  margin-bottom: 5px;
`
export const TextInfo = styled.span`
  color: ${Theme.colors.lightContent};
  font-size: 12px;
  font-weight: 400;
  line-height: 2.34; /* 233.333% */
  letter-spacing: 1px;
`