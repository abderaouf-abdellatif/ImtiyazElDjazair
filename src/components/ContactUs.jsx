import React, {useState} from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
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
    color: #f8ca00;
    font-size: 30px;
    @media ${device.laptop}{
        font-size: 16px;

    }
`;
const SubTitle = styled.h1`
    font-size: 40px;
    text-align: center;
    margin: 0px 0px 24px;
   
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    justify-content: center;
    width: 90%;
    @media ${device.laptop}{
        width: 50%;
    }
`;
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
const WrapperTwo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
    flex-direction:column ;
    width: 90%;
    @media ${device.laptop}{
        width: 100%;
        flex-direction: row;
    }
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.laptop}{
        align-items: unset;
    }
`;
const Label = styled.label`
    margin: 5px 0px;
    text-align: left;
    color: #162239;
    font-size: 28px;
    font-weight: 400;
    @media ${device.laptop}{
        font-size: 18px;

    }
`;
const Input = styled.input`
    height: 20px;
    padding: 1rem 0.75rem;
    margin-bottom: 5px;
    background-color: rgba(230, 230, 230,0.8) !important;
    border: 3px solid transparent;
    font-size: 1rem;
    font-weight: 400;
    transition: all 0.5s ease;
    width: 300px;
    &:focus { 
        outline: none;
        border: 3px solid #f8ca00;
}
    @media ${device.laptop}{
        width: 200px;
    }
`;
const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.laptop}{
        align-items: unset;
    }

`;
const Message = styled.textarea`
    padding: 1rem 0.75rem;
    background-color: rgba(230, 230, 230,0.8) !important;
    border: 3px solid transparent;
    font-size: 1rem;
    font-weight: 400;
    transition: all 0.5s ease;
     &:focus { 
        outline: none;
        border: 3px solid #f8ca00;
}
`;
const Button = styled.button`
    margin-top: 30px;
    padding: 15px 25px;
    font-size: 25px;
    font-weight: 600;
    background-color: #f8ca00;
    color : white;
    border: 3px #f8ca00 solid;
    border-radius: 10px;
    letter-spacing: 1px;
    &:hover{
        cursor: pointer;
        
    }
    @media ${device.laptop}{
        font-size: 16px;

    }
`;
const Result = () =>{
    return(
        <p>Your message has been sent successfully, we will contact you soon!</p>
    )
}

const ContactUs = () => {
    const [result, setResult] = useState(false);
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs
            .sendForm("service_1wktp8l", "template_vo3h1zu", e.target,"ebGxglbzG8JI_ZxxW")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setResult(true);
    };
    setTimeout(()=>{
        setResult(false)
    },5000)
    return (
        <Container>
            <Title>GET IN TOUCH</Title>
            <SubTitle>Contact Imtiyaz ElDjazair</SubTitle>
            <Wrapper>
                <Form action='' onSubmit={sendEmail}>
                    <WrapperTwo>
                        <InfoContainer>
                            <Label>Your Name</Label>
                            <Input type="text" name='name' required></Input>
                            <Label>Your phone</Label>
                            <Input type="text" name='phone' required></Input>
                            <Label>Your email</Label>
                            <Input type="email" name='email' required></Input>
                        </InfoContainer>
                        <MessageContainer>
                            <Label>Your message</Label>
                            <Message cols="40" rows="11" name='message' required></Message>
                        </MessageContainer>
                    </WrapperTwo>
                    <div> { result ? <Result /> : null} </div>
                    <Button type='submit'>Send  Message</Button>
                </Form>
            </Wrapper>

        </Container>
    )
}

export default ContactUs