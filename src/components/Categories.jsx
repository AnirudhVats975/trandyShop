import React from 'react'
import  styled  from 'styled-components';
import { categories } from '../data';
import CategorieItem from './CategorieItem';
import { mobile } from './../responsive';


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding : "0px",flexDirection:"column"})}
`;


const Categories = (item) => {
    return (
        <>
            <Container>
                {
                  categories.map((item)=>{
                   return(
                       <>
                       <div key={item.id}>
                       <CategorieItem item={item} />
                       </div> 
                       </>
                   )
                   
                  })
                }
            </Container>
        </>
    )
}

export default Categories
