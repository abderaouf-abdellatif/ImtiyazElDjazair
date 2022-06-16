import React from 'react';
import styled from 'styled-components';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { framesItems } from '../../src/data';
import { device } from '../device';
const Container = styled.div`
    color: #212529;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.laptop} { 
        padding-bottom: 40px;    
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
const InfoContainer = styled.div`
    width: 90%;
    font-size:16px;
    color:white;
    padding: 0px 15px;
    color: #212529;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media ${device.laptop} { 
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 80%;
    }
`;
const InfoParagraph = styled.div`
    width: 80%;
    margin-bottom: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    span{
        width: 30%;
        height: 3px;
        background-color: #F5A425;
        display: inherit;
        margin: 10px;
        
    }
    @media ${device.laptop} { 
        width: 40%;
        font-size: 20px;
    }
`;
const InfoHighlights = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Highlight = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
    font-size: 24px;
    @media ${device.laptop} { 
        font-size: 20px ;
    }
`
const Fonctionalities = styled.div`
    margin: 50px 0px;
    width: 60%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    @media ${device.laptop} { 
        width: 80%;
        
    }
`;
const Function = styled.div`
    margin-top: 20px;
    height: 100px;
    width: 100px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: ease 0.5s all;
    margin: 40px;
    &:hover{
        height: 120px;
        width: 120px;
    }
    @media ${device.laptop} { 
        margin: 0;
    }
`;
const LinkTo = styled.a`
    text-decoration: none;
    color: #212529;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Image = styled.img`
    height: 100%;
    width: 100%;
`;
const ImageTitle = styled.h5`
    width: 100%;
    text-align:center;
    margin-top: 10px;
    font-size: 16px;
`;
const WhatWeDo = () => {
    return (
        <Container>
            <TitleContainer>
                <span></span>
                <Title>What We Do</Title>
            </TitleContainer>

            <InfoContainer>
                <InfoParagraph>
                    <span></span>
                    <p>
                        The one true aim of our programmes is to help our students become fluent as English native speakers. Lessons are fun, interactive and designed to be effective in a short period of time. That’s why we’ve developed our skills for career success course to give you the qualities that will increase your employability and take your career to the next level.
                    </p>
                    <span align={"right"}></span>
                </InfoParagraph>
                <InfoHighlights>
                    <Highlight>
                        <CheckCircleOutlineIcon style={{ marginRight: "5px", color: "#F5A425", fontSize: "30px" }} />
                        High-quality activity programme
                    </Highlight>
                    <Highlight>
                        <CheckCircleOutlineIcon style={{ marginRight: "5px", color: "#F5A425", fontSize: "30px" }} />
                        Explore in safety and comfort
                    </Highlight>
                    <Highlight>
                        <CheckCircleOutlineIcon style={{ marginRight: "5px", color: "#F5A425", fontSize: "30px" }} />
                        Available 7 days a week
                    </Highlight>
                </InfoHighlights>
            </InfoContainer>
            <Fonctionalities>

                {framesItems.map((item, index) => (
                    <Function key={index}>
                        <LinkTo href={item.Link} target="_blank">
                            <Image src={item.img} />
                            <ImageTitle>{item.title}</ImageTitle>
                        </LinkTo>
                    </Function>
                ))}

            </Fonctionalities>
        </Container>
    )
}

export default WhatWeDo