import './App.css';
import Navbar from './Compontent/Navbar/Navbar';
import Home from './Compontent/Pages/Home/Home';
import Product from './Compontent/Pages/Product/Product';
import About from './Compontent/Pages/About/About';
import Contact from './Compontent/Pages/Contact/Contact';
import Footer from './Compontent/Footer/Footer';
import Chart from './Compontent/Chart/Chart';
import {Routes , Route } from "react-router-dom"
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/Product" element={ <Product/>}/>
      <Route path="/About" element={ <About/>}/>
      <Route path="/Contact" element={ <Contact/>}/>
      <Route path="/Chart" element={ <Chart/>}/>
      
    </Routes>
   <Footer/>
    
    </>
  );
}

export default App;
