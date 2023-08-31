import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

type SocialPropsType = {
    socialItems: Array<string>
}

export const Social = (props: SocialPropsType) => {
    return (
        <StyledSocial>
            {
                props.socialItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href="#"><Icon iconId={item} width={"32"} height={"32"} viewBox={"0 0 32 32"}/></a>
                        </li>
                    )}
                )
            }
        </StyledSocial>
    );
};

const StyledSocial= styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  li {
    a {
      text-decoration: none;
    }
  }`