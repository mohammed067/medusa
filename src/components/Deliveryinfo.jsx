import React from 'react';
import shipping from "../Images/shipping.png";
import cart from "../Images/cart.png";
import correct from "../Images/correct.png";
// import return1 from "../Images/return1.png";
import cable from "../Images/cable.png";
import donlod from "../Images/donlod.png";

function Deliveryinfo() {
  const shipinfo = [
    {
      id: 1,
      img1: shipping,
      img1info: "Free Shipping",
    },
    {
      id: 2,
      img1: cart,
      img1info: "Secure Checkout",
    },
    {
      id: 3,
      img1: correct,
      img1info: "1 Year Warranty",
    },
    {
      id: 4,
      img1: correct,
      img1info: "60-day return",
    },
    {
      id: 5,
      img1: cable,
      img1info: "Power cable included",
    },
    {
      id: 6,
      img1: donlod,
      img1info: "Free app download",
    },
  ];

  return (
    <div  className='relative' >
      <div className='grid grid-cols-3 md:w-[80vw]' >
        {shipinfo.map((each) => (
            <div className='flex flex-col justify-center text-center md:flex-row items-center gap-[1rem]  '> 
          <img className='w-[2.3rem]' key={each.id} src={each.img1} alt={each.img1info} />
          <p className=''>{each.img1info}</p>
          </div>
        ))}
      </div>

      <hr className=' hidden  md:flex w-[100vw] pt-[1rem] mt-[1rem]'/>
    </div>
  );
}

export default Deliveryinfo;
