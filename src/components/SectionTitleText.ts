import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  color: ${Theme.colors.titleColor};
  font-size: 48px;
  font-weight: 700;
  line-height: 0.54; /* 54.167% */

`
export const SectionText = styled.span`
  display: inline-block;
  color: ${Theme.colors.darkContent};
  font-size: 32px;
  font-weight: 400;
  line-height: 0.81; /* 81.25% */

`