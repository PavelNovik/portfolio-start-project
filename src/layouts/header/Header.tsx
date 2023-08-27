import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Social} from "../../components/social/Social";
import {ContainerBox} from "../../components/ContainerBox";


const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
const socials = ["git", "twit", "linkedin"]


export const Header = () => {
    return (
        <StyledHeader>
            <ContainerBox>
                <Wrapper>
                    <Logo/>
                    <Menu menuItems={items}/>
                    <Social socialItems={socials}/>
                </Wrapper>

            </ContainerBox>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  min-height: 100px;
  background-color: blanchedalmond;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`