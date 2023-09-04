import styled from "styled-components";
import {ContainerBox} from "../../components/ContainerBox";
import {FlexWrapper} from "../../components/FlexWrapper";

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);

  ${ContainerBox} {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 40px;
    //margin-bottom: 100px;
  }

  ${FlexWrapper} {
    //padding-top: 5px;
    gap: 50px;
    height: 100%;
  }

`


export const S = {
    Header,
}