import React from 'react';
import userPhoto from "../../../assets/img/user-photo-min.webp"
import userPhotoMain from '../../../assets/img/user-photo-min1.webp'
import { ContainerBox } from "../../../components/ContainerBox";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Main_Styles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <ContainerBox>
                <FlexWrapper justify={"space-between"} align={"center"}>

                    <S.Title>

                        Hi 👋, <br />
                        My name is <br />
                        <Typewriter
                            options={{
                                strings: ['Pavel Novik', 'Pawiel Nowik', 'Павел Новiк', 'Павел Новик'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        {/*<span> Pavan MG </span> <br/>*/}
                        I build things for web

                    </S.Title>
                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}
                    >
                        <S.Photo>
                            <img src={userPhotoMain} alt="user" />
                        </S.Photo>

                    </Tilt>
                </FlexWrapper>
            </ContainerBox>
        </S.Main>
    );
};