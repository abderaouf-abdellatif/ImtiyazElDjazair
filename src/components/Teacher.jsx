import React from 'react'
import styled from 'styled-components'

const InfoButton = styled.div`
    opacity:0;
    width: 100%;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    transition: all 0.3s ease;
`;
const Container = styled.div`
    width: 300px;
    height: 400px;
    flex: 1;
    min-width: 280px;
    margin: 0.75rem;
    padding-bottom: 0.75rem;
    background-color: #F3F6F8;
    color: #162239;
    position: relative;
    transition: all 0s ease;
    &:hover ${InfoButton} {
        opacity: 1;
    }
    &:hover{
        margin: 0;
        border: 0.75rem #efad3B solid;
        border-bottom: 0.75rem #efad3B solid;
    }
`;
const Image = styled.img`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 300px;
    object-fit: cover;
`;
const ToPage = styled.a`
    text-decoration: none;
    color: #efad3B;
`;

const Button = styled.button`
    color: #efad3B;
    background-color: transparent;
    border: 3px #efad3B solid;
    padding: 7px 15px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    transition: all 0.2s ease;
    &:hover ${ToPage} {
        color: white;
    }
    &:hover{
        background-color: #efad3B;
        color: white;
        cursor: pointer;
    }

`;


const InfoName = styled.div`
    margin: 0;
    padding: 24px;
    background-color: #F3F6F8;
`;

const Name = styled.h5`
    font-size: 20px;
    margin: 8px 0px;
`;
const Profession = styled.span``;
const Teacher = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <InfoButton>
                <ToPage href={'Teachers/' + item.id} target="_blank">
                    <Button>
                        READ MORE
                    </Button>
                </ToPage>
            </InfoButton>
            <InfoName>
                <Name>{item.name}</Name>
                <Profession>{item.profession}</Profession>
            </InfoName>
        </Container>
    )
}

export default Teacher