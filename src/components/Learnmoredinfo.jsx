import clsx from 'clsx'
import React from 'react'
import { useState } from 'react'

function Learnmoredinfo({bgclass,logo,heading,info,button,colclass,viewset,index}) {
  const [view,setview]=useState(false)

  return (
    <div className='pt-[1rem] ' onMouseEnter={()=>setview(viewset)} onMouseLeave={()=>setview(false)}>
        <div className="bg-[#F4F4F4] px-[1rem] py-[2rem] xl:px-[3rem] relative overflow-hidden">
            <div className={clsx(colclass, view===index?"md:opacity-40 ":" md:opacity-0")}/>
             <div className='rounded-full w-[6rem] bg-[#0000000A] p-[2rem] xl:mb-5'>
             <img src={logo}/>
             </div>
            
            <h2 className='text-[20px] font-medium'>{heading}</h2>
            <p  className='text-[20px]'>{info}</p>
            <button className='border border-[#000000] px-[1rem] rounded-full py-2  mt-4 hover:bg-[#000000] hover:text-white'>{button}</button>
        </div>
    </div>
  )
}

export default Learnmoredinfo