import React from 'react';
import styled from "styled-components";
import userPhoto from "../../../assets/img/user.webp"
import {ContainerBox} from "../../../components/ContainerBox";

export const Main = () => {
    return (
        <StyledMain>
            <ContainerBox>
                <Wrapper>
                    <Title>
                        Hi <span>👋</span>, <br/>
                        My name is <br/>
                        <span> Pavan MG </span> <br/>
                        I build things for web
                    </Title>
                    <Photo>
                        <div>
                            <img src={userPhoto} alt="user"/>
                        </div>
                    </Photo>
                </Wrapper>


            </ContainerBox>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 60vh;
  background-color: #ffd79c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`
const Wrapper = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h1`
  width: 40%;
  font-size: 58px;
  color: #42446E;
  
  span:first-of-type {
    font-size: 70px;
  }
  span:last-of-type {
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
  height: 365px;
  width: 365px;
  border-radius: 50%;
  background: linear-gradient(rgba(231, 15, 170, 1), rgba(0, 192, 253, 1));


  div {
    height: 349px;
    width: 349px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 349px;
      object-fit: cover;
    }
  }

`