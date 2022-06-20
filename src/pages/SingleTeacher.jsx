import React from 'react'
import {useLocation} from 'react-router-dom';
import styled from "styled-components"
import AboveNav from '../components/AboveNav';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { device } from '../device';


const Container = styled.div`
  
`;
const Wrapper = styled.div`
    padding: 50px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
    @media ${device.laptop}{
        flex-direction: row;
        align-items: unset;
    }
`;

const ImageContainer = styled.div`
    padding: 20px;

`;
const Image = styled.img`
    
`;
const InfoContainer = styled.div`
    padding:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media ${device.laptop}{
        align-items: unset;
        text-align: left;
    }
`;
const Name = styled.h4`
    margin: 10px 20px;
    font-size: 30px;
    width: 100%;
`;
const Profession = styled.h4`
    margin: 10px 20px;
    font-size: 20px;
    @media ${device.laptop}{
        font-size: 16px;
    }
`;
const Paragraph = styled.p`
    margin: 10px 20px;
    width: 80%;
    font-size: 25px;
    @media ${device.laptop}{
        font-size: 16px;
        font-weight: 400;
    }
`;
const SingleTeacher = ({item}) => {

    const HeaderView= () => {
        const location = useLocation();
        console.log(typeof(location.pathname));
        return parseInt(location.pathname.slice(-1))
      }

    const i =HeaderView()-1;
  return (
    <Container>
        <AboveNav />
        <Navbar border={"teachers"}/>
        <Wrapper>
            <ImageContainer>
                <Image src={item[i].img}/>
            </ImageContainer>
            <InfoContainer>
                <Name>{item[i].name}</Name>
                <Profession>{item[i].profession}</Profession>
                <Paragraph>{item[i].AboutMe}</Paragraph>
            </InfoContainer>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default SingleTeacher