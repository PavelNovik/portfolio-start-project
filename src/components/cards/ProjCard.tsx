import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

type ProjCardPropsType = {
    image: string
}

export const ProjCard = (props: ProjCardPropsType) => {
    return (
        <StyledProjCard>
            <ImageContainer>
                <img src={props.image} alt="description"/>
            </ImageContainer>
            <TextContainer>
                <Title>Project Tile goes here</Title>
                <Description>This is sample project description random things are here in description This is sample
                    project lorem ipsum generator for dummy content</Description>
                <StackInfo>Tech stack : HTML , JavaScript, SASS, React</StackInfo>
                <LinksField>
                    <Link href={"#"}><Icon iconId={"chain"} width={"20"} height={"20"} viewBox={"0 0 20 20"} /><span>Live Preview</span></Link>
                    <Link href={"#"}><Icon iconId={"git-small"} width={"20"} height={"20"} viewBox={"0 0 20 20"} /><span>View Code</span></Link>
                </LinksField>
            </TextContainer>
        </StyledProjCard>
    );
};

const StyledProjCard = styled.div`
  width: 375px;
  height: 570px;
  border-radius: 20px;
  overflow: hidden;
  background-color: white;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
`

const ImageContainer = styled.div`
  height: 260px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 105%;
    object-fit: cover;
  }
`

const TextContainer = styled.div`
padding: 27px 32px 25px 29px;
`

const Title = styled.h3``

const Description = styled.p``

const StackInfo = styled.span``

const LinksField = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
`
const Link = styled.a`
  display: flex;  
  align-items: center;
span {
  margin-left: 12px;
}
`