import React, { useState } from "react";

function Summarytopinfo({ image, quantity,total}) {
  const [incrementer, setincrementer] = useState(0);

  const increment = () => {
    setincrementer((prev) => prev + 1);
  };

  const decrement = () => {
    setincrementer((prev) => prev - 1);
    if (incrementer == 0) {
      setincrementer(0);
    }
  };
  return (
    <div>
      {/* on medium devices */}

      <div className="px-[2rem] pt-[2rem] md:flex flex-col  ">
        {/* <div className="">
          <div className="flex justify-between items-center   ">
            <p className="text-[#000000] text-[40px]  font-semibold">
              Your order
            </p>
          </div>
          <div className="w-full h-[0.1rem] mt-[1rem] bg-gray-200" />
        </div> */}
{/* 
          <div className="md:hidden">
            <div className="flex justify-between items-center">
              <div>
                
                   <img className="w-[6rem] h-[6rem]" src={image} />
              
                
              </div>

              <div>
                <h2 className="font-medium text-[#ffffff]">SKYVIEW 2</h2>
                <p className="text-[#888888]">11.5in(29cm)</p>

                <div className="  flex justify-between border border-[#ffffff] rounded-full px-[0.4rem] ">
                  <button className="text-[#ffffff]" onClick={decrement}>
                    -
                  </button>
                  <p className="text-[#ffffff]">{quantity}</p>
                  <button className="text-[#ffffff]" onClick={increment}>
                    +
                  </button>
                </div>
              </div>

              <div className="text-[#ffffff]">$199</div>
            </div>
            <div className="w-full h-[0.1rem] mt-[1rem] bg-gray-600" />
          </div> */}

        {/* md devices */}
        <div>
          <div>
            <div className="flex justify-between items-center py-4 ">
              <div className="flex gap-8">
                <img className="w-[6rem] h-[6rem]" src={image} />

                <div className="">
                  <h2 className="font-medium text-[1rem] text-[#ffffff] md:text-[#000000] md:text-[28px]">
                    SKYVIEW 2
                  </h2>
                  <p className="text-[#888888] hidden">11.5in(29cm)</p>

                  <div className="  flex justify-between border border-gray-600 md:border-[#000000] rounded-full px-[0.4rem] mt-[2rem] ">
                    <button className="text-[#ffffff] md:text-[#000000]" onClick={decrement}>
                      -
                    </button>
                    <p className="text-[#ffffff] md:text-[#000000]">{quantity}</p>
                    <button className="text-[#ffffff] md:text-[#000000]" onClick={increment}>
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-[#ffffff] md:text-[#000000] font-semibold">{total}</div>
            </div>
            <div className="w-full h-[0.1rem] mt-[1rem] bg-gray-600 md:bg-gray-200" />
          </div>

          {/* <div className="py-[1rem]">
            <div className="bg-[#FFFFFF1A] px-[1rem] rounded-full border border-gray-200 flex overflow-hidden w-full py-2 justify-between">
              <input
                type="input "
                placeholder="Coupon code"
                className=" bg-transparent outline-none text-[#000000]"
              />

              <button className="bg-[#000000] text-[#ffffff] rounded-full px-[1rem] min-w-max ml-[-3rem] py-2">
                Apply coupon
              </button>
            </div>
            <div className="flex justify-between pt-[3rem]">
              <div className="">
                <p className="text-[#000000] text-[18px] ">Subtotal:</p>
                <p className="text-[#000000] text-[18px] pt-4">Tax:</p>
              </div>

              <div>
                <p className="text-[#000000] text-[18px]">$398.00</p>
                <p className="text-[#000000] text-[18px] pt-4">$0.00</p>
              </div>
            </div>
            <div className="w-full h-[0.1rem] mt-[1rem] bg-gray-200" />
          </div>
          <div>
            <div className="flex justify-between">
              <p className="text-[#000000] text-[18px]">Total</p>
              <p className="text-[#000000] font-medium text-[1.4rem]">
                $398.00
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Summarytopinfo;
