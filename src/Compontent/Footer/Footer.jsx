import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import payment from "../../img/payment.png"
export default function Footer() {
  return (
    <div className='footer shadow mt-5 p-1'>
        <div className="container">

        <div className="row">
            <div className="col-lg-3">
            <div className="title-footer">
            <div className="logo-footer fs-5">
            تجارة الجملة الرائجة
            </div>
            <p className='fs-5'>متجر الجملة الرائجة متجر يحتوي على جميع المنتجات الرائجة و الرائعة</p>
        </div>

            </div>

            <div className="col-lg-3">
            <div className="Quick-links">
<ul className="nav flex-column">
    <div className="tilte-Quick fs-5">
    روابط سريعة
    </div>
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">الرئيسية</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Product">منتجاتنا</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/About">عنا</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link " to="/Contact">الاتصال</Link>
  </li>
</ul>
</div>
            </div>

            <div className="col-lg-3">
            <ul className="nav flex-column">
    <div className="tilte-Quick fs-5">
    قواعد الاستخدام
    </div>
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page">سياسة الاستخدام</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link">سياسة الشحن</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link">شروط الاستخدام</Link>
  </li>
  
</ul>   
            </div>

            <div className="col-lg-3">
            <div className="tilte-Quick">
            الاشتراك
           </div>

           <form className="d-flex flex-row">
        <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-footer shadow" type="submit">الاشتراك</button>
      </form>
      <img src={payment} alt={payment} className='mt-5 payment' />
            </div>
        </div>


     



        </div>
    </div>
  )
}
