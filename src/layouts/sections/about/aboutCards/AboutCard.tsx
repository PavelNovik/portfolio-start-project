import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {S} from "./Card_Styles";

type CardPropsType = {
    stage: string,
    status: string,
    company: string,
    location?: string,
    date: string
}
export const AboutCard: React.FC<CardPropsType> = (props: CardPropsType) => {
    return (
        <S.Card status={props.status}>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <S.Text>{props.stage}</S.Text>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"}>
                <S.Wrapper>
                    <Icon iconId={"build"} width={"16"} height={"12"}
                          viewBox={"0 0 16 12"}/><S.Info>{props.company}</S.Info>
                </S.Wrapper>
                {
                    props.location ? <S.Wrapper>
                        <Icon iconId={"location"} width={"16"} height={"12"}
                              viewBox={"0 0 16 12"}/><S.Info>{props.location}</S.Info>
                    </S.Wrapper> : <div></div>
                }
                <S.Wrapper>
                    <Icon iconId={"calendar"} width={"16"} height={"12"}
                          viewBox={"0 0 16 12"}/><S.Info>{props.date}</S.Info>
                </S.Wrapper>

            </FlexWrapper>

        </S.Card>
    );
};

