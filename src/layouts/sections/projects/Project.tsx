import React from 'react';
import styled from "styled-components";
import {ProjCard} from "./projCards/ProjCard";
import proj1 from "../../../assets/img/proj-1.webp";
import proj2 from "../../../assets/img/proj-2.webp";
import proj3 from "../../../assets/img/proj-3.webp";
import proj4 from "../../../assets/img/proj-4.webp";
import proj5 from "../../../assets/img/proj-5.webp";
import proj6 from "../../../assets/img/proj-6.webp";
import {ContainerBox} from "../../../components/ContainerBox";
import {SectionText, SectionTitle} from "../../../components/SectionTitleText";

const projects: Array<string> = [proj1, proj2, proj3, proj4,proj5,proj6]

export const Project = () => {
    return (
        <StyledProject>
            <ContainerBox>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <Wrapper>
                    {projects.map((item) => {
                        return <ProjCard image={item}/>
                    })}
                </Wrapper>

            </ContainerBox>

        </StyledProject>
    );
};

const StyledProject = styled.section`
  text-align: center;

  ${SectionText} {
    margin: 50px 0 110px;

  }

`
const Wrapper = styled.div`
 
  row-gap: 60px;
  
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`