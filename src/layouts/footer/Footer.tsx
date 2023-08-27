import React from 'react';
import styled from "styled-components";
import {ContainerBox} from "../../components/ContainerBox";
import {Menu} from "../../components/menu/Menu";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <ContainerBox>
                <Wrapper>
                    <Menu menuItems={items}/>
                    <p><span>Designed and built by </span>Pavan MG <span> with </span>Love<span> & </span>Coffee</p>

                </Wrapper>
            </ContainerBox>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  min-height: 10vh;
  background-color: #fdc6fd;
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  border-top: 2px solid rgba(102, 102, 102, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    background: linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    span {
      -webkit-text-fill-color: rgba(102, 102, 102, 1);
    }
  }

`