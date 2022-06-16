import React from 'react'
import styled from 'styled-components'
import teacherone from '../images/teacherone.jpg'
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
    font-size: 18px;
    margin-bottom: 8px;
    padding: 15px 20px;
    border: 1px rgba(33, 37, 41,0.5) solid;
    
`;
const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    @media only screen and (max-width: 500px){
        width: 90%;
        flex-direction: column;
        align-items: center;
    }
`;
const MeetParagraphs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 50%;
    @media only screen and (max-width: 500px){
        width: 90%;
        text-align: center;
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
 @media only screen and (max-width: 500px){
        width: 90%;
        
}
`;
const MeetImtiyaz = () => {
    return (
        <Container>
            <TitleContainer>
                <span></span>
                <Title>Meet Imtiyaz ElDjazair</Title>
            </TitleContainer>
            <Wrapper>
                <MeetParagraphs>
                    <Paragraph>Imtiyaz ElDjazair works on the development of creative  education and personal as well organizational development.</Paragraph>
                    <Paragraph>Our values are Trust, Quality, Fun, Creativity and Continuous Development. We offer a broad range of courses that have been carefully designed to cater for all needs and objectives.</Paragraph>
                    <Paragraph>Imtiyaz ElDjazair is led by a group of passionate people eager to make empower society through education.</Paragraph>
                    <Paragraph>Our methodology relies on cognitive psychology and other developmental tools to build programs that not only teach English but makes learners role-models in society. </Paragraph>
                    <Paragraph>The one true aim of our programmes is to help our students become fluent as English native speakers. Lessons are fun, interactive and designed to be effective in a short period of time.</Paragraph>
                </MeetParagraphs>
                <ImageContainer>
                    <Image src={teacherone} />
                </ImageContainer>
            </Wrapper>
        </Container>
    )
}

export default MeetImtiyaz