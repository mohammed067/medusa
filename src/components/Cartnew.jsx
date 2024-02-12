import React,{useEffect} from 'react'
// import { useProduct } from "medusa-react";
import { useParams } from "react-router-dom";
import { useProducts } from "medusa-react"
import { useCart } from "medusa-react"
import  {useContext}  from "react"

import ProductContext from "../context/product-context"
// import { useCart, useCreateCart } from "medusa-react"


function Cartnew({
  product,
  region,
  country,
  nextStep,
  setLoading,
}) {
 
  const { variant, quantity } = useContext(ProductContext)
  const { createCart, startCheckout } = useCart()

  const handleSubmit = async () => {
    await createCart.mutateAsync({
      // region_id: "",
      // country_code: "hdbfk",
      items: [
        {
          variant_id:"variant_01HFS337KAHQZN9RD6TRHAJQEB",
          quantity:1,
        },
      ],
    })

    await startCheckout.mutateAsync()

    nextStep()
  }
    return (
      <div>
        {/* Replace 'product_id' and 'variant_id' with actual IDs from your product */}
        <button onClick={() => handleSubmit()} >
          Add to Cart
        </button>
      </div>
    );
  
}


export default Cartnew

// import React, { useEffect } from 'react';
// import { useCart, useCartActions } from '@medusajs/medusa-react';
// const MyComponent = () => {
  // const { cart } = useCart();
  // const { createCart, addToCart } = useCartActions();
  // useEffect(() => {
  //   if (!cart) {
  //     createCart();
  //   }
  // }, [cart, createCart]);
  // const handleAddToCart = (productId, variantId, quantity) => {
  //   if (cart) {
  //     addToCart(cart.id, {
  //       variant_id: variantId,
  //       quantity: quantity,
  //     });
  //   }
  // };
  // return (
  //   <div>
  //     {/* Replace 'product_id' and 'variant_id' with actual IDs from your product */}
  //     <button onClick={() => handleAddToCart('product_id', 'variant_id', 1)}>
  //       Add to Cart
  //     </button>
  //   </div>
  // );
// };
// export default MyComponent;









