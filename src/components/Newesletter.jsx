import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import  styled  from 'styled-components';
import { mobile } from './../responsive';


const Container =styled.div`
background-color: #fcf5f5;
height: 60vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


`;

const Title =styled.h1`
font-size: 70px;
margin: 20px;
${mobile({fontSize : "30px" })}

`;

const Description =styled.div`
font-size: 24px;
font-weight: 300;
margin: 20px;
${mobile({textAlign : "center" })}

`;

const InputContainer =styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({width : "70%" })}


`;

const Input =styled.input`
border: none;
outline: none;
flex: 9;
padding-left: 20px;
`;


const Button =styled.button`
flex: 1;
border: none;
background-color: teal;
outline: none;
cursor: pointer;
color: white;
`;





const Newesletter = () => {
    return (
        <>
            <Container>
                <Title>Newsletter</Title>
                <Description>Get timly update from favorite products.</Description>
                <InputContainer>
                    <Input placeholder="Your email"/>
                    <Button>
                        <SendIcon />
                    </Button>
                </InputContainer>
            </Container>
        </>
    )
}

export default Newesletter
