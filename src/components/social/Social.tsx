import React from 'react';
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { Link } from '../Link';

type SocialPropsType = {
    socialItems: Array<string>
}

export const Social: React.FC<SocialPropsType> = (props: SocialPropsType) => {
    return (
        <StyledSocial>
            {
                props.socialItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href="#"><Icon iconId={item} width={"32"} height={"32"} viewBox={"0 0 32 32"} /></Link>
                        </li>
                    )
                }
                )
            }
        </StyledSocial>
    );
};

const StyledSocial = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  li:first-child {
    margin-left: 15px;
  }

  li:nth-child(2) ${Link} {
    transform: translate(-1px, -2px);
  }


`