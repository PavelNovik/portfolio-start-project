import styled from "styled-components";
import {SectionText} from "../../../components/SectionTitleText";
import {Theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";

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
  height: 570px;
  border-radius: 20px;
  overflow: hidden;
  background-color: white;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);
`

const ImageContainer = styled.div`
  height: 260px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 105%;
    object-fit: cover;
  }
`

const TextContainer = styled.div`
padding: 27px 32px 25px 29px;
`

const Title = styled.h3`
  color: ${Theme.colors.cardText};
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  line-height: 0.93; /* 92.857% */
`

const Description = styled.p`
  color: ${Theme.colors.darkContent};
  font-size: 18px;
  font-weight: 300;
  line-height: 1.44; /* 144.444% */
  
  margin: 17px 0 12px;
`

const StackInfo = styled.span`
  display: inline-block;
  color: ${Theme.colors.titleColor};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.62; /* 162.5% */
  margin-bottom: 21px;
  span {
    font-size: 14px;
    font-weight: 300;
    line-height: 26px;
  }
  
`

const LinksField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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