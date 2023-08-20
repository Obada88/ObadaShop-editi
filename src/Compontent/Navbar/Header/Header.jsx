import React from 'react'
import "./header.css"
import { FaFacebookF , FaTiktok , FaTwitter , FaInstagram } from "react-icons/fa6";
export default function Header() {
  return (
    <div className='headre p-2'>
        <div className="icon-header">
            <button className='btn icon-soc shadow'><FaFacebookF/></button>
            <button className='btn icon-soc shadow Tiktok'> <FaTiktok/></button>
            <button className='btn icon-soc shadow'><FaTwitter /></button>
            <button className='btn icon-soc shadow Instagram'> <FaInstagram /></button>
            
        </div>

        <div className="headre-anys fs-4">شحن مجاني حول العالم</div>
        <div className="select-shop ">
            
        <select name="lanage shadow" className='lanage'>
            <option value="ar-sa" className='fs-6'>العربية</option>
            <option value="en-us">English</option>
        </select>

        <select name="currency">
            <option value="sa">ريال</option>
            <option value="usd">USD</option>
        </select>
    </div>
        </div>
  )
}
