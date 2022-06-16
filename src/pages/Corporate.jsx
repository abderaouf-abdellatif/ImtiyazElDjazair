import React from 'react'
import styled from 'styled-components'
import AboveNav from '../components/AboveNav';
import Corporatec from '../components/Corporatec';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTop from 'react-scroll-to-top'
const Container = styled.div`
  

`;
const Corporate = () => {
  return (
    <Container>
      <ScrollToTop smooth top="100" />
      <AboveNav />
      <Navbar />
      <Corporatec />
      <Footer />
    </Container>
  )
}

export default Corporate