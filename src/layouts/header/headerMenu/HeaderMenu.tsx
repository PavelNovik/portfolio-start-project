import React from 'react';
import styled from "styled-components";
import {Link} from "../../../components/Link";
import {Theme} from "../../../styles/Theme";


type HeaderMenuPropsType = {
    menuItems: Array<string>,

}
export const HeaderMenu = (props: HeaderMenuPropsType) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href="#">{item}</Link>
                        </li>
                    )
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
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