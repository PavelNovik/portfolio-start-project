import React from 'react';
import { Link } from '../../../components/Link';
import { S } from '../Footer_Styles';


type MenuPropsType = {
    menuItems: Array<string>,

}
export const FooterMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
    return (
        <S.Menu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href="#">{item}</Link>
                        </li>
                    )
                })}
            </ul>
        </S.Menu>
    );
};

