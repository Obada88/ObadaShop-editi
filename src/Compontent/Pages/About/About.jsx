import React, { useState, useEffect } from 'react';
import "./About.css"
import imgAbout_1 from "../../../img/shampoo.jpg"
import imgAbout_2 from "../../../img/jewellery-1.jpg"
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function About() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
  return (
    <div className='About mt-5'>
        <div className="title-about fs-3 fw-blod shadow">المنتجات الحديثة</div>
        <div className="container mt-5">

        <div className="row About-box">
            <div className="col-lg-6 ">
                
                <div className="box-img-about">
                    <img src={imgAbout_1} alt={imgAbout_1} />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="box-content-about">

                <div className="icon-Star">
                    <StarBorderIcon className='icon-topPro'/>
                    <StarBorderIcon className='icon-topPro'/>
                    <StarBorderIcon className='icon-topPro'/>
                    <StarBorderIcon className='icon-topPro'/>
                </div>
                <div className="tilt-about-product fs-5">
                عبوات الشامبو والبلسم وغسيل الوجه
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam vitae excepturi, aliquid reprehenderit ipsa dicta, 
                    sint fuga ab similique iste, quasi adipisci odio minus illo!</p>


                <div className="price-about">
                    <span>150$</span>
                    <div className="afterDiscount">
                        200$
                    </div>
                </div>
                <div className="timer">
                <div className='ads fs-5'>أسرع - بسرعة! ينتهي العرض في:</div>
                <div className="timer-ads">
                <span> {hours < 10 ? '0' + hours : hours} hours </span>
                    <span> {minutes < 10 ? '0' + minutes : minutes} minutes </span> 
                    <span>{seconds < 10 ? '0' + seconds : seconds} seconds </span>
                </div>
                </div>

                <button className='btn btn-about mt-5 shadow'>اضافة الى عربة التسوق</button>
               



                </div>
            </div>
        </div>

        <div className="row mt-5 About-box">
        <div className="col-lg-6">
                <div className="box-content-about">

                <div className="icon-Star">
                    <StarBorderIcon className='icon-topPro'/>
                    <StarBorderIcon className='icon-topPro'/>
                    <StarBorderIcon className='icon-topPro'/>
                    <StarBorderIcon className='icon-topPro'/>
                </div>
                <div className="tilt-about-product">
                أقراط الماس من الذهب الوردي
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam vitae excepturi, aliquid reprehenderit ipsa dicta, 
                    sint fuga ab similique iste, quasi adipisci odio minus illo!</p>


                <div className="price-about">
                    <span>80$</span>
                    <div className="afterDiscount">
                        100$
                    </div>
                </div>
                <div className="timer">
                <div className='ads'>أسرع - بسرعة! ينتهي العرض في:</div>
                <div className="timer-ads">
                    <span> {hours < 10 ? '0' + hours : hours} hours </span>
                    <span> {minutes < 10 ? '0' + minutes : minutes} minutes </span> 
                    <span>{seconds < 10 ? '0' + seconds : seconds} seconds </span>
                </div>
                </div>

                <button className='btn btn-about mt-5'>اضافة الى عربة التسوق</button>
               



                </div>
            </div>
            <div className="col-lg-6 ">
                
                <div className="box-img-about">
                    <img src={imgAbout_2} alt={imgAbout_2} />
                </div>
            </div>
          
        </div>


        </div>
    </div>
  )
}
