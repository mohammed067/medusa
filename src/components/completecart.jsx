import React, { useEffect } from "react";
// import { useCompleteCart } from "medusa-react";
import { useCart } from "medusa-react"

const Completecart = () => {
  const cartid_local = localStorage.getItem("cart_id");
  const { completeCheckout } = useCart()

//   const completeCart = useCompleteCart(cartid_local);

  const handleCompleteCheckout = () => {
    completeCheckout.mutate(cartid_local)
  }

   useEffect(()=>{
    console.log("checking cart activities",completeCheckout)
   },[completeCheckout])
  return <div className="bg-red-300 py-6 px-4 " onClick={handleCompleteCheckout}>completecart</div>;
};

export default Completecart;




// ...


