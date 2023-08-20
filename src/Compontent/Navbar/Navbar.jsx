import React ,{useState} from 'react'
import "./navbar.css"
import Header from './Header/Header'
import { FaBars} from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import {   useSelector } from 'react-redux'
import NavbarResponsive from './Responsive/NavbarResponsive';


export default function Navbar() {
  const[basr,setBars] =useState(false)
  const handleButtonClick = () => {
    setBars(!basr);
  };

  const product=  useSelector(state=>state.cart.products)

  return (
    <div>
      <Header/>
      <nav className="navbar navbar-expand-lg  mt-3 position-sticky ">
  <div className="container">
    <Link className="navbar-brand fs-5" to="/">تجارة الجملة الرائجة</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <div className="icon-bars" onClick={handleButtonClick}>
    {basr ? "X" : <FaBars/>}

    </div>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/"><div className="non-actiev">الرئيسية</div></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Product"><div className="non-actiev">منتجاتنا</div>  </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link " to="/About" >
           <div className="non-actiev">عنا</div>
            
          </Link>
         
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Contact"> <div className="non-actiev">التواصل</div>   </Link>
        </li>
      </ul>
      
    <div className="icon-nav">
   <Link to="/Chart"> <ShoppingBasketIcon className='shop'/>  <span>{product.length}</span></Link>
    </div>

    </div>
   
  </div>
</nav>
<hr/>
<NavbarResponsive/>


    </div>
  )
}
