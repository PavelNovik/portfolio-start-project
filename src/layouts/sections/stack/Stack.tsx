import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {ContainerBox} from "../../../components/ContainerBox";
import {SectionText, SectionTitle} from "../../../components/SectionTitleText";

export const Stack = () => {
    return (
        <StyledStack>
            <ContainerBox>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText> Technologies I’ve been working with recently</SectionText>
                <Wrapper>
                    <Icon iconId={"html5"}/>
                    <Icon iconId={"css3"} width={"120"} height={"119"} viewBox={"0 0 120 119"}/>
                    <Icon iconId={"js"}/>
                    <Icon iconId={"react"} width={"113"} height={"101"} viewBox={"0 0 113 101"}/>
                    <Icon iconId={"vector"} width={"105"} height={"100"} viewBox={"0 0 105 100"}/>
                    <Icon iconId={"bootstrap"} width={"88"} height={"87"} viewBox={"0 0 88 87"}/>
                    <Icon iconId={"tailwind"} width={"131"} height={"131"} viewBox={"0 0 131 131"}/>
                    <Icon iconId={"sass"} width={"117"} height={"87"} viewBox={"0 0 117 87"}/>
                    <Icon iconId={"git-icon"} width={"105"} height={"105"} viewBox={"0 0 105 105"}/>
                    <Icon iconId={"greensock"}/>
                    <Icon iconId={"vscode"} width={"112"} height={"112"} viewBox={"0 0 112 112"}/>
                    <Icon iconId={"github-fill"} width={"88"} height={"88"} viewBox={"0 0 88 88"}/>
                </Wrapper>

            </ContainerBox>
        </StyledStack>
    );
};

const StyledStack = styled.section`
  text-align: center;

  ${SectionText} {
    margin: 50px 0 130px;
    
  }

`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 90px;
`
