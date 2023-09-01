import React from 'react';
import {Link} from "../../../components/Link";
import {HeaderIcon} from "../headerIcon/HeaderIcon";

export const HeaderLogo = () => {
    return (
        <Link href={"#"}>
            <HeaderIcon/>
        </Link>
    );
};

