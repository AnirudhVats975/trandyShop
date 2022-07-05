import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {mobile} from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
 height: 60px;
 ${mobile({height : "50px" })}

`;
const Wrapper = styled.div`
padding: 13px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({padding : "12px 0px" })}

`;

// leftsection 
const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 ${mobile({display : "none" })}
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display : "none" })}

`;

const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
 align-items: center;
 margin-left: 25px;
 padding: 5px;
${mobile({  display: "none" })}

`;

const Input = styled.input`
border: none;
outline: none;
${mobile({ display: "none" })}
`;

// center setion 
const Center = styled.div`
flex: 1;
text-align :center;
`;

const Logo = styled.h1`
font-weight: bold;
align-items: center;
${mobile({ fontSize : "16px", marginLeft : "20px", textAlign : "center" })}

`;

// right section
const Right = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-end;
 ${mobile({ justifyContent : "flex-start",alignItem : "center", flex: 1, })}
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({ marginLeft : "10px" , fontSize: "13px"})}

`;

const Navbar = () => {
    return (
        <>
            <Container>
                <Wrapper>

                    <Left>
                        <Language>En</Language>
                        <SearchContainer>
                            <Input />
                            <SearchIcon style={{color : "gray", fontSize: "15px"}} />
                        </SearchContainer>
                    </Left>


                    <Center>
                        <Logo>TrendyShop</Logo>
                    </Center>


                    <Right>
                    <MenuItem>REGISTER</MenuItem>
                        <MenuItem>SIGN IN</MenuItem>
                        <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>

        </>
    )
}

export default Navbar
