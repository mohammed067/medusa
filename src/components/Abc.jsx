import React from 'react'

function Abc({ product }) {
  return (
    <div>{console.log(product)}
      
      <img className='w-[10rem] h-[10rem]' src={product.productimage}/>
    </div>
  )
}

export default Abc