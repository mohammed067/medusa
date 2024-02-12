import React, { useState } from 'react'
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { Link } from 'react-router-dom';


function Homeproductsinfo({productname,cost,height,productimage,btn,classbg,onLearnMoreClick,productinformation,id}) {

  const handleLearnMoreClick = () => {
    onLearnMoreClick({ productname, cost, height, productimage });
    console.log(productname,cost)
  };

    const [view,setview]=useState(false)

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
      console.log(inView)

    
  return (
    <div ref={ref} className={` `} onMouseEnter={()=>setview(true)} onMouseLeave={()=>setview(false)}>
        <div className={classbg + ' text-center  md:h-[48rem]'}>
            <h1 className='text-[28px] text-[#000000] text-center md:text-start md:pl-[2rem]'>{productname}</h1>
            <h2 className='text-[28px] text-[#000000] text-center md:hidden md:text-start md:pl-[2rem]'>{cost}</h2>
            <h2 className='text-[#444444] text-center md:text-start md:pl-[2rem]'>{height}</h2>
            <div className='py-[6rem] w-full mx-auto xl:py-0 '>
            <img className={`duration-1000  transition-transform h-[12rem] px-[2.5rem] mx-auto md:h-[22rem]  md:pt-[1rem] ${view?" scale-105 duration-1000  transition-transform":""}`} src={productimage} alt='image'/>
            </div>
            <h2 className='text-[28px] text-[#000000] text-center hidden md:flex flex-col md:text-start md:pl-[2rem] md:pt-[1rem]'>{cost}</h2>
            <div className='text-center pb-[2rem] md:text-start md:pl-[2rem]'>
              <Link to={`/Shoppingnew/${id}`}>
           
              <button  onClick={handleLearnMoreClick} className='bg-[#000000] text-white px-[32px] py-[10px] text-center items-center rounded-full w-[15rem] xl:w-[10rem]'  >{btn}</button> 
           
              </Link>
            
                
            </div>
               {/* onClick={handleLearnMoreClick} */}
              
        </div>
    </div>
  )
}

export default Homeproductsinfo