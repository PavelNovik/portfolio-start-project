import React from 'react';
import styled from "styled-components";
import {ExpCard} from "./aboutCards/ExpCard";
import {EdCard} from "./aboutCards/EdCard";
import image from "../../../assets/img/drawing.png"
import {ContainerBox} from "../../../components/ContainerBox";
import {Theme} from "../../../styles/Theme";

export const About = () => {
    return (
        <StyledAbout>
            <ContainerBox>

                <Wrapper>
                    <Title>About Me</Title>
                    <Text>The Generator App is an online tool that helps you to export ready-made templates ready to
                        work as
                        your future website. It helps you to combine slides, panels and other components and export it
                        as a
                        set
                        of static files: HTML/CSS/JS.</Text>
                    <Title>Work Experience</Title>
                    <ExpCard stage={"Junior Web Developer"} status={"Full Time"} company={"Dr. Rajkumar’s Learning"}
                             location={"Bengaluru"} date={"Sep 2021 - Dec 2021"}/>
                    <ExpCard stage={"Web Development Intern"} status={"Internship"} company={"IonPixelz Web Solutions"}
                             location={"Bengaluru"} date={"Sep 2021 - Dec 2021"}/>
                    <ExpCard stage={"SEO / SEM Specialist"} status={"Internship"} company={"HAAPS"}
                             location={"Bengaluru"}
                             date={"Sep 2021 - Dec 2021"}/>
                    <Title>Education</Title>
                    <EdCard stage={"Bachelor in Electronics & Communication"} status={"Full Time"}
                            company={"Bangalore Institute of Technology"} date={"Aug 2015 - Dec 2020"}/>

                </Wrapper>
            </ContainerBox>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
  background: right bottom / contain no-repeat url(${image}) border-box;
  // background-image: url(${image});
  // background-repeat: no-repeat;
  // background-position: right top;
  // background-size: contain;
 

`

const Wrapper = styled.div`
  width: 60%`
const Title = styled.h2`
  color: ${Theme.colors.titleColor};
  font-size: 42px;
  font-weight: 700;
  line-height: 1.24; /* 123.81% */
  letter-spacing: -0.4px;

  margin: 38px 0;
  
  &:first-child {
    margin-top: 0;
  }
`
const Text = styled.p`
  color: ${Theme.colors.darkContent};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.44; /* 144.444% */
`