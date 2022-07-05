import React from 'react'
import  styled  from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
// import { PromiseProvider } from 'mongoose';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { mobile } from './../responsive';

const Container = styled.div`
display: flex;
${mobile({flexDirection : "column" })}


`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
${mobile({textAlign : "center" })}

`;


const Logo = styled.h1`

`;

const Desc = styled.p`
margin: 20px 0;
`;

const SocialContainer = styled.div`
 display: flex;
 ${mobile({ justifyContent : "center" })}
 
`;

const SocialIcon = styled.div`
 width: 35px;
 height: 35px;
 border-radius: 50%;
 color: #fff;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 15px;
${mobile({textAlign : "center" })}
`;



const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display : "none" })}

`;

const Title = styled.h3`
 margin-bottom: 30px;

`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
cursor: pointer;
`;

const Right = styled.div`
flex:1;
padding: 20px;
${mobile({textAlign : "center", background : "#f5f7f5", width: "100%" })}

`;



const ContactItem = styled.div`
 display: flex;
 align-items: center;
 justify-content: flex-start;
 margin-bottom: 20px;
 ${mobile({justifyContent : "center" })}
`;

const Payment = styled.div`

`;




const Footer = () => {
    return (
        <>
           <Container>
         <Left>
             <Logo>TrendyShop</Logo>
             <Desc>There are the Manery variation of Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Commodi animi cupiditate numquam, repellat impedit quia excepturi quisquam quasi distinctio quidem?</Desc>
               <SocialContainer>
                   <SocialIcon color="3B5999" ><FacebookIcon/></SocialIcon>
                   <SocialIcon color="E4405F"><InstagramIcon/></SocialIcon>
                   <SocialIcon color="55ACEF"><GitHubIcon/></SocialIcon>
                   <SocialIcon color="E60023"><TwitterIcon/></SocialIcon>
               </SocialContainer>
         </Left>

         <Center>
         <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessproies</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>

         </Center>


         <Right>
         <Title>Useful Links</Title>
        <ContactItem>
            <RoomIcon  style={{marginRight: "10px"}}/>
            sec-20, New Delhi, India
        </ContactItem>

        <ContactItem>
            <PhoneIcon  style={{marginRight: "10px"}}/>
          +91 887 86 868 08
        </ContactItem>

        <ContactItem>
            <MailOutlineIcon style={{marginRight: "10px"}}/>
         Anirudhvats975@gmail.com
        </ContactItem>
         </Right>
            </Container> 
        </>
    )
}

export default Footer
