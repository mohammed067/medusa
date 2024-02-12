import React from 'react'
import forbes from '../Images/forbes.webp'
import wsj from '../Images/wsj.webp'
import askmen from '../Images/askmen.webp'
import wired from '../Images/wired.webp'
import goop from '../Images/goop.webp'
import gadget from '../Images/gadget.webp'
import wwd from '../Images/wwd.webp'

function Viewsection() {
  return (
    <div className='p-[2rem] hidden md:flex md:flex-col'>
        <div className='bg-[#f4f4f4] p-5'>
            <h2 className='text-center text-[42px]'>As seen in</h2>
        <div className='hidden lg:grid  gap-9 grid-cols-7 pt-[1.5rem] px-10 '>
            <img className='md:col-span-' src={forbes}/>
            <img className='w-[4rem]' src={wsj}/>
            <img src={askmen}/>
            <img src={wired}/>
            <img className='w-[4rem]' src={goop}/>
            <img src={gadget}/>
            <img className='w-[4rem]' src={wwd}/>

        </div>



        <div className='hidden md:grid  lg:gap-9 lg:grid-cols-7 md:grid-cols-3 md:grid-rows-3 lg:grid-rows-1  pt-[1.5rem] px-10 lg:hidden '>
                 
                 <img className='md:col-span-2  lg:col-span-1' src={forbes}/>
                 <img className='md:col-start-3 lg:col-start-2 ' src={wsj}/>
                 <img className='md:col-start-4 md:col-span-6 md:row-start-1 lg:col-start-3 ' src={askmen}/>
                 <img className='md:col-start-2 md:col-span-4 md:row-start-2  md:w-[10rem] pt-[2rem] lg:pt-0 lg:col-start-4 lg:row-startf-1' src={wired}/>
                 <img className='md:col-start-5 md:row-start-2 pt-[2rem] lg:pt-0 lg:col-start-5' src={goop}/>
                 <img className='md:row-start-3  md:col-span-4 md:col-start-2  md:w-[10rem] pt-[2rem] lg:pt-0 lg:col-start-6' src={gadget}/>
                 <img className='md:row-start-3 md:col-start-5  md:w-[10rem] pt-[2rem] lg:pt-0 lg:col-start-7' src={wwd}/>
     
     
             </div>
        </div>
      
    </div>
  )
}

export default Viewsection