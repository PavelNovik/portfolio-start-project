import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Logo} from "../../../components/logo/Logo";
import {Social} from "../../../components/social/Social";
import {ContainerBox} from "../../../components/ContainerBox";
import {S} from "./Contact_Styles";

const socials = ["git", "twit", "linkedin"]

export const Contact: React.FC = () => {
    return (
        <S.Contact id={"contact"}>
            <ContainerBox>
                <S.Title>For any questions please mail me: <br/> <span>brn2befree@gmail.com</span> </S.Title>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <S.Wrapper>
                        <span>+375 29 348 24 04</span>
                        <span>brn2befree@gmail.com</span>
                        <Social socialItems={socials}/>
                    </S.Wrapper>
                </FlexWrapper>

            </ContainerBox>

        </S.Contact>
    );
};

