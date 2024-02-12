import React from 'react'
import { useCart } from "medusa-react"

const Retrivecart=() => {
    const { cart } = useCart();
    
    const retrive=()=>{
        console.log("retriving cart",cart)
    }
  
    return (
    <div>
        <button className='bg-black text-white  p-2 mt-[2rem]' onClick={retrive}>retriving cart items</button>
    </div>
    )
  }
export default Retrivecart


