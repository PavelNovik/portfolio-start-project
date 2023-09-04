import React from 'react';
import iconSprite from "../../assets/img/icons-sprite.svg"

type IconPropsType  = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg width={props.width || "120px"} height={props.height || "120px"} viewBox={props.viewBox || "0px 0px 120px 120px"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}/>

        </svg>
    );
};

