import React from 'react';
import {ContainerBox} from "../../components/ContainerBox";
import {FooterMenu} from "./footerMenu/FooterMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

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

