import React from 'react'
import "./Responsive.css"
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {   useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
export default function NavbarResponsive() {
    const product=  useSelector(state=>state.cart.products)
  return (
   
<>
<div className="mobile-bottom-navigation">

      <Link to="/">
      <button className="action-btn btn" data-mobile-menu-open-btn="">
      <HomeIcon  />
      </button>

      </Link>
      <Link to="/Product">
      <button className="action-btn btn">
      <InventoryIcon  />
     
      </button>

      </Link>
      
      <Link to="/About">
      <button className="action-btn btn">
      <InfoIcon  />      </button>

      </Link>
      <Link to="/Contact">
      <button className="action-btn btn">
      <ContactsIcon  />
       
      </button>
      </Link>

      <Link to="/Chart">
      <button className="action-btn btn">
      <ShoppingBasketIcon/>
        <span className="count shadow">{product.length}</span>
      </button>
      </Link>
    </div>
    
</>



  
  )
}
