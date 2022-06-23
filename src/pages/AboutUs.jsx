import React from 'react'
import AboveNav from '../components/AboveNav';
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import MeetImtiyaz from '../components/MeetImtiyaz';
import History from '../components/History';
import Whyus from '../components/Whyus';
import Footer from '../components/Footer';
import WhereWeAre from '../components/WhereWeAre';
import ScrollToTop from 'react-scroll-to-top'
const Container = styled.div`
  overflow: hidden;
`;
const AboutUs = () => {
  return (
    <Container>
      <ScrollToTop smooth top="700" />
      <AboveNav />
      <Navbar border={"about"} />
      <MeetImtiyaz />
      <History />
      <Whyus />
      <WhereWeAre />
      <Footer />
    </Container>
  )
}

export default AboutUs