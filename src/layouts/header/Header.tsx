import React from 'react';
import { Social } from "../../components/social/Social";
import { ContainerBox } from "../../components/ContainerBox";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderLogo} from "./headerLogo/HeaderLogo";
import {S} from "./Header_Styles";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
const socials = ["git", "twit", "linkedin"]


export const Header = () => {
    return (
        <S.Header>
            <ContainerBox>
                <HeaderLogo />
                <FlexWrapper justify={"space-between"} align={"flex-end"}>
                    <DesktopMenu menuItems={items} />
                    <Social socialItems={socials} />
                </FlexWrapper>
            </ContainerBox>
        </S.Header>
    );
};


