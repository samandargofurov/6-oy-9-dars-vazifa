import './App.css'
import Hero from './components/Hero/hero'
import Navbar from './components/Navbar/navbar'
import Products from './components/Products/products'
import AOS from "aos"

function App() {
  React.useEffect(() => {
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
    </>
  )
}

export default App
