import React from 'react'
import Data from '../data/data'
import Cart from './Cart'

function Cards() {
  return (
    <div className='px-17 py-25 flex flex-wrap gap-12'>
      {
        Data.map((item, index) => (
          <Cart key={index} data={item}/>
        ))
      }
    </div>
  )
}

export default Cards
