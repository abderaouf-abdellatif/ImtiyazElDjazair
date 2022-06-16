import React, { useState } from 'react'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import styled from 'styled-components';
import { TheySayItems } from '../../src/data'
const MainDiv = styled.div`
    height : 110vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 500px){
        height: 110vh;
    }
`;
const Container = styled.div`
    width : 100%;
    display : flex;
    position : relative;
    overflow: hidden;
`;

const Arrow = styled.div`
     width : 60px;
    height : 60px;
    border-radius : 50%;
    background-color: rgba(245, 164, 37,0.8);
    color:white;
    display : flex;
    justify-content : center;
    align-items : center;
    position : absolute;
    top: 0;
    bottom : 30vh;    
    left : ${props => props.direction === "left" && "10vw"};
    right : ${props => props.direction === "right" && "10vw"};
    margin : auto;
    cursor : pointer;
    opacity : 0.5;
    z-index: 4;
    transition: all 0.3s ease;
    &:hover{
        background-color: rgb(245, 164, 37);
        width : 65px;
        height : 65px;
    }
    @media only screen and (max-width: 500px){
        width:30px ;
        height: 30px;
        &:hover{
            width:30px ;
            height: 30px;
        }
    }
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
    border: 1px rgba(33, 37, 41,0.8) solid;
    letter-spacing: 2px;
`;
const InfoTitle = styled.h1`
    font-size: 40px;
    margin: 0px 0px 24px;
    color: #F5A425;
`;
const Wrapper = styled.div`
    height :100%;
    display: flex;
    transition : all 1.5s ease;
    transform: translateX( ${props => props.slideIndex * -100}vw);

    @media only screen and (max-width: 500px) {
        height: fit-content;

    }
`;
const Slide = styled.div`
    height : 100vh;
    width : 100vw;
    text-align: center;
    align-items : center;
    position: relative;
 `;


const ContainerTwo = styled.div`
    height : 90%;
    width: 100%;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 500px){
        height: fit-content;

    }
`;
const ContainerThree= styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Line = styled.span`
    margin-bottom: 16px;
    width: 200px;
    height: 1px;
    background-color: lightgray;
    
`;
const Image = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 48px;
    @media only screen and (max-width: 500px){
        width:100px ;
        height:100px;
       
    }
`;
const Paragraph = styled.span`
    font-size: 24px;
    margin: 0px 0px 16px;
    text-align: center;
    @media only screen and (max-width: 500px){
        font-size: 16px;
    }
`;
const Name = styled.h5`
    font-size: 20px;
    margin-bottom: 8px;
`;
const Profession = styled.span`
    font-size: 16px;
`;

const TheySay = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <MainDiv>
            <TitleContainer>
                <span></span>
                <Title>Testimonial</Title>
            </TitleContainer>
            <InfoTitle>What They Say!</InfoTitle>
            <Container>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <KeyboardArrowLeftOutlinedIcon style={{ fontSize: "30px" }} />
                </Arrow>



                <Wrapper slideIndex={slideIndex}>
                    {TheySayItems.map((item, index) => (
                        <Slide bg={item.bg} key={index}>
                            <ContainerTwo>
                                <ContainerThree>
                                    <Image src={item.img}></Image>
                                    <Paragraph>{item.paragraph}</Paragraph>
                                    <Line></Line>
                                    <Name>{item.name}</Name>
                                    <Profession>{item.profession}</Profession>
                                </ContainerThree>
                            </ContainerTwo>
                        </Slide>
                    ))}
                </Wrapper>

                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <KeyboardArrowRightOutlinedIcon style={{ fontSize: "30px" }} />
                </Arrow>
            </Container>
        </MainDiv>
    )
}

export default TheySay