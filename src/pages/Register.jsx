import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100vw;
height: 100vh;
background-image: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("/image/regiterBackground.jpg");
background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;


const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color:white;

`;


const Title = styled.h1`
 font-size: 24px;
 font-weight: 300;

`;

const Form = styled.form`


`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0 ;
padding: 10px;
`;



const Agreement = styled.span`
 font-size: 13px;
 margin-top: 20px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 12px 18px;
background-color: teal;
color: white;
cursor: pointer;
margin: 20px 0px;
`;


const Register = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                        <Input type="text" placeholder="Fist Name" />
                        <Input type="text" placeholder="Last Name" />
                        <Input type="text" placeholder="Email" />
                        <Input type="text" placeholder="UserName" />
                        <Input type="text" placeholder="Password" />
                        <Input type="text" placeholder="Confrim Password" />
                        <br/><br/>
                        <Agreement>
                            By create an account, I consentto the process of my personal 
                            data in account wityh the <b>PRIVACY POLICY</b>
                        </Agreement><br/>
                        <Button>CREATE</Button>

                    </Form>
                </Wrapper>
            </Container>
        </>
    )
}

export default Register
