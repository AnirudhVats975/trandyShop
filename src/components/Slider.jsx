import React, {useState} from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {slideItems} from '../data';
import { mobile } from './../responsive';


const Conatiner = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({display : "none" })}

`;

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top:0;
bottom :0;
left : ${props => props.direction === "left" && "10px"};
right : ${props => props.direction === "right" && "10px"};
cursor: pointer;
margin: auto;
opacity: 0.5;
z-index: 2;
`;

const Wappper = styled.div`
height: 100%;
display: flex;
transform: translateX(${props=> props.slideIndex * -100}vw);
transition: all 1.5s ease;
align-items: center;


`;

const MainSlider = styled.div`
display: flex;
align-items: center;
 width: 100vw;
height: 95vh;
margin-top: 30px;
`;

const Imgcontainer = styled.div`
 flex: 1;
 height: 100%;
 text-align: center;
`;

const Image = styled.img`
height: 80%;
`

const InfoContainer = styled.div`
 flex: 1;
 padding:50PX;
 text-align: start;

`;

const Title = styled.h1`
    font-size: 70px;

    `;

const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color:transparent;
    cursor: pointer;
`;






const Slider = () => {
   const [slideIndex, setSlideIndex]= useState(0);
    const HandleClick = (direction) =>{
     if(direction === "left"){
         setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 )
     }else{
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0 )
     }
    }

    return (
        <>
            <Conatiner>
                <Arrow direction="left" onClick={()=> HandleClick("left")}>
                    <ArrowLeftIcon />
                </Arrow>
                <Wappper slideIndex={slideIndex}>
                    {
                       slideItems.map((item)=>{
                           return(
                               <>
                            <MainSlider bg={item.bg}>
                            <Imgcontainer>
                                <Image src={item.img} />
                            </Imgcontainer>
    
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>SHOP NOW</Button>
                            </InfoContainer>
    
                        </MainSlider>
                        </>
                           )
                      
                      
                       }) 
                    }
                   

                </Wappper>
                <Arrow direction="right" onClick={()=> HandleClick("right")}>
                    <ArrowRightIcon />
                </Arrow>
            </Conatiner>
        </>
    )
}

export default Slider;
