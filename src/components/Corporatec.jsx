import React from 'react'
import styled from 'styled-components'
import corporate from '../images/Corporate.png'
import partners from '../images/partners.png'
import { device } from '../device'
const Container = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    @media ${device.laptop}{
        width: 90%;
        flex-direction:row ;
    }
`;
const TopText = styled.p`
    width: 100%;
    letter-spacing: 1px;
    margin-bottom: 15px;
    font-weight: 600;
    @media ${device.laptop}{
        width: 40%;
        font-size: 22px;    
    }
`;
const TopImage = styled.div``;
const Image = styled.img``;
const Center = styled.div`
        width: 100%;
 
`;
const SubTitle = styled.h1`
    font-size: 40px;
    text-align: center;
    margin-top: 40px;
    color: #4782a4;
    
`;
const BottomImage = styled.img`
    width: 100%;
    height: auto;
`;
const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    width: 90%;
    margin: 40px 0px;
    @media ${device.laptop}{
        flex-direction: row;
    }
`;
const CoraporateOne = styled.div`
    padding: 20px 25px;
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.8);
    box-shadow: 0px 0px 25x -10px rgba(0, 0, 0, 0.8);
    @media ${device.laptop}{
        width: 40%;
        
    }
`;
const CoraporateTitle = styled.h5`
    margin: 10px 0px;
    font-size: 20px;
`;
const CoraporateP = styled.p`
    font-size: 18px;
`;



const Corporatec = () => {
    return (
        <Container>
            <Top>
                <TopText>
                    At Imtiyaz Eldjazair, we don’t just work with individual students, we also collaborate with businesses to meet their training needs.
                    To assure the satisfaction of our clients we first analyze the needs of the company, then we plan and provide courses based on their needs.
                </TopText>
                <TopImage>
                    <Image src={corporate} />
                </TopImage>
            </Top>
            <Center>
                <SubTitle>Corporate Partreners</SubTitle>
                <BottomImage src={partners} />
            </Center>
            <Bottom>
                <SubTitle>Corporate Success Stories</SubTitle>
                <Wrapper>
                    <CoraporateOne>
                        <CoraporateTitle>MAGHREB EMBALLAGE </CoraporateTitle>
                        <CoraporateP>
                            ” I reached out to you for English lessons for our employees. I was pleasantly surprised by the quality of your services.I had expected good quality of service and my expectations were completely fulfilled. I am very satisfied with our collaboration.
                            I would like, therefore, to express my gratitude and all my thanks for this excellent partnership.”
                        </CoraporateP>
                    </CoraporateOne>

                    <CoraporateOne>
                        <CoraporateTitle>KNAUF </CoraporateTitle>
                        <CoraporateP>
                            “An amazing school with dedicated teachers and staff.
                            We were drawn to BS Algeria’s entrepreneurial spirit, its authentic commitment to cultivating a growth mindset in students, and a unique,
                            yet the very innovative, approach to education via interactive learning with remarkable results. We’re looking forward to being a part of the future growth of BS Algeria.”
                        </CoraporateP>
                    </CoraporateOne>
                </Wrapper>
            </Bottom>
        </Container>
    )
}

export default Corporatec