import React from 'react';
import {S} from "../HeaderMenu_Styles";
import {Menu, MenuItems} from "../menu/Menu";
import {Social} from "../../../../components/social/Social";


type HeaderMenuPropsType = {
    menuItems: MenuItems[]
    socialItems: string[]

}
export const DesktopMenu: React.FC<HeaderMenuPropsType> = (props: HeaderMenuPropsType) => {
    return (
        <S.DesktopMenu>
            <Menu isOpen={false} menuItems={props.menuItems}/>
            <Social socialItems={props.socialItems}/>
        </S.DesktopMenu>
    );
};

