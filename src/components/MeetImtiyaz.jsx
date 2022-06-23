import React, { useEffect } from 'react'
import styled from 'styled-components'
import { device } from '../device';
import aboutone from '../images/aboutone.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 40px 40px 40px;
    justify-content: space-around;
`;
const TitleContainer = styled.div`
    padding: 0px 15px;
    margin: 0px 0px 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span{
        height: 100px;
        width: 1px;
        background-color: rgba(33, 37, 41,0.8);
    }
`;
const Title = styled.h2`
    font-size: 25px;
    margin-bottom: 8px;
    padding: 15px 20px;
    border: 1px rgba(33, 37, 41,0.5) solid;
    @media ${device.laptop}{
        font-size: 18px;

    }
`;
const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    @media ${device.laptop}{
        flex-direction: row;
    }
    
`;
const MeetParagraphs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 90%;
    text-align: center;
    @media ${device.laptop}{
        width: 50%;
        text-align: unset;
    }
`;
const Paragraph = styled.p`
    margin: 20px 0px;
    font-size: 18px;
    
`;
const ImageContainer = styled.div`
     @media only screen and (max-width: 500px){
        width: 90%;
        display: flex;
      align-items: center;
      justify-content: center;  
    }
`;
const Image = styled.img`
`;
const MeetImtiyaz = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <Container>

            <TitleContainer>
                <span></span>
                <Title>Meet Imtiyaz ElDjazair</Title>
            </TitleContainer>
            <Wrapper>
                <MeetParagraphs>
                    <Paragraph data-aos="fade-right" data-aos-duration="4000">Imtiyaz ElDjazair works on the development of creative  education and personal as well organizational development.</Paragraph>
                    <Paragraph data-aos="fade-right" data-aos-duration="4000">Our values are Trust, Quality, Fun, Creativity and Continuous Development. We offer a broad range of courses that have been carefully designed to cater for all needs and objectives.</Paragraph>
                    <Paragraph data-aos="fade-right" data-aos-duration="4000">Imtiyaz ElDjazair is led by a group of passionate people eager to make empower society through education.</Paragraph>
                    <Paragraph data-aos="fade-right" data-aos-duration="4000">Our methodology relies on cognitive psychology and other developmental tools to build programs that not only teach English but makes learners role-models in society. </Paragraph>
                    <Paragraph data-aos="fade-right" data-aos-duration="4000">The one true aim of our programmes is to help our students become fluent as English native speakers. Lessons are fun, interactive and designed to be effective in a short period of time.</Paragraph>
                </MeetParagraphs>
                <ImageContainer>
                    <Image src={aboutone} />
                </ImageContainer>
            </Wrapper>
        </Container>
    )
}

export default MeetImtiyaz