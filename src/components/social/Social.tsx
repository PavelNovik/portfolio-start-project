import React from 'react';
import { Icon } from "../icon/Icon";
import { MLink } from '../Link';
import {S} from "./Social_Styles";

type SocialPropsType = {
    socialItems: Array<string>
}

export const Social: React.FC<SocialPropsType> = (props: SocialPropsType) => {
    return (
        <S.Social>
            {
                props.socialItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <MLink href="#"><Icon iconId={item} width={"32"} height={"32"} viewBox={"0 0 32 32"} /></MLink>
                        </li>
                    )
                }
                )
            }
        </S.Social>
    );
};

