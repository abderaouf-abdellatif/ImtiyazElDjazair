import React, {useState} from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
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
    color: #F5A425;
`;
const SubTitle = styled.h1`
    font-size: 40px;
    text-align: center;
    margin: 0px 0px 24px;
    @media only screen and (max-width: 500px){
        width: 90%;
        font-size: 30px;
    }
   
`;
const Wrapper = styled.div`
    width: 50%;
    padding: 50px;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 500px){
        width: 90%;
        
    }
`;
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
const WrapperTwo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
    @media only screen and (max-width: 500px){
        width: 90%;
        flex-direction:column ;

    }
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 500px){
        align-items: center;
        
    }
`;
const Label = styled.label`
    margin: 5px 0px;
    text-align: left;
    color: #162239;
    font-size: 18px;
    font-weight: 400;
`;
const Input = styled.input`
    width: 200px;
    height: 20px;
    padding: 1rem 0.75rem;
    margin-bottom: 5px;
    background-color: rgba(230, 230, 230,0.8) !important;
    border: 3px solid transparent;
    font-size: 1rem;
    font-weight: 400;
    transition: all 0.5s ease;
    &:focus { 
        outline: none;
        border: 3px solid #F5A425;
}
    @media only screen and (max-width: 500px){
        width: 100%;
        
    }
`;
const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 500px){
        width: 80%;
        align-items: center;
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
        border: 3px solid #F5A425;
}
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