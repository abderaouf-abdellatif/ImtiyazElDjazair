import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import React, { useState } from 'react'
import styled from 'styled-components';
import { sliderItems } from '../../src/data';
import {device} from '../device';
const Container = styled.div`
    display: none;
    @media ${device.laptop} { 
        display: unset;
        width : 100%;
        height : 90vh;
        display : flex;
        position : relative;
        overflow: hidden;
    }
    
`;
const Arrow = styled.div`
    width : 60px;
    height : 60px;
    border-radius : 50%;
    background-color: rgba(245, 164, 37,0.8);
    display : flex;
    justify-content : center;
    align-items : center;
    position : absolute;
    top: 0;
    bottom : 0;    
    left : ${props => props.direction === "left" && "60px"};
    right : ${props => props.direction === "right" && "60px"};
    margin : auto;
    cursor : pointer;
    opacity : 0.5;
    z-index: 4;
    transition: all 0.3s ease;
    &:hover{
        background-color: rgb(245, 164, 37);
        width : 65px;
        height : 65px;
        color:white;
    }
`;
const Wrapper = styled.div`
    height :100%;
    display: flex;
    transition : all 1.5s ease;
    transform: translateX( ${props => props.slideIndex * -100}vw);


`;
const Slide = styled.div`
    height : 100vh;
    width : 100vw;
    text-align: center;
    align-items : center;
    background-color: #${props => props.bg};
    position: relative;
    `;


const Image = styled.img`
    height : 90%;
    width: 100%;
`;
const InfoContainer = styled.div`
    position: absolute;
    left: 0;
    right:0;
    top: 35%;
    font-weight: bold;
    
`;

const SmallTitle = styled.h6`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color:white;
`;
const Title = styled.h1`
    font-size : 64px;
    color:white;
    margin:30px 0px;
    span{
        color:#F5A425;
    }
`;



const Button = styled.button`
    margin-top: 20px;
    padding: 15px 20px;
    font-size: 20px;
    font-weight: 600;
    background-color:transparent ;
    color : #F5A425;
    border: 3px #F5A425 solid;

    &:hover{
        cursor: pointer;
        background-color:transparent ;
        background-color: #F5A425;
        color: white;
        border: 3px #F5A425 solid;

    }
`;

const LinkTo = styled.a`
    text-decoration: none;
`;
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <KeyboardArrowLeftOutlinedIcon style={{ fontSize: "30px" }} />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item, index) => (
                    <Slide bg={item.bg} key={index}>
                        <Image src={item.img} />

                        <InfoContainer>
                            <SmallTitle>{item.smallTitle}</SmallTitle>
                            <Title><span>{item.span}</span>{item.title}</Title>
                            <LinkTo href='/About'>
                                <Button>Discover More</Button>
                            </LinkTo>
                        </InfoContainer>

                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <KeyboardArrowRightOutlinedIcon style={{ fontSize: "30px" }} />
            </Arrow>
        </Container>
    )
}

export default Slider
