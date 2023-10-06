import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../Project_Styles";
import {MLink} from "../../../../components/Link";

type ProjCardPropsType = {
    image: string
}

export const ProjCard: React.FC<ProjCardPropsType> = (props: ProjCardPropsType) => {
    return (
        <S.Card>
            <S.ImageContainer>
                <img src={props.image} alt="description"/>
            </S.ImageContainer>
            <S.TextContainer>
                <S.Title>Project Tile goes here</S.Title>
                <S.Description>This is sample project description random things are here in description This is sample
                    project lorem ipsum generator for dummy content</S.Description>
                <S.StackInfo>Tech stack : <span>HTML , JavaScript, SASS, React</span></S.StackInfo>
                <S.LinksField>
                    <MLink href={"#"}><Icon iconId={"chain"} width={"20"} height={"20"} viewBox={"0 0 20 20"} /><span>Live Preview</span></MLink>
                    <MLink href={"#"}><Icon iconId={"git-small"} width={"20"} height={"20"} viewBox={"0 0 20 20"} /><span>View Code</span></MLink>
                </S.LinksField>
            </S.TextContainer>
        </S.Card>
    );
};


