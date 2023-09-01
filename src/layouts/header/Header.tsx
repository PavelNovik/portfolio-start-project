import React from 'react';
import styled from "styled-components";
import { Social } from "../../components/social/Social";
import { ContainerBox } from "../../components/ContainerBox";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderLogo} from "./headerLogo/HeaderLogo";


const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
const socials = ["git", "twit", "linkedin"]


export const Header = () => {
    return (
        <StyledHeader>
            <ContainerBox>
                <HeaderLogo />
                <FlexWrapper justify={"space-between"} align={"flex-end"}>
                    <HeaderMenu menuItems={items} />
                    <Social socialItems={socials} />
                </FlexWrapper>
            </ContainerBox>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`

  ${ContainerBox} {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 40px;
   margin-bottom: 100px;
  }

  ${FlexWrapper} {
    //padding-top: 5px;
    gap: 50px;
    height: 100%;
  }

`
