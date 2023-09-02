import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Logo} from "../../../components/logo/Logo";
import {Social} from "../../../components/social/Social";
import {ContainerBox} from "../../../components/ContainerBox";
import {Theme} from "../../../styles/Theme";

const socials = ["git", "twit", "linkedin"]

export const Contact = () => {
    return (
        <StyledContact>
            <ContainerBox>
                <Title>For any questions please mail me: <br/> <span>hi@pavanmg.in</span> </Title>
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
  text-align: center;
  padding-bottom: 0;
  

  ${FlexWrapper} {
    margin-top: 222px;
    position: relative;
    padding-bottom: 40px;

    &::after {
      content: "";
      display: inline-block;
      height: 2px;
      width: 100%;
      background-color: ${Theme.colors.darkContent};
      opacity: 0.3;

      position: absolute;
      bottom: 0;
    }
  }

`
const Title = styled.h2`
  color: ${Theme.colors.headingColor};
  font-family: "DM Sans", sans-serif;
  font-size: 58px;
  font-weight: 700;
  line-height: 1.21; /* 120.69% */
  letter-spacing: -1px;

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
  color: ${Theme.colors.titleColor};

  a {
    color: ${Theme.colors.titleColor};
  }

  span {
    font-family: "DM Sans", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.45; /* 144.444% */
  }


`