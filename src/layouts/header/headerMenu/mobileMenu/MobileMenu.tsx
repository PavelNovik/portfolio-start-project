import React from 'react';
import {Menu} from "../menu/Menu";
import {Social} from "../../../../components/social/Social";
import {S} from "../HeaderMenu_Styles"


type HeaderMenuPropsType = {
    menuItems: Array<string>,
    socialItems: Array<string>,

}
export const MobileMenu: React.FC<HeaderMenuPropsType> = (props: HeaderMenuPropsType) => {

    const [state, setState] = React.useState(false);
    const handleMenuOpen = () => state? setState(false) : setState(true)

    return (
        <S.MobileMenu>
            <S.BurgerButton onClick={handleMenuOpen} isOpen={state}><span></span></S.BurgerButton>
            <S.MobileMenuPopup isOpen={state}>
                <Menu isOpen={state} menuItems={props.menuItems}/>
                <Social socialItems={props.socialItems}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};


