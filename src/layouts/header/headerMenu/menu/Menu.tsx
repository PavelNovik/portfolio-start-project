import React from 'react';
import {S} from "../HeaderMenu_Styles";

export type MenuItems = {
    title: string
    href: string
}
type MenuPropsType = {
    menuItems: MenuItems[],
    isOpen: boolean,
}

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
    return (
        <S.MenuItems isOpen={props.isOpen}>
            {props.menuItems.map((item, index) => {
                return (
                    <S.MenuItem key={index}>
                        <S.NavLink activeClass="active" to={item.href} smooth={true} spy={true}>{item.title}</S.NavLink>
                    </S.MenuItem>
                )
            })}
        </S.MenuItems>
    );
};

