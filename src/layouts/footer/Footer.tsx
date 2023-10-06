import React from 'react';
import {ContainerBox} from "../../components/ContainerBox";
import {FooterMenu} from "./footerMenu/FooterMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles";
import {MenuItems} from "../header/headerMenu/menu/Menu";

const items: MenuItems[] = [{title:"Home", href: "home"}, {title:"About", href: "about"}, {title:"Tech Stack", href: "stack"}, {title:"Projects", href: "project"}, {title:"Contact", href: "contact"}]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <ContainerBox>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <FooterMenu menuItems={items}/>
                    <p><span>Designed and built by </span>Pavan MG <span> with </span>Love<span> & </span>Coffee</p>
                </FlexWrapper>
            </ContainerBox>
        </S.Footer>
    );
};

