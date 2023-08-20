import React  from 'react'
import "./TopProduct.css"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Porduct from "../../../../product"
import { Link } from 'react-router-dom';

export default function TopProduct() {
    

    

  return (
    <div className='TopProduct mt-5'>
        <div className="title-topPro shadow-sm text-center fs-2 fw-blod">المنتجات الافضل</div>

       
        <div className="box ">
        {
            Porduct.map(item=>(
                <div className="box-topPro shadow-sm mt-3" key={item.id}>
            <div className="box-img-boxPro">
                <img src={item.img} alt="" />
            </div>
            <div className="box-content-topPro">
                <div className="title fs-6">{item.title}</div>
                <div className="icon-Star">
                    <StarBorderIcon className='icon-topPro'/>
                    <StarBorderIcon className='icon-topPro'/>
                    <StarBorderIcon className='icon-topPro'/>
                    <StarBorderIcon className='icon-topPro'/>
                </div>
                <div className="price">{item.price}$</div>
               <Link to="/Product"> <button className='btn btn-topPro w-100 fs-5 shadow'   >اضافة الى عربة التسوق</button></Link>
            </div>
        </div>
            ))
        }
        </div>
    </div>
  )
}
