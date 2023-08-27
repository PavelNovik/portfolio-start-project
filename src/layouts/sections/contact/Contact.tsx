import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Logo} from "../../../components/logo/Logo";
import {Social} from "../../../components/social/Social";
import {ContainerBox} from "../../../components/ContainerBox";

const socials = ["git", "twit", "linkedin"]

export const Contact = () => {
    return (
        <StyledContact>
            <ContainerBox>
            <Title>For any questions please mail me: <br/> <span>hi@pavanmg.in</span>  </Title>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Logo/>
                <Wrapper>
                    <span>+91 12345 09876</span>
                    <span>info@example.com</span>
                    <Social socialItems={socials}/>
                </Wrapper>
            </FlexWrapper>

            </ContainerBox>

        </StyledContact>
    );
};

const StyledContact = styled.section`
min-height: 25vh;
text-align: center;
`
const Title = styled.h2`
  font-size: 58px;
  color: #1E0E62;
  
  span {
    background: linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

`

const Wrapper = styled.div`
display: flex;
  align-items: center;
  gap: 65px;
`