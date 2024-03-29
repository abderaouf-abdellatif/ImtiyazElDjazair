import React, { useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../device';
import Aos from "aos";
import "aos/dist/aos.css";
const Container = styled.div`
    width: 100%;
    height: auto;
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
    font-size: 35px;
    margin-bottom: 8px;
    padding: 15px 20px;
    color: white;
    border: 1px rgba(255, 255, 255,0.8) solid;
    letter-spacing: 2px;
    @media ${device.laptop} {
        font-size: 30px;
    }
`;
const InfoContainer = styled.div`
    margin-top: 20px;
    width: 80%;
    font-size:16px;
    color:white;
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.laptop} { 
        margin-top: 0px;
        
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
    height: 100px;
    width: 2px;
    background-color: #f8ca00;
    margin-right: 10px;
    @media ${device.laptop} { 
        height: 200px;
        
    }
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;
const Number = styled.h4`
    font-size: 7vw;
    font-weight: 700;
    line-height: 0.9em;
    margin-left: 10px;
    @media ${device.laptop} { 
        font-size: 5vw;
    }
`;
const Word = styled.h5`
    font-size: 4vw;
    font-weight: 500;
    margin-left: 10px;
    margin-top: 5px;
    @media ${device.laptop} { 
        font-size: 2vw;
    }
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
    useEffect(()=>{
        Aos.init({duration: 1000});
    }, [])
    return (
        <Container imgUrl={process.env.PUBLIC_URL + '/bg.jpg'} >
            <TitleContainer>
                <span></span>
                <Title>What We Did</Title>
            </TitleContainer>
            <InfoContainer>
                <AchievementOne>
                    <One data-aos="zoom-in" data-aos-duration="4000">                      
                        <Span></Span>
                        <Info>
                            <Number>200+</Number>
                            <Word>Students</Word>
                        </Info>
                    </One>
                    <Two data-aos="zoom-in" data-aos-duration="4000">
                        <Span></Span>
                        <Info>
                            <Number>100%</Number>
                            <Word>IELTS Succes</Word>
                        </Info>
                    </Two>
                </AchievementOne>

                <AchievementTwo>
                    <One data-aos="zoom-in" data-aos-duration="4000">
                        <Span></Span>
                        <Info>
                            <Number>14</Number>
                            <Word>Staff</Word>
                        </Info>
                    </One>
                    <Two data-aos="zoom-in" data-aos-duration="4000">
                        <Span></Span>
                        <Info>
                            <Number>130+</Number>
                            <Word>Certifications</Word>
                        </Info>
                    </Two>

                </AchievementTwo>

            </InfoContainer>

        </Container>
    )
}

export default WhatWeDid