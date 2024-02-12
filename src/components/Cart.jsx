import React, { useEffect, useState } from 'react'
// import { useCart, useCreateCart } from 'medusa-react';
import Carttop from './Carttop'
import Cartbottom from './Cartbottom'

function Cart({arr2,val,items,sendchek}) {
  const itemschecking=arr2?.cart
  console.log(itemschecking)
  // console.log("mainsend check",sendchek)
  // const handleClick = () => {
  //   createCart.mutate({}) // create an empty cart
  // }

  // // const { cart, createCart } = useCart()

  // console.log(cart)

    //  useEffect(()=>{
    //     console.log("cheked sudfasdf",val)
    //  })
    // const [transl,settransl]=useState(false)

    // const translatingx=()=>{
    //     settransl(true)
    // }

    // const translatingreverse=()=>{
    //     settransl(false)
    // }
  return (
    <div>
        {/* <button onClick={translatingx} className="bg-[#000000] text-white w-full rounded-full p-[1rem] mt-4">Proceed to checkout</button>
        <button onClick={translatingreverse} className=" bg-[#000000] text-white w-full rounded-full p-[1rem] mt-4">Continue shopping</button>
     */}
   
    <div className='bg-[#ffffff] flex flex-col justify-between h-[86vh] px-[2rem]' >
         <Carttop  />

    </div>


 

    </div>
  )
}

export default Cart