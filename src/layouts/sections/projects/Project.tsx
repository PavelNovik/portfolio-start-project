import React from 'react';
import styled from "styled-components";
import {ProjCard} from "../../../components/cards/ProjCard";
import proj1 from "../../../assets/img/proj-1.webp";
import proj2 from "../../../assets/img/proj-2.webp";
import proj3 from "../../../assets/img/proj-3.webp";
import proj4 from "../../../assets/img/proj-4.webp";
import proj5 from "../../../assets/img/proj-5.webp";
import proj6 from "../../../assets/img/proj-6.webp";

const projects: Array<string> = [proj1, proj2, proj3, proj4,proj5,proj6]

export const Project = () => {
    return (
        <StyledProject>
            <Title>Projects</Title>
            <Text>Things I’ve built so far</Text>
            <Wrapper>
                {projects.map((item) => {
                    return <ProjCard image={item}/>
                })}
            </Wrapper>

        </StyledProject>
    );
};

const StyledProject = styled.section`
min-height: 100vh;
  background-color: darkgrey;
  text-align: center;
  padding-bottom: 100px;
  
`
const Title = styled.h2``

const Text = styled.span``

const Wrapper = styled.div`
  width: 90%;
  row-gap: 60px;
  column-gap: 30px;
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`