import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, removeItem, incrementItem, decrementItem  } from '../redux/cartSlice';
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { BsBagXFill } from "react-icons/bs";



function Addcart() {
    const { isCartOpen, cartItems } = useSelector((state) => state.cart);
     
    const dispatch = useDispatch();


    const handleCloseCart = (close) => {
        dispatch(toggleCart(close));
    };


    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    };


    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementItem(itemId));
    };


    // disable the body-scroll when the Cart is open
    useEffect(() => {
        const docBody = document.body

        isCartOpen ? (
            docBody.classList.add('overflow_hide')
        ) : (
            docBody.classList.remove('overflow_hide')
        );

    }, [isCartOpen]);

    const cartQuantity = cartItems.length;

    const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

  return (
    <>
     { isCartOpen && (
        <div className='absolute inset-0   flex items-center justify-center top-0 right-0 z-[999] py-2  w-full h-screen bg-black/50'>

        <div className='bg-white rounded-xl w-[40%] h-[100%] p-2 overflow-hidden'>
            <div className="relative rounded-lg flex items-center justify-center w-full h-[10vh] bg-[#b9efcb]">
            <div className='absolute cursor-pointer w-7 text-lg rounded-full top-2 left-2 px-2 hover:bg-[#14746f]  bg-[#358f80]/50'>
                <span onClick={()=> handleCloseCart(false)}>&times;</span>
                </div>
                <h2 className='text-xl font-semibold'> Cart ({cartQuantity})</h2>
            </div>  
            <div> {
                cartQuantity === 0 ? (<div className='flex w-full h-screen py-50 justify-center '><div  className=' '><h1 className='flex  gap-2 items-center'><BsBagXFill/>Cart is empty</h1></div></div>) :(
                    <div className='flex flex-col gap-4 mt-4'>
                {cartItems.map(item => (
                    <div key={item.id} className='flex items-center justify-between p-2  w-full h-[13vh] '>
                        <div className='h-full ml-3 w-20 p-2 scale-120 '>
                            <img src={item.img} alt={item.title} className='' />
                        </div>
                        <div className=' ml-10 w-[15vw] '>
                        <div>{item.title}</div>
                        <div className='flex items-center mt-2 font-semibold text-lg'>< FaRupeeSign /> {item.price * item.quantity}</div>
                        </div>
                        <div className='flex items-center gap-2  text-xl'>
                            <button className='bg-[#358f80]/70 w-5 h-7 rounded-full ' onClick={()=> handleDecrement(item.id)}>-</button>
                            <span className='text-xl flex items-center justify-center font-semibold  w-5'>{item.quantity}</span>
                            <button className=' bg-[#358f80]/70 w-5 rounded-full' onClick={()=> handleIncrement(item.id)}>+</button>
                        </div>
                        
                        <div className='text-xl mr-2' onClick={()=> handleRemove(item.id)}>
                            <MdOutlineCancel /></div>
                    </div>
                ))}
            </div>
                )
            }</div>
           
           <div className=' absolute rounded-lg flex items-center justify-between p-5 top-160 w-[39vw] h-[10vh] bg-[#b9efcb] bottom-'>
               <div className='flex gap-2'>
               <h2 className='text-lg'>Total :</h2> 
               <span className='flex items-center font-semibold text-xl'>
               < FaRupeeSign />
               {cartTotal}
               </span>
               </div>
               <button 
                className=' w-25 font-semibold h-[6vh] rounded-full hover:cursor-pointer bg-[#358f80]/70 hover:bg-[#14746f]/70'
               onClick={()=> handleCloseCart(false)}>
                Checkout
                </button>
           </div>
            
        </div>
        </div>
     )} 
    </>
  )
}

export default Addcart
