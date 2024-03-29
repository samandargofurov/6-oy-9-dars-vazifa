import './App.css'
import React, { useEffect } from 'react'
import Hero from './components/Hero/hero'
import Navbar from './components/Navbar/navbar'
import Products from './components/Products/products'
import TopProducts from './components/TopProducts/TopProducts'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero></Hero>
      <Products />
      <TopProducts />
    </>
  )
}

export default App
