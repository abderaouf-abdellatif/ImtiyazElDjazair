import React from 'react'
import styled from 'styled-components'
import ielts from '../images/ielts.jpg'
import { device } from '../device';
const Container = styled.div`
    margin: 80px;
    color: #162239;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
const Title = styled.h5`
    font-size: 35px;
    margin: 0px 0px 15px;
    color: #f8ca00;
    @media ${device.laptop}{
        font-size: 20px;
    }
`;
const SubTitle = styled.h3`
    text-align: center;
    margin: 0px 0px 24px;
    width: 90%;
    font-size: 25px;
    @media ${device.laptop}{
        width: 50%;
        font-size: 16px;        
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.laptop}{
       display: flex;
       flex-direction: row;
    }
    
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    margin: 40px 0px;
    justify-content: space-around;
    
`;
const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    @media ${device.laptop}{
        margin-bottom: 20px;
        justify-content: left;
        
    }
`;
const InfoTitle = styled.h3`
    display: flex;
    align-items: center;
    font-size: 30px;
    @media ${device.laptop}{
        font-size: 18px;
    }
`;
const InfoText = styled.span`
    display: flex;
    align-items: center;
    margin-left: 15px;
    font-size: 30px;
    @media ${device.laptop}{
        font-size: 18px;
    }
`;
const InfoP = styled.p`
    font-size: 25px;
    margin-bottom: 15px;
    @media ${device.laptop}{
        font-size: 16px;
    }
`;
const ImageWrapper = styled.div`

`;
const Image = styled.img`
    
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