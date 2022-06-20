import React from 'react'
import styled from 'styled-components'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { device } from '../device';
const Container = styled.div`
    height: 40vh;
    background-color: #162239;
    color: white;
    display: flex;
    padding: 0px 20px;
    flex-direction: column;
    align-items: center;
    height: auto;
    @media ${device.laptop}{
        flex-direction: row;
    }
`;
const InfoContainer = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    padding: 20px;
`;
const Title = styled.h4`
    margin: 0px 0px 24px;
    text-align: center;
    font-size: 36px;
    letter-spacing: 0.2rem;
    @media ${device.laptop}{
        font-size: 24px;
        text-align: left;
    }
`;
const Info = styled.div`
    display: none;
    display: flex;
    align-items: center;
    font-size: 35px;
    margin: 10px 0px;
    span{
        margin-left: 10px;
    }
    @media ${device.laptop} {
        font-size: 16px;
        margin: 5px 0px;

    }
`;
const LinksContainer = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    padding: 20px;
    display: none;
    @media ${device.laptop}{
        display: unset;
    }
`;
const List = styled.ul`
    padding:0;
    margin:0;
    list-style:none;
    display: flex;
    flex-wrap: wrap;
`;
const Link = styled.li`
    width:50%;
    margin-bottom: 5px;
    cursor: pointer;
    display:flex;
    align-items: center;
`;

const LinkTo = styled.a`
    text-decoration: none;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        letter-spacing: 2px;
        color: #F5A425;
    }
`;
const ContactContainer = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;  
`;

const ContactButton = styled.button`
    margin: 20px 0px;
    padding: 15px 20px;
    font-size: 30px;
    font-weight: 600;
    background-color:transparent ;
    color : #F5A425;
    border: 3px #F5A425 solid;
    &:hover{
        cursor: pointer;
        background-color:transparent ;
        background-color: #F5A425;
        color: white;
        
    }
    @media ${device.laptop}{
        font-size: 16px;

    }
`;
const SocialMedia = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-around;
`;
const Footer = () => {
    return (
        <Container>
            <InfoContainer>
                <Title>Find Us</Title>
                <Info>
                    <LocationOnIcon style={{ fontSize : "16px !important", color :"#F5A425" }}/>
                    <span>Banque AL Baraka, USTO, Bir El Djir - Oran 31000 </span>
                </Info>
                <Info>
                    <PhoneIcon style={{ fontSize : "16px !important", color :"#F5A425" }}/>
                    <span>0550 733 134 - 0561 670 805</span>
                </Info>
                <Info>
                    <EmailIcon style={{ fontSize : "16px !important", color :"#F5A425" }}/>
                    <span>contact@imtiyazeldjazair.dz</span>
                </Info>
                <Info>
                    <AccessTimeIcon style={{ fontSize : "16px !important", color :"#F5A425" }}/>
                    <span>Sat - Wed : 09.00 AM - 08.00 PM <br /> Thu - Fri : 09.00 AM - 05.00 PM</span>
                </Info>
            </InfoContainer>
            <LinksContainer>
                <Title>Quick Links</Title>
                <List>
                    <Link>
                        <ChevronRightIcon />
                        <LinkTo href='/Teachers'>Teachers</LinkTo>
                    </Link>
                    <Link>
                        <ChevronRightIcon />
                        <LinkTo href='/Corporate' target="_blank">Corporate</LinkTo>
                    </Link>
                    <Link>
                        <ChevronRightIcon />
                        <LinkTo href='/Contact'>Contact</LinkTo>
                    </Link>
                    <Link>
                        <ChevronRightIcon />
                        <LinkTo href='/ExamPreparation' target="_blank">Exam Prepration</LinkTo>
                    </Link>
                    <Link>
                        <ChevronRightIcon />
                        <LinkTo href='/About'>About Us</LinkTo>
                    </Link>
                    <Link>
                        <ChevronRightIcon />
                        <LinkTo href='/SpecialistCourse' target="_blank">Specialist Courses</LinkTo>
                    </Link>
                    <Link>
                        <ChevronRightIcon />
                        <LinkTo href='/GeneralEnglish' target="_blank">General English</LinkTo>
                    </Link>
                    <Link>
                        <ChevronRightIcon />
                        <LinkTo href='/Juniors' target="_blank">Juniors</LinkTo>
                    </Link>
                </List>
            </LinksContainer>
            <ContactContainer>
                <Title>Contact Us</Title>
                <LinkTo href='/Contact'><ContactButton>Contact</ContactButton></LinkTo>
                <SocialMedia>
                <a href="https://web.facebook.com/Imtiyaz-El-Djazair-105864575072264" target="_blank" rel="noreferrer">
                    <FacebookIcon style={{ color: "white", marginLeft: "10px", cursor: "pointer" }} />
                </a>
                <a href="https://www.instagram.com/imtiyaz_el_djazair_officiel" target="_blank" rel="noreferrer">
                    <InstagramIcon style={{ color: "white", marginLeft: "10px", cursor: "pointer" }}/>
                </a>
                </SocialMedia>
            </ContactContainer>
        </Container>
    )
}

export default Footer