import React,{useEffect} from 'react'
import { HiShoppingBag } from "react-icons/hi2";
import { useSelector,useDispatch } from 'react-redux';
import { toggleCart } from '../redux/cartSlice';
import Addcart from './Addcart';


function Navbar() {
    let {isCartOpen, cartItems} = useSelector(state=> state.cart)
    let dispatch = useDispatch()
    let handleopanCart= (opan)=>{
        dispatch(toggleCart(opan))
    }
    const cartQuantity = cartItems.length;

    useEffect(() => {
            const stop = () => {
                document.body.style.overflow = "hidden"
            }
            const scroll = () => {
                document.body.style.overflow = "auto"
            }
            if(isCartOpen){
               stop()
            }else{
                scroll()
            }
        }, [isCartOpen]);

  return (
    <div className='flex inset-0 items-center justify-between drop-shadow-lg fixed z-[1] px-10 bg-[#c5efcb] w-full h-[9vh]'>
        <div className='flex items-center pt-3 h-full'>
            <h1>Redux Shopping Cart</h1>
        </div>
        <div onClick={()=>handleopanCart(true)} className='flex hover:cursor-pointer relative  items-center gap-2 text-2xl'>
         
            <HiShoppingBag />
            <span className='text-xl'>({cartQuantity})</span>
        </div>
         {isCartOpen && <Addcart />}
    </div>
  )
}

export default Navbar
