import React from 'react'
import styled from 'styled-components'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import teens from "../images/Teens.jpg"
import juniors from '../images/juniors.jpg'
import levelsJuniors from '../images/levelsJuniors.png'
const Container = styled.div`
    margin: 80px;
    color: #162239;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.h1`
    margin: 0px 0px 8px;
    color: #F5A425;
    margin-bottom: 20px;
    @media only screen and (max-width: 500px){
        font-size: 20px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Top = styled.div`
    width: 50%;
    @media only screen and (max-width: 500px){
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
const SubTitle = styled.h2`
    text-align: center;
    margin: 0px 0px 24px;
    @media only screen and (max-width: 500px){
        font-size: 16px;
        width: 90%;
        
    }
`;
const TableWrapper = styled.div`
    margin: 20px 0px;
`;

const Center = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0px;
    @media only screen and (max-width: 500px){
        width: 90%;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    
`;
const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 500px){
        width: 90%;
        
    }
`;
const TitleTwo = styled.h3`
    font-size: 22px;
    margin-bottom: 20px;
    @media only screen and (max-width: 500px){
        margin-top: 20px;
        
    }
`;
const Image = styled.img`
    width: 500px;
    height: auto;
    margin-bottom: 15px;
    @media only screen and (max-width: 500px){
        width: 400px;
        
    }
`;
const Paragraph = styled.p`
    width: 500px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    @media only screen and (max-width: 500px){
        width: 400px;
        margin-bottom: 20px;
}
`;
const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Bottom = styled.div`
     @media only screen and (max-width: 500px){
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
`;
const BottomImage = styled.img`
    @media only screen and (max-width: 500px){
        width: 90%;
        height: auto;
    }
`;
const LinkTo = styled.a`
    text-decoration: none;
`;
const Button = styled.button`
    margin-top: 30px;
    padding: 15px 25px;
    font-size: 16px;
    font-weight: 600;
    background-color: #F5A425;
    color : white;
    border: 3px #F5A425 solid;
    border-radius: 10px;
    letter-spacing: 1px;
    &:hover{
        cursor: pointer;

    }
    @media only screen and (max-width: 500px){
        width: 100%;
        
    }

`;
function createData(name, calories) {
    return { name, calories };
}
const rows = [
    createData('Maximum class size', 10),
    createData('Minimum course length', '2 weeks'),
    createData('Min-Max Age', "8-16"),
    createData('lesson duration', '50 minutes'),
];
const JinourC = () => {
    return (
        <Container>
            <Title>English for Juniors</Title>
            <Wrapper>
                <Top>
                    <SubTitle>We provide our students with a number of options in English courses to suit all levels and needs.</SubTitle>

                    <TableWrapper>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ 'backgroundColor': '#4884a4', 'fontSize': '16px', 'fontWeight': '550' }}>Course Level</TableCell>
                                        <TableCell align="center" style={{ 'backgroundColor': '#4884a4', 'fontSize': '16px' }}>Starters to flyers</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                                        >
                                            <TableCell component="th" scope="row" style={{ 'backgroundColor': '#4884a4', 'fontSize': '16px', 'fontWeight': '550' }}>
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="center" style={{ 'backgroundColor': '#4884a4', 'fontSize': '16px' }}>{row.calories}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TableWrapper>
                </Top>
                <Center>
                    <Left>
                        <TitleTwo>Juniors (7-11)</TitleTwo>
                        <Image src={juniors} />
                        <Paragraph>Our courses for 7-11 year olds emphasise learning in a fun environment. the children learn to communicate in English mainly through listening and speaking. while also practising reading and writing.</Paragraph>
                    </Left>
                    <Right>
                        <TitleTwo>Teens (12-15)</TitleTwo>
                        <Image src={teens} />
                        <Paragraph>In our courses for teenagers (12-15). children continue to improve their English through lessons with a communicative focus. Vocabulary and grammar are presented and used in the context of interesting and relevant topics which keep older children engaged.</Paragraph>
                    </Right>
                </Center>
                <Bottom>
                    <SubTitle>Our Levels</SubTitle>
                     <BottomImage src={levelsJuniors}/>                       
                </Bottom>
                <LinkTo href='https://www.canva.com/design/DAEQ-GTmkxQ/MzCf4fRci_Qo5HejM3Prtg/view?utm_content=DAEQ-GTmkxQ&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent' target='_blank'>
                    <Button >More Information</Button>                             
                </LinkTo>
            </Wrapper>
        </Container>
    )
}

export default JinourC