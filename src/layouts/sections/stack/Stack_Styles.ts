import styled from "styled-components";
import {SectionText} from "../../../components/SectionTitleText";
import {Theme} from "../../../styles/Theme";

const Stack = styled.section`
  text-align: center;

  ${SectionText} {
    margin: 50px 0 130px;    
  }
  @media ${Theme.media.tablet} {
    ${SectionText} {
      margin: 50px 0 100px;
    }
  }
  @media ${Theme.media.mobile} {
    ${SectionText} {
      margin: 50px 0 70px;
    }
  }

`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 90px;

  @media ${Theme.media.desktop} {
    svg {
      transition: 1s;

      &:hover {
        transform: scale(1.5);
        filter: drop-shadow( .5rem .5rem .6rem ${Theme.colors.darkContent});
      }
    }
  }

  @media ${Theme.media.tablet} {
    gap: 70px;
    justify-content: space-evenly;
    svg {
      transition: 1s;

      &:hover {
        transform: scale(1.3);
        filter: drop-shadow( .3rem .3rem .4rem ${Theme.colors.darkContent});
      }
    }

  }
  @media ${Theme.media.mobile} {
    justify-content: space-evenly;
    gap: 50px;
  }
`

export const S = {
    Stack,
    Wrapper,
}