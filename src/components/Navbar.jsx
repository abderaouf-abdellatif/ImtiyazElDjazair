import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { device } from '../device';
import id from "../images/logo.png";
const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #0d1523;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    height: 80px;
    `;
const Logo = styled.div`
    padding-left: 20px;
    display: flex;
    align-items: center;
    height: 80px;
    
    a{
        text-decoration: none;
    }
    @media ${device.laptop} { 
        padding-left: 40px;
        height: auto;
    }
    
`;
const Image = styled.img`
    height: 120px;
    width: 300px;
    padding-left: 40px;
`;
const Menu = styled.ul`
    display: none;
    @media ${device.laptop} { 
        display: flex;
        align-items: center;
        list-style-type: none;
        padding: 0;
        padding-right: 60px;
        height: 100%;
    }
    
`;
const MenuItem = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 17px;
    
`;
const MenuItemLink = styled.a`
    padding: 11px 16px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    display: block;
    
    border: ${props => props.border === true ? "2px #f8ca00 solid" : "2px transparent solid"};
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        border: 2px #f8ca00 solid;
        border-radius: 5px;
        cursor: pointer;
    }
`;
const MenuHam = styled.div`
    display: unset;
    padding-right: 4rem;
    cursor: pointer;
    @media ${device.laptop} { 
        display: none;
    }
`;
const MenuRes = styled.ul`
    transition: all 0.5s ease;
    display: ${props => props.index === 0 && "none"};
    display: ${props => props.index === 1 && "unset"};
    list-style: none;
    color: white;
    @media ${device.laptop} { 
        display: none;
    }
    
`;
const MenuItemRes = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
`;
const MenuItemResLink = styled.a`
    text-decoration: none;
    color: white;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
`


const Navbar = ({ border }) => {
    const [index, setIndex] = useState(0);
    const handleClick =() =>{
        const i = index;
        if (i===0) setIndex(1);
        if (i===1) setIndex(0);
    }
    return (
        <Container>
            <Wrapper>
                <Logo><a href='/'><Image src={id} alt="" /></a></Logo>
                <Menu>
                    <MenuItem><MenuItemLink border={border === "home"} href='/'>HOME</MenuItemLink></MenuItem>
                    <MenuItem><MenuItemLink border={border === "teachers"} href='/Teachers'>TEACHERS</MenuItemLink></MenuItem>
                    <MenuItem><MenuItemLink border={border === "about"} href='/About'>ABOUT US</MenuItemLink></MenuItem>
                    <MenuItem><MenuItemLink border={border === "contact"} href='/Contact'>CONTACT</MenuItemLink></MenuItem>
                </Menu>
                <MenuHam onClick={handleClick}>
                    <MenuIcon style={{"fontSize" : "50px"}}/>
                </MenuHam>
            </Wrapper>
            <MenuRes index={index}>
                <MenuItemRes><MenuItemResLink href="/">HOME</MenuItemResLink></MenuItemRes>
                <MenuItemRes><MenuItemResLink href="/Teachers">TEACHERS</MenuItemResLink></MenuItemRes>
                <MenuItemRes><MenuItemResLink href="/About">ABOUT US</MenuItemResLink></MenuItemRes>
                <MenuItemRes><MenuItemResLink href="/Contact">CONTACT</MenuItemResLink></MenuItemRes>
            </MenuRes>
        </Container>
    )
}


export default Navbar