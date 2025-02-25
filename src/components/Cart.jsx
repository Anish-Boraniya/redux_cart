import React, { useState } from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';



function Cart({data}) {
    let[add,setadd] = useState(false)
    let { img, rating, title, price } = data
    const dispatch = useDispatch()

    let handleclick = () => {
        const item = {...data}
        dispatch(addItem(item))
        setadd(true)
        
        setTimeout(()=>{
            setadd(false)
        },2500)
    }
  return (
    <div className=' w-[20vw] hover:scale-105 h-[40vh] rounded-lg bg-neutral-50 drop-shadow-xl overflow-hidden'>
      <div className='w-full h-[55%] flex justify-center '><img className='w-[50%] h-[100%]  object-cover' src={img} alt="item_img" /></div>
      <div className='flex flex-col items-center'>
        <span>{rating}</span>
        <h2>{title}</h2>
        <h1 className='flex items-center gap-1'><FaRupeeSign />{price}</h1>
      </div>
      <button onClick={()=>handleclick()} type="button"
      className={` hover:cursor-pointer bg-[#358f60]/70 hover:bg-[#14743f]/70 w-full h-[6vh] `} >{add? 'Added' : 'Add To Cart'} </button>
    </div>
  )
}

export default Cart
