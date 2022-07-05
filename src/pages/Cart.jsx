import React from 'react'
import Navbar from './../components/Navbar';
import styled  from 'styled-components';
import Annoucements from './../components/Annoucements';
import Footer from './../components/Footer';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { mobile } from './../responsive';


const Container = styled.div`


`;
const Wapper = styled.div`
padding: 20px;
margin: 30px 0;



`;

const Title = styled.h1`
font-weight: 300;
align-items: center;
${mobile({textAlign : "center"})}

`;

const Top = styled.div`
padding: 20px;
display: flex;
align-items: center;
justify-content: space-between;


`;

const TopButton = styled.div`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=> props.type === "filled" && "none"};
background-color: ${props=> props.type === "filled" ? "black" : "transparent"};
color: ${props=> props.type === "filled" && "white"};

`;


const TopTextContainer = styled.div`
display: flex;
align-items: center;
`;


const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;




const Buttom = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 ${mobile({flexDirection: "column"})}
`;


const Info = styled.div`
 flex: 3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}




`;

const ProdcutDetail = styled.div`
 flex: 2;
 display: flex;




`;



const Image = styled.img`
 width: 200px;
`;


const Detail = styled.div`
padding: 20px ;
display: flex;
flex-direction: column;
justify-content: space-around;


`;




const ProdcutName = styled.span`

`;


const ProdcutId = styled.span`

`;

const ProductColor = styled.div`
 width: 20px;
 height: 20px;
 border-radius: 50%;
background: ${props => props.color};

`;

const ProductSize = styled.div`

`;

const PriceDetail =styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`;

const ProdutAmountCountainer =styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

const ProdutAmount =styled.div`
font-size: 23px;
margin: 5px;
border: 1px solid teal;
padding: 5px 15px;
border-radius: 4px;
`;

const ProdcutPrize =styled.div`
font-size: 26px;
font-weight: 600;
`;

const Hr =styled.hr`
background: #eee;
border: none;
height: 1px;
`;

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;

const SummeryTitle = styled.h1`
font-weight: 300;
`;

const SummaryItem = styled.span`
margin: 30px 0;
display: flex;
justify-content: space-between;

`;

const Summrytext = styled.span`

`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: black;
  font-weight: 500;
  color: white;
  cursor: pointer;
`;






const Cart = () => {
    return (
        <>
         <Container>
             <Navbar/>
             <Annoucements/>
              <Wapper>
                  <Title>Your Bag</Title>
                  <Top>
                    <TopButton>CONTINUE SHOPING</TopButton>
                    <TopTextContainer>
                         <TopText>Shoping Bag (2)</TopText>
                         <TopText>Your Wishlist (0)</TopText>
                     </TopTextContainer>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                    
                  </Top>

                  <Buttom>
                      <Info>
                          <Product>
                          <ProdcutDetail>
                          <Image src="/image/cart1.jpg"/>
                          <Detail>
                                <ProdcutName> <b>Product :</b>SESSLE THINDER SHOES</ProdcutName>
                                <ProdcutId> <b>ID :</b>aed4567rty56789</ProdcutId>
                                 <ProductColor color="thistle" />
                                 <ProductSize><b>Size :</b>40.5</ProductSize>
                            </Detail>
                          </ProdcutDetail>

                          <PriceDetail>
                            <ProdutAmountCountainer>
                            <AddIcon/>
                            <ProdutAmount>2</ProdutAmount>
                            <RemoveIcon/>
                            </ProdutAmountCountainer>
                            <ProdcutPrize>$ 20</ProdcutPrize>
                          </PriceDetail>
                          </Product>

                          <Hr/>

                          <Product>
                          <ProdcutDetail>
                          <Image src="/image/cart1.jpg"/>
                          <Detail>
                                <ProdcutName> <b>Product :</b>SESSLE THINDER SHOES</ProdcutName>
                                <ProdcutId> <b>ID :</b>aed4567rty56789</ProdcutId>
                                 <ProductColor color="thistle" />
                                 <ProductSize><b>Size :</b>40.5</ProductSize>
                            </Detail>
                          </ProdcutDetail>

                          <PriceDetail>
                            <ProdutAmountCountainer>
                            <AddIcon/>
                            <ProdutAmount>2</ProdutAmount>
                            <RemoveIcon/>
                            </ProdutAmountCountainer>
                            <ProdcutPrize>$ 20</ProdcutPrize>
                          </PriceDetail>
                          </Product>
                      </Info>

                      <Summary>
                          <SummeryTitle>ORDER SUMMARY</SummeryTitle>
                          <SummaryItem>
                              <Summrytext>Subtotal</Summrytext>
                              <Summrytext>$ 80</Summrytext>
                          </SummaryItem>

                          <SummaryItem>
                              <Summrytext>Estimated Shiping</Summrytext>
                              <Summrytext>$ 4.5</Summrytext>
                          </SummaryItem>

                          <SummaryItem>
                              <Summrytext>Shipping Discount</Summrytext>
                              <Summrytext>$ -4.5</Summrytext>
                          </SummaryItem>

                          <SummaryItem >
                              <Summrytext ><b>Total</b></Summrytext>
                              <Summrytext><b>$ 70</b></Summrytext>
                          </SummaryItem>
                                <Button>CHECKOUT NOW</Button>
                      </Summary>
                  </Buttom>
                
              </Wapper>
             <Footer/>
         </Container>
        </>
    )
}

export default Cart
