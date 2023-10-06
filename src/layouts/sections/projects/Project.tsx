import React from 'react';
import {ProjCard} from "./projCards/ProjCard";
import proj1 from "../../../assets/img/proj-1.webp";
import proj2 from "../../../assets/img/proj-2.webp";
import proj3 from "../../../assets/img/proj-3.webp";
import proj4 from "../../../assets/img/proj-4.webp";
import proj5 from "../../../assets/img/proj-5.webp";
import proj6 from "../../../assets/img/proj-6.webp";
import {ContainerBox} from "../../../components/ContainerBox";
import {SectionText, SectionTitle} from "../../../components/SectionTitleText";
import {S} from "./Project_Styles"

const projects = [proj1, proj2, proj3, proj4,proj5,proj6]

export const Project: React.FC = () => {
    return (
        <S.Project id={"project"}>
            <ContainerBox>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <S.Wrapper>
                    {projects.map((item, index) => {
                        return <ProjCard image={item} key={index}/>
                    })}
                </S.Wrapper>

            </ContainerBox>

        </S.Project>
    );
};