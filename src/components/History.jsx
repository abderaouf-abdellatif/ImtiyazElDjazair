import React from 'react'
import styled from 'styled-components'
import teachertwo from '../images/teachertwo.jpg'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${(props) => props.imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 500px){
        height:auto;        
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
        background-color: rgba(255, 255, 255,0.8);
    }
`;
const Title = styled.h2`
    font-size: 18px;
    margin-bottom: 8px;
    padding: 15px 20px;
    color: white;
    border: 1px rgba(255, 255, 255,0.8) solid;
`;
const Wrapper = styled.div`
   padding: 10px;
    display: flex;
    justify-content: space-between;
    width: 70%;
    @media only screen and (max-width: 500px){
      width: 90%;
      flex-direction:column ;
    }
`;
const ImageContainer = styled.div`
   @media only screen and (max-width: 500px){
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;  
    }
`;
const Image = styled.img`
   @media only screen and (max-width: 500px){
        width: 90%;
        
    }
`;
const PragraphContainer = styled.div`
      width: 50%;
      color: white;
      text-align: center;
      @media only screen and (max-width: 500px){
        width: 90%;
        
    }
`;
const Paragraph = styled.p`
  margin: 10px 10px 20px 10px;
  font-size: 18px;
`;
const History = () => {
  return (
    <Container imgUrl={process.env.PUBLIC_URL + '/bg.jpg'}>
      <TitleContainer>
        <span></span>
        <Title>Imtiyaz ElDjazair's History</Title>
      </TitleContainer>
      <Wrapper>
        <ImageContainer>
          <Image src={teachertwo} />
        </ImageContainer>
        <PragraphContainer>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi voluptatem amet quod maiores! Explicabo, porro, unde exercitationem numquam atque veniam aliquid, eligendi harum quibusdam autem aut corrupti magnam voluptatibus.</Paragraph>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi voluptatem amet quod maiores! Explicabo, porro, unde exercitationem numquam atque veniam aliquid, eligendi harum quibusdam autem aut corrupti magnam voluptatibus.</Paragraph>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi voluptatem amet quod maiores! Explicabo, porro, unde exercitationem numquam atque veniam aliquid, eligendi harum quibusdam autem aut corrupti magnam voluptatibus.</Paragraph>
        </PragraphContainer>
      </Wrapper>
    </Container>
  )
}

export default History