import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { sliderItems } from '../data';
import { device } from '../device';
const Container = styled.div`
    @media ${device.laptop}{
        display: none;
    }
`;
const Wrapper = styled.div`
    position: relative;
`;
const Image = styled.img`
`;
const InfoContainer = styled.div`
    position: absolute;
    left: 0;
    right:0;
    top: 35%;
    font-weight: bold;
`;

const SmallTitle = styled.h6`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    color:white;
`;
const Title = styled.h1`
    font-size : 60px;
    color:white;
    margin:30px 0px;
    span{
        color:#f8ca00;
    }
`;
const SliderM = () => {
    return (
        <Container>
            <Carousel style={{ "margin" : "0 !important", "padding" : "0 !important" }} showArrows={false} autoPlay infiniteLoop interval={4000}>
                <Wrapper>
                    <Image src={sliderItems[0].img} />
                    <InfoContainer>
                        <SmallTitle>{sliderItems[0].smallTitle}</SmallTitle>
                        <Title><span>{sliderItems[0].span}</span>{sliderItems[0].title}</Title>
                    </InfoContainer>
                </Wrapper>
                <Wrapper>
                    <Image src={sliderItems[1].img} />
                    <InfoContainer>
                        <SmallTitle>{sliderItems[1].smallTitle}</SmallTitle>
                        <Title><span>{sliderItems[1].span}</span>{sliderItems[1].title}</Title>
                    </InfoContainer>
                </Wrapper>
                <Wrapper>
                    <Image src={sliderItems[2].img} />
                    <InfoContainer>
                        <SmallTitle>{sliderItems[2].smallTitle}</SmallTitle>
                        <Title><span>{sliderItems[2].span}</span>{sliderItems[2].title}</Title>
                    </InfoContainer>
                </Wrapper>
            </Carousel>
        </Container>
    )
}

export default SliderM