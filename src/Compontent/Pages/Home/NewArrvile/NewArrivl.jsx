import React from 'react'
import NewPro from "../../../../NewProduct"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./NewArrvile.css"
import { Link } from 'react-router-dom';
export default function NewArrivl() {
   
    
  return (
    <div className='NewArrivl mt-5'>
        <div className="container">
        <div className="title-topPro shadow-sm text-center fs-3  ">حديثة الوصول</div>
        <div className="box-new-arr">
        {
            NewPro.map(item => (
                <div className="box-new shadow-sm mt-3" key={item.id}>
            <div className="box-newimg">
                <img src={item.img} alt={item.img} />
            </div>
            <div className="box-new-content">
                <div className="title-new fs-6">{item.title}</div>
                <div className="icon-Star">
                    <StarBorderIcon className='icon-topPro'/>
                    <StarBorderIcon className='icon-topPro'/>
                    <StarBorderIcon className='icon-topPro'/>
                    <StarBorderIcon className='icon-topPro'/>
                </div>
                <div className="price-title">{item.price}$</div>
               <Link to="/Product"> <button className='btn btn-new w-100 shadow fs-5' >اضافة الى عربة التسوق</button></Link>
            </div>
        </div>
            ))
        }
        </div>
        </div>
    </div>
  )
}
