import React from 'react'
import framer1 from '../Images/framer1.webp';
import framer2 from '../Images/framer2.webp';
import framer3 from '../Images/framer3.webp';
import framer4 from '../Images/framer4.webp';

function Imageanimationimg() {
    const imgslid=[
        {
            id:1,
            img:framer1,
        },

        {
            id:2,
            img:framer2,
        },

        {
            id:3,
            img:framer3,
        },

        {
            id:4,
            img:framer4,
        },
    ]
  return (
    <div>
        {imgslid.map((each,index)=>(
            <div key={index}>
                <img className='w-[40rem]' src={each.img}/>
             </div>
        ))}
    </div>
  )
}

export default Imageanimationimg