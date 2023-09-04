import styled from "styled-components";
import {Link} from "../../../components/Link";
import {font} from "../../../styles/Common";
import {Theme} from "../../../styles/Theme";


const DesktopMenu = styled.nav`
 
  ul {
    display: flex;
    align-items: center;
    gap: 50px;

`
const MenuItem = styled.li`
  ${Link} {
    ${font({
      family: '"DM Sans", sans-serif',
      weight: 500,
      color: `${Theme.colors.darkContent}`,
      lineHeight: 1.3,
      // Fmax: 20,
      // Fmin: 10
    })}
    font-size: 20px;
  }
`
export const S = {
    DesktopMenu,
    MenuItem
}