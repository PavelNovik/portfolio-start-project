import React from 'react';
import {Link} from "../../../../components/Link";
import {S} from "../HeaderMenu_Styles";

type MenuPropsType = {
    menuItems: Array<string>,
    isOpen: boolean,
}

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
    return (
        <S.MenuItems isOpen={props.isOpen}>
            {props.menuItems.map((item, index) => {
                return (
                    <S.MenuItem key={index}>
                        <Link href="#">{item}</Link>
                    </S.MenuItem>
                )
            })}
        </S.MenuItems>
    );
};

