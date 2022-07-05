import React from 'react'
import styled from 'styled-components';
import Navbar from './../components/Navbar';
import Annoucements from './../components/Annoucements';
import Newesletter from './../components/Newesletter';
import Footer from './../components/Footer';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Container = styled.div`

`;

const Wrapper = styled.div`
 padding: 50px;
 display: flex;
`;

const ImgContainer = styled.div`
flex:1;
`;


const Image = styled.img`
width: 100%;
height : 90vh;
object-fit: contain;

`;


const InfoContainer = styled.div`
flex:1;
padding: 0 50px;
`;

const Title = styled.h1`
font-weight: 200;

`;

const Desc = styled.p`
margin: 20px 0;
`;

const Price = styled.span`
font-weight: 500;
font-size: 40px;
`;


const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 30px 0;
`;

const Filter = styled.div`
 display: flex;

`;

const FilterTitle = styled.span`
 font-size: 20px;
 font-weight: 300;
`;


const FilterColor = styled.div`
 width :20px;
 height: 20px;
 border-radius: 50%;
 background-color: ${props => props.color};
 margin-left:5px ;
 cursor: pointer;

`;

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`;


const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
display: flex;
width: 50%;
align-items: center;
justify-content: space-between;

`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;



const Amount = styled.span`
 width: 30px;
 height: 30px;
 border-radius: 10px;
 border: 1px solid teal;
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 0 5px;
`;



const Button = styled.button`
padding: 10px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}
`;






const Product = () => {
    return (
        <>
            <Container>
                <Navbar />
                <Annoucements />
                <Wrapper>
                    <ImgContainer>
                        <Image src="/image/DenimJumosuit.jpg" />
                    </ImgContainer>

                    <InfoContainer>
                        <Title>Denim Jumosuit</Title>
                        <Desc>Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit. Dolor est velit fuga impedit hic veniam asperiores
                            soluta enim incidunt delectus!</Desc>
                        <Price>$ 20</Price>
                        {/* filter conatiner  */}
                        <FilterContainer>
                            <Filter>
                                <Filter>Color</Filter>
                                <FilterColor color="black" />
                                <FilterColor color="darkblue" />
                                <FilterColor color="gray" />
                            </Filter>

                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize>
                                    <FilterSizeOption>XS</FilterSizeOption>
                                    <FilterSizeOption>S</FilterSizeOption>
                                    <FilterSizeOption>M</FilterSizeOption>
                                    <FilterSizeOption>XL</FilterSizeOption>
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        {/* add conatiner */}
                        <AddContainer>
                            <AmountContainer>
                                <RemoveIcon />
                                <Amount>1</Amount>
                                <AddIcon />
                            </AmountContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
                <Newesletter />
                <Footer />
            </Container>
        </>
    )
}

export default Product
