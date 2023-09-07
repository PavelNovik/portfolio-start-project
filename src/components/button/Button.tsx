import React from 'react';
import {S} from "./Button_Styles";

export const Button: React.FC = () => {
    return (
        <S.Button className={"switch__1"}>
            <input id="switch-1" type="checkbox"/>
                <label htmlFor="switch-1"></label>
        </S.Button>
    );
};

