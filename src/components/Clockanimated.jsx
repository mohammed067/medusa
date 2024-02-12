import React, { useState } from "react";
import vidsec from "../Images/vidsec.mp4";
import gradient from "../Images/gradient.webp";
import sunsky from "../Images/sunsky.webp";
import space from "../Images/space.webp";

function Clockanimated() {
  const [txtclick, settxtclick] = useState(1);
  const [clk, setclk] = useState(1);

  const allClick = (id) => {
    settxtclick(id);
    setclk(id);
  };
  //   const firsttext = () => {
  //     settxtclick(1);
  //     setclk(1)
  //   };
  //   const secondtext = () => {
  //     settxtclick(2);
  //     setclk(2)
  //   };
  //   const thirdtext = () => {
  //     settxtclick(3);
  //     setclk(3)
  //   };
  //   const fourthtext = () => {
  //     settxtclick(4);
  //     setclk(4)
  //   };
  return (
    <div className="px-[1.6rem] pt-[2rem]  overflow-hidden">
      {/* <h2 className="text-[32px] font-medium leading-[2.3rem] pt-[2rem]">
        SKYVIEW™ is not just a light —it’s wellness reimagined
      </h2>
      <div className="bg-gray-300 h-[1px] my-[2rem]" />
      <div>
        <div className="lg:flex">
          <div></div>
          <div>
            <h2 className="text-[20px] text-[#000000]">
              Merging beauty with science, SKYVIEW™ offers the
              performance-enhancing benefits of outdoor light like no other
              technology can.
            </h2>
            <div className="py-[3rem]">
              <button className="border-2 border-[#000000] font-medium px-[2rem] py-[0.4rem] rounded-full">
                Learn more about our technology
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div> */}

      <div className=" grid grid-cols-2  md:grid-rows-2">
        <h2 className="text-[32px] font-medium leading-[3rem] col-span-2 md:text-[64.8px] ">
        SKYVIEW™ is not just a light —it’s wellness reimagined
        </h2>
        
        <div className="pt-[2rem] col-span-2 lg:col-start-2 lg:px-[3rem]">
        <h2 className="text-[20px] ">
        Merging beauty with science, SKYVIEW™ offers the
              performance-enhancing benefits of outdoor light like no other
              technology can.
        </h2>

        <button className="hidden md:flex mb-[1rem] text-center  justify-center border-2 rounded-full border-[#000000] text-[#000000] font-medium py-2 px-[1rem] col-span-2 w-full mt-[2rem] lg:w-auto hover:bg-[#000000] hover:text-white">
          Learn more about our technology
          </button>
        </div>
       
        <div className=" col-span-2 md:row-start-2 lg:gap-[1rem] md:hidden mb-[1rem] md:mb-0">
          <button className="border-2 rounded-full border-[#000000] text-[#000000] font-medium py-2 px-[1rem] col-span-2 w-full mt-[2rem] lg:w-auto hover:bg-[#000000] hover:text-white">
          Learn more about our technology
          </button>
          
        </div>
      </div>

      <div className="hidden lg:flex  gap-8">
        <div className="w-[50vw]">
          <div onClick={() => allClick(1)} className="flex gap-2">
            <h2 className="text-[30.6px] text-[#000000]">01</h2>
            <div>
              <h2 className="text-[30.6px] text-[#000000] ">
                More than meets the eye
              </h2>
              <p
                className={`text-[19.4px] text-[#444444] pt-[1rem] ${
                  clk == 1
                    ? "opacity-100 h-[7rem] duration-[1s] transition-all"
                    : "opacity-0 h-0 duration-[1s] transition-all"
                }`}
              >
                Other technologies simply change color and brightness. SKYVIEW™
                works on a deeply biological level, automatically shifting
                throughout the day to align physiological cadence down to the
                cellular level.
              </p>
              <hr className="mt-[1rem]" />
            </div>
          </div>

          <div onClick={() => allClick(2)} className="flex gap-2">
            <h2 className="text-[30.6px] text-[#000000] pt-[2rem]">02</h2>
            <div>
              <h2 className="text-[30.6px] text-[#000000] pt-[2rem]">
                The only product with sun + sky
              </h2>
              <p
                className={`text-[19.4px] text-[#444444] pt-[1rem] ${
                  clk == 2
                    ? "opacity-100 h-[7rem] duration-[1s] transition-all"
                    : "opacity-0 h-0 duration-[1s] transition-all"
                }`}
              >
                Other technologies simply change color and brightness. SKYVIEW™
                works on a deeply biological level, automatically shifting
                throughout the day to align physiological cadence down to the
                cellular level.
              </p>

              <hr className="mt-[1rem]" />
            </div>
          </div>

          <div onClick={() => allClick(3)} className="flex gap-2">
            <h2 className="text-[30.6px] text-[#000000] pt-[2rem]">03</h2>
            <div>
              <h2 className="text-[30.6px] text-[#000000] pt-[2rem]">
                Gradients as good as nature
              </h2>
              <p
                className={`text-[19.4px] text-[#444444] pt-[1rem] ${
                  clk == 3
                    ? "opacity-100 h-[7rem] duration-[1s] transition-all"
                    : "opacity-0 h-0 duration-[1s] transition-all"
                }`}
              >
                Other technologies simply change color and brightness. SKYVIEW™
                works on a deeply biological level, automatically shifting
                throughout the day to align physiological cadence down to the
                cellular level.
              </p>
              <hr className="mt-[1rem]" />
            </div>
          </div>

          <div onClick={() => allClick(4)} className="flex gap-2">
            <h2 className="text-[30.6px] text-[#000000] pt-[2rem]">04</h2>
            <div>
              <h2 className="text-[30.6px] text-[#000000] pt-[2rem]">
                From outer space to living space
              </h2>
              <p
                className={`text-[19.4px] text-[#444444] pt-[1rem]  ${
                  clk == 4
                    ? "opacity-100 h-[7rem] duration-[1s] transition-all"
                    : "opacity-0 h-0 duration-[1s] transition-all"
                }`}
              >
                Other technologies simply change color and brightness. SKYVIEW™
                works on a deeply biological level, automatically shifting
                throughout the day to align physiological cadence down to the
                cellular level.
              </p>
            </div>
          </div>
        </div>
        <div className=" relative">
          <div className=" absolute h-max w-max ">
            <video
              autoPlay
              muted
              playsInline
              loop
              className={`w-[40vw] h-[70vh] lg:h-[60vh] transition-all duration-700  object-cover hidden lg:flex ${
                txtclick == 1 ? "scale-x-1 " : "scale-x-0"
              }`}
            >
              <source src={vidsec} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className=" w-[40vw] h-[70vh] lg:h-[60vh] absolute">
            <img
              className={`w-[40vw] h-[70vh] lg:h-[60vh] absolute transition-all duration-700 ${
                txtclick == 2 ? "scale-x-1 " : "scale-x-0"
              }`}
              src={sunsky}
            />
          </div>

          <div className=" w-[40vw] h-[70vh] lg:h-[60vh] absolute">
            <img
              className={`w-[40vw] h-[70vh] lg:h-[60vh] absolute transition-all duration-700 ${
                txtclick == 3 ? "scale-x-1 " : "scale-x-0"
              }`}
              src={gradient}
            />
          </div>

          <div className=" w-[40vw] h-[70vh] lg:h-[60vh] absolute">
            <img
              className={`w-[40vw] h-[70vh] lg:h-[60vh] absolute transition-all duration-700 ${
                txtclick == 4 ? "scale-x-1 " : "scale-x-0"
              }`}
              src={space}
            />
          </div>
        </div>
      </div>

      {/* mobile view */}

      <div className=" w-full lg:hidden ">
        <video autoPlay muted playsInline loop>
          <source src={vidsec} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div>
          <h2 className="text-[20px] text-[#000000] font-medium">
            More than meets the eye
          </h2>
          <p className={`text-[22px] text-[#444444] pt-[1rem] `}>
            Other technologies simply change color and brightness. SKYVIEW™
            works on a deeply biological level, automatically shifting
            throughout the day to align physiological cadence down to the
            cellular level.
          </p>
        </div>

        <div className=" w-full pt-[4rem] ">
          <img className={``} src={sunsky} />

          <div>
            <h2 className="text-[20px] text-[#000000] font-medium">
              More than meets the eye
            </h2>
            <p className={`text-[22px] text-[#444444] pt-[1rem] `}>
              Other technologies simply change color and brightness. SKYVIEW™
              works on a deeply biological level, automatically shifting
              throughout the day to align physiological cadence down to the
              cellular level.
            </p>
          </div>
        </div>

        <div className=" w-full  pt-[4rem] ">
          <img className={``} src={gradient} />
          <div>
            <h2 className="text-[20px] text-[#000000] font-medium ">
              More than meets the eye
            </h2>
            <p className={`text-[22px] text-[#444444] pt-[1rem] `}>
              Other technologies simply change color and brightness. SKYVIEW™
              works on a deeply biological level, automatically shifting
              throughout the day to align physiological cadence down to the
              cellular level.
            </p>
          </div>
        </div>

        <div className=" w-full pt-[4rem]  ">
          <img className={``} src={space} />

          <div>
            <h2 className="text-[20px] text-[#000000] font-medium">
              More than meets the eye
            </h2>
            <p className={`text-[22px] text-[#444444] pt-[1rem] `}>
              Other technologies simply change color and brightness. SKYVIEW™
              works on a deeply biological level, automatically shifting
              throughout the day to align physiological cadence down to the
              cellular level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clockanimated;
