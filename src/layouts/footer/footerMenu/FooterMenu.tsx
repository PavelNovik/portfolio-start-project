import React from 'react';
import { MLink } from '../../../components/Link';
import { S } from '../Footer_Styles';
import {MenuItems} from "../../header/headerMenu/menu/Menu";


type MenuPropsType = {
    menuItems: MenuItems[],

}
export const FooterMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
    return (
        <S.Menu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <S.FLink to={item.href} smooth={true} spy={true}>{item.title}</S.FLink>
                        </li>
                    )
                })}
            </ul>
        </S.Menu>
    );
};

