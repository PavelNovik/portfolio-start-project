import React from 'react';
import styled from "styled-components";
import userPhoto from "../../../assets/img/user.webp"
import {ContainerBox} from "../../../components/ContainerBox";
import {Theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <ContainerBox>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Title>
                        Hi 👋, <br/>
                        My name is <br/>
                        <span> Pavan MG </span> <br/>
                        I build things for web
                    </Title>
                    <Photo>
                        <img src={userPhoto} alt="user"/>
                    </Photo>
                </FlexWrapper>
            </ContainerBox>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

`
const Title = styled.h1`
  font-size: 58px;
  color: ${Theme.colors.titleColor};
  font-weight: 700;
  line-height: 1.27; /* 120.69% */
  letter-spacing: -1px;

  span {
    background: linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

`
const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 365px;
  width: 365px;
  flex-shrink: 0;
  border-radius: 50%;
  background: linear-gradient(rgba(231, 15, 170, 1), rgba(0, 192, 253, 1));

  img {
    width: 349px;
    object-fit: cover;
    border-radius: 50%;
   
  }

`