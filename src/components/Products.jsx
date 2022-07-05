import React from 'react'
import styled from 'styled-components';
import {popularProduts} from '../data';
import ProductItem from './ProductItem';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap:wrap;
  justify-content :center;
 
`;
const Products = ({cat, filter, sort}) => {

console.log(cat, filter, sort)
    return (
        <>
            <Container>
           {
               popularProduts.map((item)=>{
                   return(
                       <>
                       <div key={item.id}>
                       <ProductItem item={item} key={item.id}/>
                       </div>
                     
                       </>
                   )
               })
           }
            </Container>
        </>
    )
}

export default Products;
