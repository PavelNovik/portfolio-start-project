import React from 'react';
import styled from "styled-components";
import { Link } from '../../../components/Link';
import { Theme } from '../../../styles/Theme';


type MenuPropsType = {
    menuItems: Array<string>,

}
export const FooterMenu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href="#">{item}</Link>
                        </li>
                    )
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
ul {
  display: flex;
  align-items: center;
  gap: 50px;
  
  }
 

`