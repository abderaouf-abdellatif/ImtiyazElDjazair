import React from 'react'
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import  makeStyles  from "@mui/styles/makeStyles";
import {device} from '../device'

const Container = styled.div`
    display: none;
    @media ${device.laptop} { 
        width: 100%;
        display: flex;
        align-items: center;
        
    }
    
`;
const InfoContainer = styled.div`
    padding: 8.5px 48px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Address = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    span{
        font-size: 14px;
        padding-left: 10px;
    }
`;
const WorkingTime = styled.div`
    display: flex;
    align-items: center;
    span{
        font-size: 14px;
        padding-left: 10px;
    }
`;
const SocialContainer = styled.div`
    padding: 8.5px 20px;
    display: flex;
 
`;
const Phone = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    margin-right: 24px;
    span{
        font-size: 14px;
        padding-left: 10px;
    }
`;
const useStyles = makeStyles(theme => ({
    customHoverFocus: {
      "&:hover, &.Mui-focusVisible": { color: "#ce8a1d !important" }
    }
  }));
const AboveNav = () => {
    const classes = useStyles();
    return (
        <Container>
            <InfoContainer>
                <Address>
                    <LocationOnIcon style={{ color: "#F5A425", fontSize: "20px" }} />
                    <span>Banque AL Baraka, USTO, Bir El Djir- Oran </span>
                </Address>
                <WorkingTime>
                    <AccessTimeIcon style={{ color: "#F5A425", fontSize: "20px" }} />
                    <span>Sat - Wed : 09.00 AM - 08.00 PM | Thu - Fri : 09.00 AM - 05.00 PM</span>
                </WorkingTime>
            </InfoContainer>
            <SocialContainer>
                <Phone>
                    <PhoneIcon style={{ color: "#F5A425" }} />
                    <span>(+213) 0550 733 134 / 0561 670 805 / 0550 447 622</span>
                </Phone>
                
                <a href="https://web.facebook.com/Imtiyaz-El-Djazair-105864575072264" target="_blank" rel="noreferrer">
                <FacebookIcon className={classes.customHoverFocus} style={{ color: "#F5A425", marginLeft: "10px", cursor: "pointer" }}  />
                </a>
                <a href="https://www.instagram.com/imtiyaz_el_djazair_officiel" target="_blank" rel="noreferrer">
                <InstagramIcon className={classes.customHoverFocus} style={{ color: "#F5A425", marginLeft: "10px", cursor: "pointer" }} />
                </a>
        </SocialContainer>
        </Container >
    )
}

export default AboveNav