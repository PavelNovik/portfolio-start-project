import React from 'react';
import {MLink} from '../Link';
import {FIcon} from "../icon/FIcon";


export const Logo: React.FC = () => {
    return (
        <MLink href={"#"}>
            {/*<Icon width={"97px"} height={"59px"} viewBox={"0px 0px 97px 59px"} iconId={"logo"} />*/}
            <FIcon/>
        </MLink>
    );
};

