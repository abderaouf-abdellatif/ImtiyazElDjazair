import React from 'react'
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