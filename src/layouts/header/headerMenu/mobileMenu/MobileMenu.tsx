import React from 'react';
import {Link} from "../../../../components/Link";
import styled from "styled-components";
import {Theme} from "../../../../styles/Theme";


type HeaderMenuPropsType = {
    menuItems: Array<string>,

}
export const MobileMenu: React.FC<HeaderMenuPropsType> = (props: HeaderMenuPropsType) => {
    return (
        <StyledMobileMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href="#">{item}</Link>
                        </li>
                    )
                })}
            </ul>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 50px;
    li {
      ${Link} {
        color: ${Theme.colors.darkContent};
        font-family: "DM Sans", sans-serif;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.3;
      }
`