import React from 'react'
import styled from 'styled-components'
import AboveNav from '../components/AboveNav';
import Footer from '../components/Footer';
import GeneralEnglishC from '../components/GeneralEnglishC';
import Navbar from '../components/Navbar';
import ScrollToTop from 'react-scroll-to-top'
const Container = styled.div``;

const GeneralEnglish = () => {
  return (
    <Container>
      <ScrollToTop smooth top="100" />
      <AboveNav />
      <Navbar />
      <GeneralEnglishC />
      <Footer />
    </Container>
  )
}

export default GeneralEnglish