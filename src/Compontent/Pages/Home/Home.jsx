import React from 'react'
import "./Home.css"
import ImgHome from "../../../img/banner-1.jpg"
import TopProduct from './topProduct/TopProduct'
import NewArrivl from './NewArrvile/NewArrivl'
import { Link } from 'react-router-dom'


export default function Home() {

   
  return (
    <>
    <div className='Home mt-3'>
       
            <div className="box-home">
                <div className="box-img-home">
                    <img src={ImgHome} alt={ImgHome} />
                </div>

                <div className="box-content p-3 ">
                    
                    <h3>تصفح أجمل المنتجات</h3>
                    <p className='fs-3'>يوجد الكثير من المنتجات الرائعة في هذا المتجر</p>
                    <Link className='btn btn-home' to="/Product">تسوق الان</Link>
                </div>
            </div>
        </div>
    <TopProduct/>
    <NewArrivl/>
    </>
    
  )
}
