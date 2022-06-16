import React from 'react'
import Navbar from '../components/Navbar'
import AboveNav from '../components/AboveNav'
import Footer from '../components/Footer'
import styled from 'styled-components'
import TeachersList from '../components/TeachersList'

const Container = styled.div`
    text-align: center;
    
`;
const Teachers = () => {
  return (
    <Container>
        <AboveNav />
        <Navbar border={"teachers"}/>
        <TeachersList />
        <Footer />
    </Container>
  )
}

export default Teachers