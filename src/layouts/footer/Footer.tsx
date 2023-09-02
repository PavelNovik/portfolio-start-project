import React from 'react';
import styled from "styled-components";
import {ContainerBox} from "../../components/ContainerBox";
import {FooterMenu} from "./footerMenu/FooterMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Theme} from "../../styles/Theme";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <ContainerBox>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <FooterMenu menuItems={items}/>
                    <p><span>Designed and built by </span>Pavan MG <span> with </span>Love<span> & </span>Coffee</p>

                </FlexWrapper>
            </ContainerBox>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

  ${FlexWrapper} {
    color: ${Theme.colors.titleColor};
    font-family: "DM Sans", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.45; /* 144.444% */

    p {
      text-align: center;
      font-family: "Poppins", sans-serif;

      background: linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 45px 0 60px;

      span {
        -webkit-text-fill-color: ${Theme.colors.darkContent};
      }


    }
  }
`