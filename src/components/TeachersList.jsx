import React from 'react'
import styled from 'styled-components'
import Teacher from './Teacher';
import { TeachersItems } from '../data';
const Container = styled.div`
    margin: 80px;
    color: #162239;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.h6`
    font-size: 16px;
    margin: 0px 0px 8px;
    color: #efad3B;
`;
const SubTitle = styled.h1`
    font-size: 40px;
    width: 500px;
    text-align: center;
    margin: 0px 0px 24px;
    @media only screen and (max-width: 500px){
        width : 400px;
        font-size: 30px;
        
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const TeachersList = () => {
  return (
    <Container>
        <Title>MEET THE TEAM</Title>
        <SubTitle>We Have Great Experience Of Teaching</SubTitle>
        <Wrapper>
            {
                TeachersItems.map((item,index) => (
                    <Teacher key={index} item={item}/>
                ))
            }
        </Wrapper>
    </Container>
  )
}

export default TeachersList