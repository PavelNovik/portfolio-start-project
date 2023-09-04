import React from 'react';
import {S} from "../HeaderMenu_Styles";
import {Menu} from "../menu/Menu";


type HeaderMenuPropsType = {
    menuItems: Array<string>,

}
export const DesktopMenu: React.FC<HeaderMenuPropsType> = (props: HeaderMenuPropsType) => {
    return (
        <S.DesktopMenu>
           <Menu menuItems={props.menuItems}/>
        </S.DesktopMenu>
    );
};

