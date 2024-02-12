import React, { useEffect } from 'react'

function Reviewsectioninfo({ info1,info2, id, index1}) {
  useEffect(()=>{
    console.log(id, index1)
  },[id, index1])
  return (
    <div>
      <div
        
        className={` w-[90vw] px-4`}
      >
        <div className="   md:w-[30rem]" >

            <h2 className={`text-[30.4px] lg:text-[50.4px] lg:leading-[3rem] leading-[2.35rem] text-[#000000] font-medium ${index1 === id ? " " : "opacity-20"}`}>{info1}</h2>
            <p className='pt-[1rem]'>{info2}</p>
          {/* <button>
            <img className="w-[2rem] bg-white rounded-full p-1 " src={arrow2} />
          </button>

          <button onClick={()=>setslideimage(true)} >
            <img className="w-[2rem] bg-white rounded-full p-1 " src={arrow1} />
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Reviewsectioninfo