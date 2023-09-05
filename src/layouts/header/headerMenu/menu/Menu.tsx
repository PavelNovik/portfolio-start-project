import React from 'react';
import {Link} from "../../../../components/Link";
import {S} from "../HeaderMenu_Styles";

export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.MenuItems>
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

