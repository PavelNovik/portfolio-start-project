import styled, {css} from "styled-components";
import {Link} from "../../../components/Link";
import {font} from "../../../styles/Common";
import {Theme} from "../../../styles/Theme";

// Desktop Menu
const DesktopMenu = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;

`
// Mobile menu
const MobileMenu = styled.nav`
  
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Theme.colors.backgroundHeaderPopupColor};
  z-index: 99999;
  display: none;
  
  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  `}
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 99999999;

  span {
    display: block;
    width: 36px;
    height: 3px;
    background-color: ${Theme.colors.titleColor};
    position: absolute;
    left: 40px;
    bottom: 50px;
    transition: 0.5s;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 3px;
      background-color: ${Theme.colors.titleColor};
      position: absolute;
      transform: translateY(-10px);
      transition: 1s;


      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 36px;
      height: 3px;
      background-color: ${Theme.colors.titleColor};
      position: absolute;
      transform: translateY(10px);
      transition: 1s;


      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
      `}
    }
  }  
`

// Menu
const MenuItems = styled.ul<{ isOpen: boolean }>`
  max-width: 610px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    flex-direction: column;
    gap: 55px;
    margin-bottom: 60px;

    & li:first-child {
      margin-left: 0;
    }
  `}
  
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
    position: relative;
    z-index: 0;

    &::before {
      content: "";
      display: block;
      width: 0;
      height: 5px;
      background: ${Theme.colors.accentGradient};
      position: absolute;
      bottom: 1px;
      z-index: -1;
      transition: 0.5s;
    }

    &:hover {
      color: #2c2c2c;

      &::before {
        width: 100%;
        background: ${Theme.colors.accentGradient};
      }
    }
  }


  @media ${Theme.media.tablet} {
    ${Link} {
      font-size: 30px;
    }
  }

`
export const S = {
    DesktopMenu,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    MenuItems,
    MenuItem
}