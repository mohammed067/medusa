import React, { useState } from "react";
import phon1 from "../Images/phon1.png.webp";
import phone2 from "../Images/phone2.png.webp";
import phone3 from "../Images/phone3.png.webp";

function Appsection() {
  const [txtclick, settxtclick] = useState(1);
  const [clk, setclk] = useState(1);

  const allClick = (id) => {
    settxtclick(id);
    setclk(id);
  };

  const arr = [
    {
      topsection: "Our app puts you back onto your ''natural'' schedule",
      description:
      "Once your SKYVIEW™ light is set up, use our app to personalize your wellness experience. Match your natural light cycle or meet your unique daily demands. Adjust brightness, depth of color, and even recreate the effect of dancing clouds, all at your fingertips.",
 
      buttonleft: "Get it on the App Store",
      buttonright: "Android App",
      img2: { phone2 },
    },

  

    {
      id: 1,
      no1: "01",
      img1: phon1,
      Readyinfo: "Ready when you need it",
      Readydesc:
        "et up your SKYVIEW™ once and it will remember your schedule. Power through your day, then rest and rejuvenate just as nature intended.",
    },

    {
      id: 2,
      no1: "02",
      img2: phone2,
      Readyinfo: "Color outside the lines",
      Readydesc:
        "Keep the daytime vibes going a little longer or set your own mood anytime with detailed color tuning and quick modes for sleep, reading and work.",
    },

    {
      id: 3,
      no1: "03",
      img3: phone3,
      Readyinfo: "Quick modes, swift results",
      Readydesc:
        "Whether you're focused on a task, relaxing after a busy day, or simply need enhanced visibility, SKYVIEW™ has got you covered.",
    },
  ];
  return (
    <div className="bg-[#EFE9E5] px-[1rem] h-auto overflow-hidden">
      <div className="w-[100vw]  lg:flex lg:flex-row px-[2rem]   ">
        {/* <div className="w-full  lg:w-[50vw]">
       
          <img
            className={` h-[70vh] absolute transition-all -z-30 duration-700 ${
              txtclick == 1 ? "scale-x-1 " : "scale-x-0"
            }`}
            src={phon1}
          />
       

       
          <img
            className={`h-[70vh] absolute transition-all duration-700 ${
              txtclick == 2 ? "scale-x-1 " : "scale-x-0"
            }`}
            src={phone2}
          />
       

          <img
            className={` h-[70vh] absolute transition-all duration-700 ${
              txtclick == 3 ? "scale-x-1 " : "scale-x-0"
            }`}
            src={phone3}
          />
       
      </div>

     
        <div className="-z-50 h-[33rem] lg:w-[50vw] top-[30rem] md:top-[53rem] absolute lg:top-0 lg:relative gap-8">
          <div className="">
            <div onClick={() => allClick(1)} className="flex gap-2">
              <h2 className="text-[30.6px] text-[#000000]">01</h2>
              <div>
                <h2 className="text-[30.6px] text-[#000000] ">
                  More than meets the eye
                </h2>
                <p
                  className={`text-[19.4px] text-[#444444] pt-[1rem] ${
                    clk == 1
                      ? "opacity-100 h-[9rem] duration-[1s] transition-all"
                      : "opacity-0 h-0 duration-[1s] transition-all"
                  }`}
                >
                  Other technologies simply change color and brightness.
                  SKYVIEW™ works on a deeply biological level, automatically
                  shifting throughout the day to align physiological cadence
                  down to the cellular level.
                </p>
                <hr className="mt-[1rem]" />
              </div>
            </div>

            <div onClick={() => allClick(2)} className="flex gap-2">
              <h2 className="text-[30.6px] text-[#000000] pt-[3rem]">02</h2>
              <div>
                <h2 className="text-[30.6px] text-[#000000] pt-[3rem]">
                  The only product with sun + sky
                </h2>
                <p
                  className={`text-[19.4px] text-[#444444] pt-[1rem] ${
                    clk == 2
                      ? "opacity-100 h-[9rem] md:h-[7rem] duration-[1s] transition-all"
                      : "opacity-0 h-0 duration-[1s] transition-all"
                  }`}
                >
                  Other technologies simply change color and brightness.
                  SKYVIEW™ works on a deeply biological level, automatically
                  shifting throughout the day to align physiological cadence
                  down to the cellular level.
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
                  Other technologies simply change color and brightness.
                  SKYVIEW™ works on a deeply biological level, automatically
                  shifting throughout the day to align physiological cadence
                  down to the cellular level.
                </p>
                <hr className="mt-[1rem]" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className=" grid grid-cols-2  md:grid-rows-2">
             <h2 className="text-[32px] font-medium leading-[3rem] col-span-2 ">{arr[0].topsection}</h2>
             
          <h2 className="text-[20px] pt-[2rem] col-span-2 lg:col-start-2 lg:px-[3rem]">{arr[0].description}</h2>
          <div className="col-span-2 md:row-start-2 lg:gap-[1rem] ">
          
          <button className="border-2 rounded-full border-[#000000] text-[#000000] font-medium py-2 px-[1rem] col-span-2 w-full mt-[2rem] lg:w-auto hover:bg-[#000000] hover:text-white">{arr[0].buttonleft}</button>
          <button className="border-2 rounded-full border-[#000000] text-[#000000] font-medium py-2 px-[1rem]  w-full mt-[1rem] lg:w-auto lg:ml-4 hover:bg-[#000000] hover:text-white">{arr[0].buttonright}</button>
          </div>
          </div>
       
        <div className="w-full grid grid-cols-4 pt-[2rem] ">
          <div className=" col-span-4 w-full lg:col-span-2">
            <img
              className={` h-[70vh] absolute transition-all -z-30 duration-700 ${
                txtclick == 1 ? "scale-x-1 " : "scale-x-0"
              }`}
              src={phon1}
            />

            <img
              className={`h-[70vh] absolute transition-all duration-700 ${
                txtclick == 2 ? "scale-x-1 " : "scale-x-0"
              }`}
              src={phone2}
            />

            <img
              className={` h-[70vh] absolute transition-all duration-700 ${
                txtclick == 3 ? "scale-x-1 " : "scale-x-0"
              }`}
              src={phone3}
            />
          </div>

          <div className="  w-[80vw]  lg:col-start-3 lg:px-[3rem]">
            <div onClick={() => allClick(1)} className="flex gap-2">
              <h2 className="text-[30.6px] text-[#000000]">01</h2>
              <div>
                <h2 className="text-[30.6px] text-[#000000] ">
                  More than meets the eye
                </h2>
                <p
                  className={`text-[19.4px] text-[#444444] pt-[1rem]  ${
                    clk == 1
                      ? "opacity-100 h-[9rem] duration-[1s] transition-all "
                      : "opacity-0 h-0 duration-[1s] transition-all "
                  }`}
                >
                  Other technologies simply change color and brightness.
                  SKYVIEW™ works on a deeply biological level, automatically
                  shifting throughout the day to align physiological cadence
                  down to the cellular level.
                </p>
                <hr className="mt-[1rem]" />
              </div>
            </div>

            <div onClick={() => allClick(2)} className="flex gap-2">
              <h2 className="text-[30.6px] text-[#000000] pt-[3rem]">02</h2>
              <div>
                <h2 className="text-[30.6px] text-[#000000] pt-[3rem]">
                  The only product with sun + sky
                </h2>
                <p
                  className={`text-[19.4px] text-[#444444] pt-[1rem] ${
                    clk == 2
                      ? "opacity-100 h-[9rem] md:h-[7rem] duration-[1s] transition-all"
                      : "opacity-0 h-0 duration-[1s] transition-all"
                  }`}
                >
                  Other technologies simply change color and brightness.
                  SKYVIEW™ works on a deeply biological level, automatically
                  shifting throughout the day to align physiological cadence
                  down to the cellular level.
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
                  Other technologies simply change color and brightness.
                  SKYVIEW™ works on a deeply biological level, automatically
                  shifting throughout the day to align physiological cadence
                  down to the cellular level.
                </p>
                <hr className="mt-[1rem]" />
              </div>
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default Appsection;
