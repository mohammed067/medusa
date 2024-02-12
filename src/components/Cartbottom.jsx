import React, { useState } from 'react'
import Summarypage from './Summarypage'
import Shoppingnew from './Shoppingnew'
import { Link } from 'react-router-dom'

function Cartbottom({arr2,totalll}) {
  const [proceedcheckout,setproceedcheckout]=useState(false)
  console.log("checking cartbottonm arr2",arr2)

  const procedchk=()=>{
    setproceedcheckout(!proceedcheckout)
    console.log(proceedcheckout)
  }

  // console.log("checking total pridductafadfad",producttotal)

  // useEffect(() => {
  //   setIsLoading(true);

  //   // Calculate total quantity and total price for each product
  //   const productTotals = cart1.map((each) => {
  //     const totalQuantity = each.quantity;
  //     const totalPrice = each.price * each.quantity;
  //     each.total = totalPrice;
  //     return { totalQuantity, totalPrice };
  //   });

  //   // Log the results
  //   console.log("Product Totals:", productTotals);

  //   // If you want to calculate the overall total price, you can use reduce
  //   const overallTotalPrice = productTotals.reduce(
  //     (total, product) => total + product.totalPrice,
  //     0
  //   );
  //   console.log("Overall Total Price:", overallTotalPrice);

  //   setIsLoading(false);
  // }, [cart1]);
  return (
    <>
    
    <div >
        {/* <div className='flex justify-between '>
            <p>Subtotal</p>
            <p>$449</p>
        </div> */}

        <div className='flex justify-between'>
            <p className="font-medium">Total</p>
            <p className='font-medium'>{totalll}</p>
        </div>
      
        
        <Link to={`/Checkout/`}>

        <button onClick={procedchk} className="bg-[#000000] text-white w-full rounded-full p-[1rem] mt-4">Proceed to checkout</button>
        
        </Link>
       
        <button className=" text-[#000000] w-full rounded-full p-[1rem] mt-4">Continue shopping</button>
    
    </div>

     

    </>
  )
}

export default Cartbottom