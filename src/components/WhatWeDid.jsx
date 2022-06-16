import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
    width: 100%;
    height: 90vh;
    background-image: url(${(props) => props.imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
        background-color: rgba(255, 255, 255,0.8);
    }
`;
const Title = styled.h2`
    font-size: 18px;
    margin-bottom: 8px;
    padding: 15px 20px;
    color: white;
    border: 1px rgba(255, 255, 255,0.8) solid;
    letter-spacing: 2px;
`;
const InfoContainer = styled.div`
    width: 80%;
    font-size:16px;
    color:white;
    margin-top: 0px;
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 500px){
        margin-top: 20px;
    }
`;
const AchievementOne = styled.div`
    width: 80%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const One = styled.div`
    display: flex;

`;
const Span = styled.span`
    width: 2px;
    height: 200px;
    background-color: #F5A425;
    margin-right: 10px;
    @media only screen and (max-width: 500px){
        height: 100px;
    }
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;
const Number = styled.h4`
    font-size: 5vw;
    font-weight: 700;
    line-height: 0.9em;
    margin-left: 10px;
`;
const Word = styled.h5`
    font-size: 2vw;
    font-weight: 500;
    margin-left: 10px;
    margin-top: 5px;
`;
const Two = styled.div`
    display: flex;
`;
const AchievementTwo = styled.div`
    width: 80%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
`;
const WhatWeDid = () => {
    return (
        <Container imgUrl={process.env.PUBLIC_URL + '/bg.jpg'} >
            <TitleContainer>
                <span></span>
                <Title>What We Did</Title>
            </TitleContainer>
            <InfoContainer>

                <AchievementOne>
                    <One>
                        <Span></Span>
                        <Info>
                            <Number>10k+</Number>
                            <Word>Students</Word>
                        </Info>
                    </One>
                    <Two>
                        <Span></Span>
                        <Info>
                            <Number>100%</Number>
                            <Word>IELTS Succes</Word>
                        </Info>
                    </Two>
                </AchievementOne>

                <AchievementTwo>
                    <One>
                        <Span></Span>
                        <Info>
                            <Number>50</Number>
                            <Word>Teachers</Word>
                        </Info>
                    </One>
                    <Two>
                        <Span></Span>
                        <Info>
                            <Number>150</Number>
                            <Word>Certifications</Word>
                        </Info>
                    </Two>

                </AchievementTwo>

            </InfoContainer>

        </Container>
    )
}

export default WhatWeDid