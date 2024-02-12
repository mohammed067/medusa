import React from 'react'
import { useCart } from "medusa-react"

const Medusacart  = () => {
    const { cart, createCart } = useCart()

    console.log("checking region id",cart.region_id)
  
    const handleCreateCart = () => {
        
      createCart.mutate(
        {}, // create an empty cart
        {
          onSuccess: ({ cart }) => {
            localStorage.setItem("cart_id", cart.id)
            // console.log("checking",cart.sales_channel)
          },
        }
      )
    }

    return (
        <button className='bg-black ' onClick={handleCreateCart}>check me</button>
   
        )
    
    // ...
  }

export default Medusacart