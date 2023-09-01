import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {Theme} from "../../../../styles/Theme";
import {CardText, TextInfo} from "../cardTitle/CardText";

type ExpCardPropsType = {
    stage: string,
    status: string,
    company: string,
    location: string,
    date: string
}
type StyledExpCardPropsType = {
    status: string,
}

export const ExpCard = (props: ExpCardPropsType) => {
    return (
        <StyledExpCard status={props.status}>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <CardText>{props.stage}</CardText>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"}>
                <Wrapper>
                    <Icon iconId={"build"} width={"16"} height={"12"}
                          viewBox={"0 0 16 12"}/><TextInfo>{props.company}</TextInfo>
                </Wrapper>
                <Wrapper>
                    <Icon iconId={"location"} width={"16"} height={"12"}
                          viewBox={"0 0 16 12"}/><TextInfo>{props.location}</TextInfo>
                </Wrapper>
                <Wrapper>
                    <Icon iconId={"calendar"} width={"16"} height={"12"}
                          viewBox={"0 0 16 12"}/><TextInfo>{props.date}</TextInfo>
                </Wrapper>

            </FlexWrapper>

        </StyledExpCard>
    );
};

const StyledExpCard = styled.div<StyledExpCardPropsType>`
  //border: 1px solid #EBEAED;
& + & {
  margin-top: 30px;
}
  position: relative;

  &::before {
    content: "${props => props.status}";
    display: inline-block;
    text-align: center;
    font-weight: 600;
    line-height: 2.89;
    width: 84px;
    height: 24px;
    font-size: 9px;
    border-radius: 100px;
    background-color: ${Theme.colors.buttonBg};
    color: ${Theme.colors.buttonText};

    position: absolute;
    right: 0;
    top: -3px;
  }

  &::after {
    content: '';
    display: inline-block;
    height: 2px;
    width: 100%;
    background-color: ${Theme.colors.colorsGrey};
  }

`
const Wrapper = styled.div`
  width: 30%;

  &:last-of-type {
    text-align: right;
  }
`