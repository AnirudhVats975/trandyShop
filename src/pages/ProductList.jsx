import React, {useState} from 'react';
import styled from 'styled-components';
import Navbar from './../components/Navbar';
import Annoucements from './../components/Annoucements';
import Products from './../components/Products';
import Newesletter from './../components/Newesletter';
import Footer from './../components/Footer';
import { useLocation } from 'react-router';


const Container = styled.div`

`;

const Title = styled.h1`
margin: 20px;
`;


const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

`;


const Filter = styled.div`
margin: 20px;
`;


const FilterText = styled.span`
margin: 20px;
font-weight: 600;
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;

const Option = styled.option`
 padding: 10px;
`;

const ProductList = () => {
    const location = useLocation();
    const cat = (location.pathname.split("/")[2]);

    const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("Newest");

    const handleFilter = (e) =>{
      const value = e.target.value;
      
      setFilter({
          ...filter,
        [e.target.name] : value
    }) 
    }

    
    return (
        <>
            <Container>
                <Navbar />
                <Annoucements />
                <Title>Dresses</Title>
                <FilterContainer>
                    <Filter>
                        <FilterText>Filter Produts</FilterText>
                        <Select name="color" onChange={handleFilter}>
                            <Option disabled >color</Option>
                            <Option>White</Option>
                            <Option>Black</Option>
                            <Option>Red</Option>
                            <Option>Blue</Option>
                            <Option>yellow</Option>
                            <Option>Green</Option>
                        </Select>

                        <Select name="size" onChange={handleFilter}>
                            <Option disabled >size</Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>Blue</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Sort Product</FilterText>
                        <Select onChange={(e)=> setSort(e.target.value)}>
                            <Option selected value="newest">Newest</Option>
                            <Option value="asc">Price (asc)</Option>
                            <Option value="dsc">Price (dsc)</Option>
                         
                           
                        </Select>
                    </Filter>
                </FilterContainer>
                <Products cat={cat} filter={filter} sort={sort} />
                <Newesletter />
                <Footer />
            </Container>
        </>
    )
}

export default ProductList
