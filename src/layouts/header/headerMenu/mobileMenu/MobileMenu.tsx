import React from 'react';
import {Link} from "../../../../components/Link";
import styled, {css} from "styled-components";
import {Theme} from "../../../../styles/Theme";
import {Menu} from "../menu/Menu";
import {Social} from "../../../../components/social/Social";


type HeaderMenuPropsType = {
    menuItems: Array<string>,
    socialItems: Array<string>,

}
export const MobileMenu: React.FC<HeaderMenuPropsType> = (props: HeaderMenuPropsType) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}><span></span></BurgerButton>
            <MobileMenuPopup isOpen={true}>
                <Menu menuItems={props.menuItems}/>
                <Social socialItems={props.socialItems}/>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  // ul {
  //   display: flex;
  //   align-items: center;
  //   gap: 50px;
  //
  //   li {
  //     ${Link} {
  //       color: ${Theme.colors.darkContent};
  //       font-family: "DM Sans", sans-serif;
  //       font-size: 20px;
  //       font-weight: 500;
  //       line-height: 1.3;
  //     }
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 99999;
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

  `}
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

  }
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
    height: 2px;
    background-color: ${Theme.colors.titleColor};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${Theme.colors.titleColor};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${Theme.colors.titleColor};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`