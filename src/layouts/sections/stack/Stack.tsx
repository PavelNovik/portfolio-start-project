import React from 'react';
import {Fade} from "react-awesome-reveal";

import {Icon} from "../../../components/icon/Icon";
import {ContainerBox} from "../../../components/ContainerBox";
import {SectionText, SectionTitle} from "../../../components/SectionTitleText";
import {S} from "./Stack_Styles"

const stackItems = [
    {
        iconId: "html5",
        width: "120",
        height: "120",
        viewBox: "0 0 120 120",
    },
    {
        iconId: "css3",
        width: "120",
        height: "119",
        viewBox: "0 0 120 119",
    },
    {
        iconId: "js",
        width: "120",
        height: "120",
        viewBox: "0 0 120 120",
    },
    {
        iconId: "react",
        width: "113",
        height: "101",
        viewBox: "0 0 113 101",
    },
    {
        iconId: "vector",
        width: "105",
        height: "100",
        viewBox: "0 0 105 100",
    },
    {
        iconId: "bootstrap",
        width: "88",
        height: "87",
        viewBox: "0 0 88 87",
    },
    {
        iconId: "tailwind",
        width: "131",
        height: "131",
        viewBox: "0 0 131 131",
    },
    {
        iconId: "sass",
        width: "117",
        height: "87",
        viewBox: "0 0 117 87",
    },
    {
        iconId: "git-icon",
        width: "105",
        height: "105",
        viewBox: "0 0 105 105",
    },
    {
        iconId: "greensock",
        width: "120",
        height: "120",
        viewBox: "0 0 120 120",
    },
    {
        iconId: "vscode",
        width: "112",
        height: "112",
        viewBox: "0 0 112 112",
    },
    {
        iconId: "github-fill",
        width: "88",
        height: "88",
        viewBox: "0 0 88 88",
    },
]

export const Stack: React.FC = () => {
    const stacks = stackItems.map((item, index) => {
        return (
            <Icon key={index} iconId={item.iconId} width={item.width} height={item.height} viewBox={item.viewBox}/>
        )
    })
    return (
        <S.Stack id={"stack"}>
            <ContainerBox>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText> Technologies I’ve been working with recently</SectionText>
                <S.Wrapper>
                    <Fade cascade={true} damping={0.2}>

                    {stacks}
                    </Fade>
                </S.Wrapper>

            </ContainerBox>
        </S.Stack>
    );
};
