import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import "./Chart.css"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromCart , restCart } from '../../redux/ReducerStore';
import {Link} from "react-router-dom"
export default function Chart() {

  const product=  useSelector(state=>state.cart.products)
  const dispatch= useDispatch()

  const totalPrice = product.reduce((acc,item) =>{
    acc += item.price;
    return acc;

  },0)

  return (
    <div className='Chart'>
      <div className="conatiner">

        {
          product.length === 0 && 
          <div className="emytChart text-center">
            <div className="box-emty fs-3">
           العربة فارغة
            </div>
           <Link to="/Product"> <button className='btn btn-chart w-25 shadow fs-5 '>تسوق الان</button></Link>
          </div>
        }
      <table className="table">
      
  {
    product.length > 0 && 
    <thead>
    <tr>
      
      <th scope="col">ProductImage</th>
      <th scope="col">title</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  }
 {
  product.map(item=>(
    <tbody key={item.id}>
    <tr>
      
      <td><img src={item.img} alt={item.img} className='img-chart' /></td>
      <td className='td-title'>{item.title}</td>
      <td className='td-price'>{item.price}$</td>
      <td><button className='btn btn-danger shadow' onClick={()=>dispatch(removeFromCart({
          id:item.id,
        
      }))}> <DeleteIcon/></button></td>
    </tr>
  </tbody>
  ))
 }
</table>
{
   product.length > 0 && 
<div className="RemoveAll">
  <button className='btn btn-RemoveAll shadow fs-5  m-2' onClick={()=>dispatch(restCart())}> <DeleteIcon/>مسح الكل</button>
  <div className="total-price p-2 shadow">
  السعر الكلي:  {totalPrice}$
  </div>
</div>
}

      </div>
    </div>
  )
}
