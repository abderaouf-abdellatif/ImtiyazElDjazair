import React from 'react'
import ReactHoverFlip from 'react-hover-flip'
import { SpecialistCourseItems } from '../data'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;
const MainTitle = styled.h1`
    width: 60%;
    text-align: center;
    @media only screen and (max-width: 500px) {
        font-size: 18px;
        width: 90%;
    }
`;
const MainWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 370px;
    height: 255px;
    margin: 50px;
    border-radius: 10px;

`;
const Front = styled.div`
    width: 400px;
    height: 265px;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Back = styled.div`
    width: 370px;
    height: 255px;
    padding: 5px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    background-color: rgba(206, 138, 29,0.4);
`;
const Title = styled.h2``;
const Paragraph = styled.p`
    width: 100%;
    font-size: 18px;
    font-weight: 500;
`;
const SpecialistCourseC = () => {

    return (
        <Container>
            <MainTitle>We offer a wide arange of courses delivrered by highly qualified British native teachers.</MainTitle>
            <MainWrapper>

            {SpecialistCourseItems.map((item, index) => (
                <Wrapper key={index}>
                    <ReactHoverFlip
                        front={
                            <Front>
                                <Image src={item.img} />
                            </Front>}
                        back={
                            <Back>
                                <Title>{item.title}</Title>
                                <Paragraph>{item.paragraph}</Paragraph>
                            </Back>}
                        direction="horizontal"
                        height={100}
                        width={100}
                        />
                </Wrapper>
            ))}

            </MainWrapper>
        </Container>
    )
}

export default SpecialistCourseC