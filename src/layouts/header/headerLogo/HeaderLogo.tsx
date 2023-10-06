import React from 'react';
import {MLink} from "../../../components/Link";
import {HeaderIcon} from "./headerIcon/HeaderIcon";

export const HeaderLogo: React.FC = () => {
    return (
        <MLink href={"#"}>
            <HeaderIcon/>
        </MLink>
    );
};

