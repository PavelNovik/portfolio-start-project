import React from 'react';
import styled from "styled-components";
import {ExpCard} from "./exp/ExpCard";
import {EdCard} from "./ed/EdCard";
import image from "../../../assets/img/drawing.png"

export const About = () => {
    return (
        <StyledAbout>
            <Wrapper>
                <Title>About Me</Title>
                <Text>The Generator App is an online tool that helps you to export ready-made templates ready to work as
                    your future website. It helps you to combine slides, panels and other components and export it as a
                    set
                    of static files: HTML/CSS/JS.</Text>
                <Title>Work Experience</Title>
                <ExpCard stage={"Junior Web Developer"} status={"Full Time"} company={"Dr. Rajkumar’s Learning"}
                         location={"Bengaluru"} date={"Sep 2021 - Dec 2021"}/>
                <ExpCard stage={"Web Development Intern"} status={"Internship"} company={"IonPixelz Web Solutions"}
                         location={"Bengaluru"} date={"Sep 2021 - Dec 2021"}/>
                <ExpCard stage={"SEO / SEM Specialist"} status={"Internship"} company={"HAAPS"} location={"Bengaluru"}
                         date={"Sep 2021 - Dec 2021"}/>
                <Title>Education</Title>
                <EdCard stage={"Bachelor in Electronics & Communication"} status={"Full Time"}
                        company={"Bangalore Instutute of Technology"} date={"Aug 2015 - Dec 2020"}/>

            </Wrapper>
            <Container>
                <img src={image} alt="block"/>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
  display: flex;
  position: relative;
  background-color: #ffe698;
  min-height: 80vh;
  overflow: hidden;

`

const Container = styled.div`
  position: absolute;
  top: -150px;
  right: 0px;
`
const Wrapper = styled.div`
  width: 50%`
const Title = styled.h2``
const Text = styled.p``