import React from 'react'
import {useLocation} from 'react-router-dom';
import styled from "styled-components"
import AboveNav from '../components/AboveNav';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Container = styled.div`
  
`;
const Wrapper = styled.div`
    padding: 50px;
    width: 90%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width:500px){
        flex-direction: column;
        height: auto;
    }
`;

const ImageContainer = styled.div`
    padding: 20px;
    @media only screen and (max-width:500px){
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const Image = styled.img`
    @media only screen and (max-width:500px){
        width: 90%;
    }
`;
const InfoContainer = styled.div`
    padding:20px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width:500px){
        align-items: center;
        text-align: center;
    }
`;
const Name = styled.h4`
    margin: 10px 20px;
`;
const Profession = styled.h4`
    margin: 10px 20px;
`;
const Paragraph = styled.p`
    margin: 10px 20px;
    width: 80%;
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