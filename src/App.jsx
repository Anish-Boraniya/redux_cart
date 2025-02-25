import React,{useEffect} from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Footer from './components/footer'
/*import { useSelector,useDispatch } from 'react-redux';
import { toggleCart } from './redux/cartSlice';
import Addcart from './components/Addcart';*/

function App() {
  /*let {isCartOpen} = useSelector(state=> state.cart)
    let dispatch = useDispatch()
    let handleopanCart= (opan)=>{
        dispatch(toggleCart(opan))
    }
  useEffect(()=>{
    handleopanCart(false)
  },[isCartOpen])*/
  return (
    <div>
      <Navbar />
      <div className='w-full h-screen'>
      <Cards />
      
      </div>
      <Footer />
    </div>
  )
}

export default App
