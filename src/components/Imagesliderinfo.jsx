import React, { useState } from "react";

function Imagesliderinfo({ images, arrow1, arrow2,imslide }) {
  return (
    <div>
      <div
        
        className={`  w-[90vw] px-4`}
      >
        <div className=" relative min-h-[60vh]  bg-no-repeat bg-cover bg-center rounded-md " style={{ backgroundImage: `url(${images})` }}>
          {/* <button>
            <img className="w-[2rem] bg-white rounded-full p-1 " src={arrow2} />
          </button>

          <button onClick={()=>setslideimage(true)} >
            <img className="w-[2rem] bg-white rounded-full p-1 " src={arrow1} />
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Imagesliderinfo;
