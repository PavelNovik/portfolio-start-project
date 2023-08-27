import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {ContainerBox} from "../../../components/ContainerBox";

export const Stack = () => {
    return (
        <StyledStack>
            <ContainerBox>
                <Title>My Tech Stack</Title>
                <Text> Technologies I’ve been working with recently</Text>
                <Wrapper>
                    <Icon iconId={"html5"}/>
                    <Icon iconId={"css3"}/>
                    <Icon iconId={"js"}/>
                    <Icon iconId={"react"}/>
                    <Icon iconId={"vector"}/>
                    <Icon iconId={"bootstrap"}/>
                    <Icon iconId={"tailwind"}/>
                    <Icon iconId={"sass"}/>
                    <Icon iconId={"git-icon"}/>
                    <Icon iconId={"greensock"}/>
                    <Icon iconId={"vscode"}/>
                    <Icon iconId={"github-fill"}/>
                </Wrapper>

            </ContainerBox>
        </StyledStack>
    );
};

const StyledStack = styled.section`
  min-height: 70vh;
  //display: flex;
  //align-items: center;
  //flex-direction: column;
  background-color: aquamarine;
  text-align: center;
`
const Wrapper = styled.div`
  width: 90%;
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 105px;
`

const Title = styled.h2``

const Text = styled.span``