import styled from "styled-components";
import {ContainerBox} from "../../components/ContainerBox";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Theme} from "../../styles/Theme";

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${Theme.colors.backgroundHeaderColor};
  z-index: 999;

  ${ContainerBox} {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 40px;
    //margin-bottom: 100px;
  }

  ${FlexWrapper} {
    height: 100%;
    max-width: 800px;
    width: 100%;
  }

`


export const S = {
    Header,
}