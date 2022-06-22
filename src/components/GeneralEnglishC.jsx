import React from 'react'
import styled from 'styled-components'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import programme from '../images/programme.png'
import levels from '../images/levels.png'
import { device } from '../device';
const Container = styled.div`
    margin: 80px;
    color: #162239;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.h6`
    margin: 0px 0px 8px;
    color: #efad3B;
    font-size: 24px;
    @media ${device.laptop}{
        font-size: 16px;

    }
    
`;
const SubTitle = styled.h1`
    font-size: 40px;
    text-align: center;
    margin: 0px 0px 24px;
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
    width: 90%;
    @media ${device.laptop}{
        width: 50%;
    }
`;
const TableTitle = styled.h3`
    text-align: center;
    font-size: 24px;
    @media ${device.laptop}{
        font-size: 16px;
    }
`;
const TableWrapper = styled.div`
    margin: 20px 0px;
    ;
`;
const Center = styled.div`
    width: 100%;
    @media ${device.laptop}{
        width: 80%;
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;
const Bottom = styled.div``;
const BottomImage = styled.img`
    
`;
const LinkTo = styled.a`
    text-decoration: none;
`;
const Button = styled.button`
    margin-top: 30px;
    padding: 15px 25px;
    font-size: 25px;
    font-weight: 600;
    background-color: #efad3B;
    color : white;
    border: 3px #efad3B solid;
    border-radius: 10px;
    letter-spacing: 1px;
    &:hover{
        cursor: pointer;

    }
    @media ${device.laptop}{
        font-size: 16px;
    }
`;
function createData(name, calories) {
    return { name, calories };
}
const rows = [
    createData('Maximum class size', 14),
    createData('Minimum course length', '2 weeks'),
    createData('Minimum Age', 16),
    createData('lesson duration', '50 minutes'),
    createData('Number of lessons', '4 lessons per week'),
];

const GeneralEnglishC = () => {
    return (
        <Container>
            <Title>LANGUAGE IS POWER</Title>
            <SubTitle>Your Study Programme</SubTitle>
            <Wrapper>
                <Top>
                    <TableTitle>
                        Take a look at a student’s typical journey through ID.
                        We’re here to help you every step of the way.
                    </TableTitle>
                    <TableWrapper>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ 'backgroundColor': '#4884a4', 'fontSize': '16px', 'fontWeight': '550' }}>Course Level</TableCell>
                                        <TableCell align="center" style={{ 'backgroundColor': '#4884a4', 'fontSize': '16px' }}>A1 to C1</TableCell>
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
                    <Image src={programme} />
                </Center>
                <Bottom>
                    <SubTitle>Our Levels</SubTitle>
                     <BottomImage src={levels}/>                       
                </Bottom>
                <LinkTo href='https://www.canva.com/design/DAEQ-GTmkxQ/MzCf4fRci_Qo5HejM3Prtg/view?utm_content=DAEQ-GTmkxQ&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent' target='_blank'>
                    <Button >More Information</Button>                             
                </LinkTo>
            </Wrapper>
        </Container>
    )
}

export default GeneralEnglishC