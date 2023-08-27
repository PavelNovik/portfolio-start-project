import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Icon} from "../icon/Icon";

type EdCardPropsType = {
    stage: string,
    status: string,
    company: string,
    date: string
}
export const EdCard = (props: EdCardPropsType) => {
    return (
        <StyledEdCard>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Title>{props.stage}</Title>
                <Button>{props.status}</Button>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"}>
                <Wrapper>
                    <Icon iconId={"build"} width={"16"} height={"12"}
                          viewBox={"0 0 16 12"}/><span>{props.company}</span>
                </Wrapper>
                <Wrapper>
                    <Icon iconId={"calendar"} width={"16"} height={"12"}
                          viewBox={"0 0 16 12"}/><span>{props.date}</span>
                </Wrapper>

            </FlexWrapper>
        </StyledEdCard>
    );
};

const StyledEdCard = styled.div`
  border-bottom: 2px solid #EBEAED;
`
const Title = styled.h3``

const Button = styled.div`
  text-align: center;
  width: 84px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 100px;
  background-color: rgba(215, 255, 224, 1);
  color: rgba(1, 140, 15, 1);
`

const Wrapper = styled.div``