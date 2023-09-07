import styled from "styled-components";
import {Link} from "../Link";
import {lightTheme} from "../../styles/Theme";

const Social = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  li:first-child {
    margin-left: 15px;
  }

  li:nth-child(2) ${Link} {
    transform: translate(-1px, -2px);
  }
  
  li:hover {
    transform: rotate(360deg);
    transition: 0.5s;
  }
  
@media ${lightTheme.media.tablet} {
  li:first-child {
    margin-left: 0;
  }
}

`
export  const S = {
    Social,
}