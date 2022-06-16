import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import  AboveNav from '../components/AboveNav'
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
const Container = styled.div`
    text-align: center;
`;
const Contact = () => {
  return (
    <Container>
        <AboveNav />
        <Navbar border={"contact"}/>
        <ContactUs />
        <Footer />
    </Container>
  )
}

export default Contact