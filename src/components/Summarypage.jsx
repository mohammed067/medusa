import React, { useState,useEffect } from 'react'
import Summarytop from './Summarytop'
import Summarybottom from './Summarybottom'
import arrow from "../Images/arrow.png";
import blackarrow from "../Images/blackarrow.png";
import { useStartCheckout } from 'medusa-react';
import { Navigate } from 'react-router-dom';

function Summarypage({totall}) {
  const user=localStorage.getItem("user")
  console.log(user)
   
  
  // useEffect(() => {
  //   const existingCart = localStorage.getItem("cart");
  //   const temp = JSON.parse(existingCart);
  
  //   const displaytotal = temp.map((each) => {
  //     const price = each.price;
  //     const quantity = each.quantity;
  //     const totalprice = price * quantity;
  //     console.log(totalprice);
  //     return totalprice;
  //   });
  
  //   const overallTotalPrice = displaytotal.reduce(
  //     (total, productTotal) => total + productTotal,
  //     0
  //   );
    
  //   // Now you can set the state or perform any other logic with overallTotalPrice
  //   // setOverallTotalPrice(overallTotalPrice);
  
  //   console.log("Overall Total Price:", overallTotalPrice);
  //   console.log("summary total check123", displaytotal);
  // }, [/* Add relevant dependencies here */]);
  
  // console.log("summary total check",cart1)

  const shippingdetails=[
    {
      id:1,
      name:"Cart",
      imge:blackarrow
    },

    {
      id:2,
      name:"Information",
      imge:blackarrow
    },

    {
      id:3,
      name:"Shipping",
      imge:blackarrow
    },

    {
      id:4,
      name:"Payment",
      imge:blackarrow
    }
  ]
  if (!user){
    return (
      <Navigate to="/login" />
    )
  }
  return (
    <div className='bg-[#F4F4F4]' >
       
        <div className='flex  md:px-[1rem] lg:px-[3.7rem] xl:px-[6.7rem] '>
            <p className='text-[3rem] font-bold text-center '>SKYVIEW</p><span>TM</span>
        </div>
      

      <div className='flex gap-3 md:px-[1rem] lg:px-[3.7rem] xl:px-[6.7rem]'>
       
          {shippingdetails.map(each=>(
            <div className='flex items-center gap-2'>

                 <p className=' cursor-pointer'>{each.name}</p>
            <img className='w-[0.8rem] h-[0.8rem]' src={each.imge}/>
              </div>
           
          ))}
       
      </div>
       
      <div  className='lg:grid grid-cols-4 grid-rows-1 md:px-[1rem] lg:pl-[3rem] xl:pl-[6rem]  lg:gap-[3rem] xl:gap-[6rem] '>
      <div className=' bg-[#000000] col-start-3 col-span-4 md:bg-[#ffffff] md:h-[80vh]  md:shadow-md md:rounded-sm xl:w-[32rem] '>
        <Summarytop/>
        </div>

        <div className='col-start-1 col-span-2 row-start-1 '>
        <Summarybottom/>
        </div>
      </div>
        
       
    </div>
  )
}

export default Summarypage