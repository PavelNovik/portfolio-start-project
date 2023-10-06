import React from 'react';
import {ContainerBox} from "../../components/ContainerBox";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderLogo} from "./headerLogo/HeaderLogo";
import {S} from "./Header_Styles";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {Button} from "../../components/button/Button";
import {MenuItems} from "./headerMenu/menu/Menu";

const items: MenuItems[] = [{title:"Home", href: "home"}, {title:"About", href: "about"}, {title:"Tech Stack", href: "stack"}, {title:"Projects", href: "project"}, {title:"Contact", href: "contact"}]
const socials = ["git", "twit", "linkedin"]


export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 769;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize)
    }, []);

    return (
        <S.Header>
            <ContainerBox>
                <HeaderLogo/>

                <FlexWrapper justify={"space-between"} align={"flex-end"}>
                    {width < breakpoint ?
                        <MobileMenu menuItems={items} socialItems={socials}/> :
                        <DesktopMenu menuItems={items} socialItems={socials}/>
                    }
                </FlexWrapper>
            </ContainerBox>
        </S.Header>
    );
};


