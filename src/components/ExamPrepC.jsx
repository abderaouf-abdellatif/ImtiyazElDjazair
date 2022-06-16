import React from 'react'
import styled from 'styled-components'
import ielts from '../images/ielts.jpg'
const Container = styled.div`
    margin: 80px;
    color: #162239;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
const Title = styled.h5`
    font-size: 20PX;
    margin: 0px 0px 15px;
    color: #F5A425;
`;
const SubTitle = styled.h3`
    text-align: center;
    margin: 0px 0px 24px;
    width: 50%;
    @media only screen and (max-width: 500px){
        width: 100%;
        
    }
`;
const Wrapper = styled.div`
    display: flex;
    @media only screen and (max-width: 500px){
        flex-direction: column;
        align-items: center;
    }
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    margin: 40px 0px;
    justify-content: space-around;
    @media only screen and (max-width: 500px){
        align-items: center;
        width: 100%;
        justify-content: center;
    }
`;
const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    @media only screen and (max-width: 500px){
        margin-bottom: 20px;
        justify-content: center;
        
    }
`;
const InfoTitle = styled.h3`
    display: flex;
    align-items: center;
`;
const InfoText = styled.span`
    display: flex;
    align-items: center;
    margin-left: 15px;
`;
const InfoP = styled.p`
     @media only screen and (max-width: 500px){
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
        
    }
`;
const ImageWrapper = styled.div`
     @media only screen and (max-width: 500px){
        width: 100%;
        
    }
`;
const Image = styled.img`
     @media only screen and (max-width: 500px){
        width: 100%;
        
    }
`;
const ExamPrepC = () => {
    return (
        <Container>
            <Title>IELTS Preparation</Title>
            <SubTitle>
                Whether you need IELTS for university or Cambridge English qualifications,
                our exam courses are tailored to give you the skills you need to pass your exam.
            </SubTitle>
            <Wrapper>
                <InfoWrapper>
                    <TitleWrapper>
                        <InfoTitle>Course Length:</InfoTitle> <InfoText>minimum 6 weeks</InfoText>
                    </TitleWrapper>
                    <TitleWrapper>
                        <InfoTitle>Minimum Level :</InfoTitle> <InfoText>B1</InfoText>
                    </TitleWrapper>
                    <InfoP>The IELTS (International English Testing System) test gives you a globally recognised qualification to help you access university courses or obtain a visa to study.</InfoP>
                    <InfoP>Course components: 40 hours and 48 lessons dedicated to the skills, language and exam practice you need to achieve your desired result. Add 10 afternoon lessons of Skills for Academic Success to fully prepare yourself for the exam, university and future study.</InfoP>
                </InfoWrapper>
                <ImageWrapper>
                    <Image src={ielts} />
                </ImageWrapper>
            </Wrapper>
        </Container>
    )
}

export default ExamPrepC