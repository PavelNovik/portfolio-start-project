import React from 'react';
import {MLink} from "../../../components/Link";
import {HeaderIcon} from "./headerIcon/HeaderIcon";
import {HIcon} from "./headerIcon/Hicon";

export const HeaderLogo: React.FC = () => {
    return (
        <MLink href={"#"}>
            {/*<HeaderIcon/>*/}
            <HIcon/>
        </MLink>
    );
};

