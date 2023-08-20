import React ,{useState} from 'react'
import "./Product.css"
import Allproduct from '../../../AllProduct'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch , useSelector } from 'react-redux'
import { addToCart } from '../../../redux/ReducerStore';

export default function Product() {
    const [messageVisible, setMessageVisible] = useState(false);

    const showMessage = () => {

        setMessageVisible(true)

        setTimeout(() => {
            setMessageVisible(false);
          }, 1200)

      };

        const dispatch= useDispatch()
      const product=  useSelector(state=>state.cart.products)
  return (
    <div className='Product mt-5'>
        <div className="tilte-poduct text-center fs-3 fw-blod shadow ">جميع منتجات المتجر</div>
        <div className="container">
        <div className="box-sure">
         {
            messageVisible ? (
                <div className='item-sure'>
                    <div  className="box-sure-item-top shadow">  
                <DoneIcon className='icon-sure'/> 
                <div className="sure fs-5 ">تمت إضافة العنصر</div>
                </div>
                </div>
            ) :("")
         }
        </div>
            <div className="box-product-all">
           {
            Allproduct.map(item=>(
                <div className="box-porduct shadow " key={item.id}>
                <div className="box-product-img">
                    <img src={item.img} alt={item.img} />
                </div>
                <div className="box-porduct-content">
                    <div className="tilte-product">{item.title}</div>
                    <div className="icon-Star">
                    <StarBorderIcon className='icon-topPro'/>
                    <StarBorderIcon className='icon-topPro'/>
                    <StarBorderIcon className='icon-topPro'/>
                    <StarBorderIcon className='icon-topPro'/>
                </div>
                    <div className="price-product">{item.price}$</div>
                    <button className='btn btn-product w-100 shadow fs-5' onClick={()=>dispatch(addToCart({
                    id:item.id,
                    img:item.img,
                    title:item.title,
                    price:item.price
                })) && showMessage()}>اضافةالى عربة التسوق</button>

                </div>
            </div>
            ))
           }
            </div>
        </div>
    </div>
  )
}
