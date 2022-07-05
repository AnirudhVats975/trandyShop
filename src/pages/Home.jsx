import React from 'react';
import Navbar from './../components/Navbar';
import Annoucements from './../components/Annoucements';
import Slider from './../components/Slider';
import Categories from './../components/Categories';
import Products from './../components/Products';
import Newesletter from './../components/Newesletter';
import Footer from './../components/Footer';
const Home = () => {
    return (
        <>
        <Annoucements/>
         <Navbar/>
         <Slider/>
        <Categories/>
        <Products/>
        <Newesletter/>
        <Footer/>
        </>
    )
}

export default Home;
