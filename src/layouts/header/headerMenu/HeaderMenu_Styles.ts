import styled from "styled-components";
import {Link} from "../../../components/Link";
import {font} from "../../../styles/Common";
import {Theme} from "../../../styles/Theme";
import {Social} from "../../../components/social/Social";


const DesktopMenu = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;

`
const MenuItems = styled.ul`
  max-width: 610px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuItem = styled.li`
  &:first-child {
    margin-left: 15px;
  }

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
    MenuItems,
    MenuItem
}