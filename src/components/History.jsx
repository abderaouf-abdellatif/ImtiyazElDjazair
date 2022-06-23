import React, { useEffect } from 'react'
import styled from 'styled-components'
import { device } from '../device';
import abouttwo from '../images/abouttwo.jpg'
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
    font-size: 25px;
    margin-bottom: 8px;
    padding: 15px 20px;
    color: white;
    border: 1px rgba(255, 255, 255,0.8) solid;
    @media ${device.laptop}{
      font-size: 18px;

    }
`;
const Wrapper = styled.div`
   padding: 10px;
   display: flex;
   flex-direction:column ;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    @media ${device.laptop}{
      width: 70%;
      flex-direction: row;
    }
`;
const ImageContainer = styled.div`

`;
const Image = styled.img`

`;
const PragraphContainer = styled.div`
      color: white;
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 90%;
      @media ${device.laptop}{
        width: 50%;  
    }
`;
const Paragraph = styled.p`
  margin: 10px 10px 20px 10px;
  font-size: 18px;
`;
const History = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])
  return (
    <Container imgUrl={process.env.PUBLIC_URL + '/bg.jpg'}>
      <TitleContainer>
        <span></span>
        <Title>Imtiyaz ElDjazair's History</Title>
      </TitleContainer>
      <Wrapper>
        <ImageContainer data-aos="zoom-in" data-aos-duration="4000">
          <Image src={abouttwo} />
        </ImageContainer>
        <PragraphContainer>
          <Paragraph data-aos="fade-left" data-aos-duration="4000">Founded in July 2021, IMTIYAZ EL DJAZAIR is a vocational school. It offers a variety of courses, from General English courses to ESP and IELTS Preparation courses with native teachers. IMTIYAZ EL DJAZAIR is also an official registration and test centre for the IELTS exam. The first of its kind in the western region of Algeria.
            It provides an outstanding learning experience for individuals of all ages. From juniors to adults, where they are presented with opportunities in not only learning English, but also improving their social skills, expanding their knowledge and meeting new and interesting people.</Paragraph>
          <Paragraph data-aos="fade-left" data-aos-duration="4000"> Ever since its conception IMTIYAZ EL DJAZAIR strived to deliver an excellent and fun learning experience with native teachers. Which brought in an overwhelming positive feedback from the students who came to view the school as their home.</Paragraph>
        </PragraphContainer>
      </Wrapper>
    </Container>
  )
}

export default History