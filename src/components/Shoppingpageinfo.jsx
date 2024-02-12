import React, { useEffect } from 'react'
import { useState } from "react";
import { useProducts } from 'medusa-react';
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

function Shoppingpageinfo({slides,cartinfo}) {
  const { products, isLoading } = useProducts();
   
  
    let [current, setCurrent] = useState(0);
    useEffect(() => {
      console.log('Selected Product:', cartinfo);
    }, [cartinfo]);
  
  let previousSlide = () => {
    if (current === 0) setCurrent(0 );
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(slides.length-1);
    else setCurrent(current + 1);
  };
  return (
    <div className=" overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {/* {slides.map((s) => {
          return <img src={s} />;
        })} */}
        <img  src={products.images[0].url}/>
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      {/* <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={ i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div> */}
    </div>
  )
}

export default Shoppingpageinfo