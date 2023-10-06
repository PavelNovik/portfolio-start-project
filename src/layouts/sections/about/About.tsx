import React from 'react';
import {Fade} from "react-awesome-reveal";

import {AboutCard} from "./aboutCards/AboutCard";
import {ContainerBox} from "../../../components/ContainerBox";
import {S} from "./About_Styles";

const expCardContent = [
    {
        stage: "Junior Web Developer",
        status: "Full Time",
        company: "Dr. Rajkumar’s Learning",
        location: "Bengaluru",
        date: "Sep 2021 - Dec 2021",
    },
    {
        stage: "Web Development Intern",
        status: "Internship",
        company: "IonPixelz Web Solutions",
        location: "Bengaluru",
        date: "Sep 2021 - Dec 2021",
    },
    {
        stage: "SEO / SEM Specialist",
        status: "Internship",
        company: "HAAPS",
        location: "Bengaluru",
        date: "Sep 2021 - Dec 2021",
    },
]

const edCardContent = [
    {
        stage: "Bachelor in Electronics & Communication",
        status: "Full Time",
        company: "Bangalore Institute of Technology",
        date: "Aug 2015 - Dec 2020",
    },
]
export const About: React.FC = () => {

    const expCard = expCardContent.map((card, index) => {
        return (
            <AboutCard key={index} stage={card.stage} status={card.status} company={card.company}
                       location={card.location} date={card.date}/>
        )
    })
    const edCard = edCardContent.map((card, index) => {
        return (
            <AboutCard key={index} stage={card.stage} status={card.status} company={card.company}
                       date={card.date}/>
        )
    })


    return (
        <S.About id={"about"}>
            <ContainerBox>

                <S.Wrapper>
                    <S.Title>About Me</S.Title>
                    <S.Text>The Generator App is an online tool that helps you to export ready-made templates ready to
                        work as
                        your future website. It helps you to combine slides, panels and other components and export it
                        as a
                        set
                        of static files: HTML/CSS/JS.</S.Text>
                    <Fade cascade={true} damping={0.2}>
                    <S.Title>Work Experience</S.Title>
                    {expCard}
                    <S.Title>Education</S.Title>
                    {edCard}
                    </Fade>
                </S.Wrapper>
            </ContainerBox>
        </S.About>
    );
};

