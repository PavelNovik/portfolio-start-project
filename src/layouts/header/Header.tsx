import React from 'react';
import {ContainerBox} from "../../components/ContainerBox";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderLogo} from "./headerLogo/HeaderLogo";
import {S} from "./Header_Styles";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
const socials = ["git", "twit", "linkedin"]


export const Header: React.FC = () => {
    return (
        <S.Header>
            <ContainerBox>
                <HeaderLogo/>
                <FlexWrapper justify={"space-between"} align={"flex-end"}>
                    <MobileMenu menuItems={items} socialItems={socials}/>
                    {/*<DesktopMenu menuItems={items} socialItems={socials}/>*/}
                </FlexWrapper>
            </ContainerBox>
        </S.Header>
    );
};


