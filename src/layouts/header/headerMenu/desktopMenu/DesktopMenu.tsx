import React from 'react';
import {S} from "../HeaderMenu_Styles";
import {Menu} from "../menu/Menu";
import {Social} from "../../../../components/social/Social";


type HeaderMenuPropsType = {
    menuItems: Array<string>,
    socialItems: Array<string>,

}
export const DesktopMenu: React.FC<HeaderMenuPropsType> = (props: HeaderMenuPropsType) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={props.menuItems}/>
            <Social socialItems={props.socialItems}/>
        </S.DesktopMenu>
    );
};

