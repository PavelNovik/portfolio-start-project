import React from 'react';
import { Icon } from "../icon/Icon";
import { Link } from '../Link';


export const Logo: React.FC = () => {
    return (
        <Link href={"#"}>
            <Icon width={"97px"} height={"59px"} viewBox={"0px 0px 97px 59px"} iconId={"logo"} />
        </Link>
    );
};

