import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
height: 30px;
background-color: teal;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
font-size: 14px;
${mobile({width : "100%" })}
`;
const Annoucements = () => {
    return (
        <>
            <Container>
            Super Deal ! Free Shiping on Orders Over $50
            </Container>
        </>
    )
}

export default Annoucements;
