import React, { useState } from 'react'
import styled from 'styled-components'
import { whyUsItems } from '../../src/data'
import AnimatedShapes from './AnimatedShapes';
import { device } from '../device';
const Container = styled.div`
    color:#212529;
    background-color: white;
    padding: 0px 0px 100px;
    font-size:16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;
const TitleContainer = styled.div`
    padding: 0px 15px;
    margin: 0px 0px 70px;
    width: 100%;
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
    font-size: 35px;
    padding: 15px 20px;
    margin-bottom: 8px;
    border: 1px rgba(33, 37, 41,0.5) solid;
    @media ${device.laptop} { 
        font-size: 18px;
    }
    
`;

const InfoContainer = styled.div`
    display: none;
    
    @media ${device.laptop} { 
        display: unset;
        width: 80%;
        font-size:16px;
        color:#212529;
        padding: 0px 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
const InfoCategorie = styled.div`
    width: 62.5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const CategorieOne = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    border: ${props => props.index === 0 && "1px black solid"};
    border-radius: 20px;
    padding: 7px 5px;
    -webkit-box-shadow: ${props => props.index === 0 && "0px 0px 25px -10px rgba(0, 0, 0, 0.8)"};
    box-shadow:     ${props => props.index === 0 && "0px 0px 25x -10px rgba(0, 0, 0, 0.8)"};
    
`;
const CategorieTwo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    border: ${props => props.index === 1 && "1px black solid"};
    border-radius: 20px;
    padding: 7px 5px;
    -webkit-box-shadow: ${props => props.index === 1 && "0px 0px 25px -10px rgba(0, 0, 0, 0.8)"};
    box-shadow:     ${props => props.index === 1 && "0px 0px 25x -10px rgba(0, 0, 0, 0.8)"};
`;
const CategorieThree = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    border: ${props => props.index === 2 && "1px black solid"};
    border-radius: 20px;
    padding: 7px 5px;
    -webkit-box-shadow: ${props => props.index === 2 && "0px 0px 25px -10px rgba(0, 0, 0, 0.8)"};
    box-shadow:     ${props => props.index === 2 && "0px 0px 25x -10px rgba(0, 0, 0, 0.8)"};
`;

const CategorieTitle = styled.h5`
    font-size: 30px;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 0px 5px;
    z-index: 1;
    color: #efad3B ;
    @media ${device.laptop}{
        font-size: 13px;
        margin: 10px 0px;
        color: #212529;
    }
`;
const InfoDescription = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    margin-top: 60px;
    padding: 0px 15px;
    justify-content: space-between;
`;
const ImageContainer = styled.div`
    width:540px;
    height: 335px;
    padding: 0px 15px;
    z-index: 1;
`;

const Image = styled.img`
    padding: 0px 45px 0px 0px;
`;
const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const DescriptionTitle = styled.h4`
    font-size: 32px;
    margin: 0px 0px 30px;
    z-index: 1;

`;
const DescriptionParagraph = styled.p`
    font-weight: 500;
    font-size: 30px;
    margin: 0px 0px 16px;
    letter-spacing: 1px;
    line-height: 26px;
    color: #212529;
    z-index: 1;
    @media ${device.laptop}{
        font-size: 18px;

    }

`;

const InfoContainerRes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media ${device.laptop} { 
        display: none;
    }
`;
const CategorieRes = styled.div`
    
    text-align: center;
    width: 80%;
`;

const Whyus = () => {
    const [catIndex, setCatIndex] = useState(0);
    const handleClick = (index) => {
        setCatIndex(index);
    }
    return (
        <Container>
            <AnimatedShapes />
            <TitleContainer>
                <span></span>
                <Title>Why Choose Imtiyaz ElDjazayir?</Title>
            </TitleContainer>
            <InfoContainer>
                <InfoCategorie>
                    <CategorieOne onClick={() => handleClick(0)} index={catIndex} >
                        <CategorieTitle>BEST EDCUATION </CategorieTitle>
                    </CategorieOne>
                    <CategorieTwo onClick={() => handleClick(1)} index={catIndex}>
                        <CategorieTitle>GREAT TEACHERS</CategorieTitle>
                    </CategorieTwo>
                    <CategorieThree onClick={() => handleClick(2)} index={catIndex}>
                        <CategorieTitle>CERTIFICATION</CategorieTitle>
                    </CategorieThree>
                </InfoCategorie>
                <InfoDescription>
                    <ImageContainer>
                        <Image src={whyUsItems[catIndex].img} />
                    </ImageContainer>
                    <DescriptionContainer>
                        <DescriptionTitle>{whyUsItems[catIndex].Title}</DescriptionTitle>
                        <DescriptionParagraph>
                            {whyUsItems[catIndex].paragraph}
                        </DescriptionParagraph>
                    </DescriptionContainer>
                </InfoDescription>
            </InfoContainer>
            <InfoContainerRes>
                <CategorieRes>
                    <CategorieTitle>BEST EDCUATION </CategorieTitle>
                    <DescriptionParagraph>
                            {whyUsItems[0].paragraph}
                        </DescriptionParagraph>
                </CategorieRes>
                <CategorieRes>
                    <CategorieTitle>GREAT TEACHERS</CategorieTitle>
                    <DescriptionParagraph>
                            {whyUsItems[1].paragraph}
                        </DescriptionParagraph>
                </CategorieRes>
                <CategorieRes>
                    <CategorieTitle>CERTIFICATION</CategorieTitle>
                    <DescriptionParagraph>
                            {whyUsItems[2].paragraph}
                        </DescriptionParagraph>
                </CategorieRes>
            </InfoContainerRes>
        </Container>
    )
}

export default Whyus