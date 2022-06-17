import React from 'react'
import styled from 'styled-components';
import { device } from '../device';
const Container = styled.div`
    width: 100%;
    height: auto;
    background-image: url(${(props) => props.imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items:center;
    
`;
const TitleContainer = styled.div`
    padding: 0px 15px;
    margin: 0px 0px 40px;
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
    font-size: 35px;
    letter-spacing: 0.2rem;
    padding: 15px 20px;
    color: white;
    border: 1px rgba(255, 255, 255,0.8) solid;
    letter-spacing: 2px;
    @media ${device.laptop}{
        font-size: 22px;

    }
`;
const MapContainer = styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    display: none;
    @media ${device.laptop} { 
        display: unset;
    }
`;
const MapContainerPhone = styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    @media ${device.laptop} { 
        display: none;  
    }
`;
const WhereWeAre = () => {

    return (
        <Container imgUrl={process.env.PUBLIC_URL + '/bg.jpg'}>
            <TitleContainer>
                <span></span>
                <Title>Where We Are</Title>
            </TitleContainer>
            <MapContainer>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.109404087888!2d-0.6018847847407126!3d35.69892528019022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e63eaa9bb35bd%3A0x67570c87ff9b2ab2!2sImtiyaz%20El%20Djazair!5e0!3m2!1sfr!2sdz!4v1655415265093!5m2!1sfr!2sdz" width="1000" height="600"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </MapContainer>
            <MapContainerPhone>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.109404087888!2d-0.6018847847407126!3d35.69892528019022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e63eaa9bb35bd%3A0x67570c87ff9b2ab2!2sImtiyaz%20El%20Djazair!5e0!3m2!1sfr!2sdz!4v1655415265093!5m2!1sfr!2sdz" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </MapContainerPhone>
        </Container>
    );
}


export default WhereWeAre;