import React from 'react';
import userPhoto from "../../../assets/img/user.webp"
import {ContainerBox} from "../../../components/ContainerBox";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Main_Styles";

export const Main: React.FC = () => {
    return (
        <S.Main>
            <ContainerBox>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <S.Title>
                        Hi 👋, <br/>
                        My name is <br/>
                        <span> Pavan MG </span> <br/>
                        I build things for web
                    </S.Title>
                    <S.Photo>
                        <img src={userPhoto} alt="user"/>
                    </S.Photo>
                </FlexWrapper>
            </ContainerBox>
        </S.Main>
    );
};