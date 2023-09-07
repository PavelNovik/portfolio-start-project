import styled from "styled-components";
import {SectionText} from "../../../components/SectionTitleText";
import {Theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";
import {font} from "../../../styles/Common";

const Project = styled.section`
  text-align: center;

  ${SectionText} {
    margin: 50px 0 110px;
  }

`
const Wrapper = styled.div`

  row-gap: 60px;
  column-gap: 20px;

  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  //justify-content: space-between;
  justify-content: center;
  align-items: center;
`
const Card = styled.div`
  width: 375px;
  //height: 570px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${Theme.colors.bodyBackground};
  box-shadow: ${Theme.colors.cardShadow};

  &:hover {
    box-shadow: ${Theme.colors.hoverCardShadow};
    outline: 1px solid rgba(0, 0, 0, 0.10);
  }
`

const ImageContainer = styled.div`
  height: 260px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    object-fit: cover;
    transform: scale(1.2);
  }
`

const TextContainer = styled.div`
  padding: 27px 32px 0 29px;
`

const Title = styled.h3`
  ${font({color: `${Theme.colors.cardText}`, weight: 500, lineHeight: 0.93, Fmax: 28, Fmin: 24})}
  text-align: center;
`

const Description = styled.p`
  ${font({color: `${Theme.colors.darkContent}`, weight: 300, lineHeight: 1.44, Fmax: 18, Fmin: 14})}
  margin: 17px 0 12px;
`

const StackInfo = styled.span`
  display: inline-block;
  ${font({color: `${Theme.colors.titleColor}`, weight: 400, lineHeight: 1.62, Fmax: 16, Fmin: 12})}
  margin-bottom: 21px;

  span {
    ${font({weight: 300, lineHeight: 1.85, Fmax: 14, Fmin: 10})}
  }

`

const LinksField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  ${Link} {
    color: ${Theme.colors.cardText};

    span {
      margin-left: 12px;
      text-decoration-line: underline;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.62; /* 162.5% */
    }
  }

`


export const S = {
    Project,
    Wrapper,
    Card,
    ImageContainer,
    TextContainer,
    Title,
    Description,
    StackInfo,
    LinksField,
}