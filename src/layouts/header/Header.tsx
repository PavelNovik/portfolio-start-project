import React from 'react';
import {ContainerBox} from "../../components/ContainerBox";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderLogo} from "./headerLogo/HeaderLogo";
import {S} from "./Header_Styles";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {Button} from "../../components/button/Button";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
const socials = ["git", "twit", "linkedin"]

type HandlerPropsType = {
    onChange: any,
}

export const Header: React.FC<HandlerPropsType> = (props: HandlerPropsType) => {

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
                <div onClick={props.onChange}>
sdasd
                    {/*<Button/>*/}
                </div>
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


