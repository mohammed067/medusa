import React from "react";
import Learnmoredinfo from "./Learnmoredinfo";
import focus from "../Images/focus.svg";
import performance from "../Images/performance.svg";
import emoticon from "../Images/emoticon.svg";
import moon from "../Images/moon.svg";

function Learnmore() {
  return (
    <div className="flex items-center 2xl:hidden  justify-center ">
      <div className="2xl:max-w-[1700px] px-[1rem] pt-[2rem]">
        <div className=" grid grid-cols-2  md:grid-rows-2">
          <h2 className="text-[32px] font-medium leading-[2rem] md:leading-[3.4rem] lg:leading-[4rem] col-span-2 md:text-[58px] ">
            Designed by nature, <br /> personalized to your schedule
          </h2>

          <div className="pt-[1rem] col-span-2 lg:col-start-2 lg:px-[3rem]">
            <h2 className="md:text-[28px] text-[#000000] font-medium">
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

        <div className=" md:grid md:grid-cols-2 gap-3">
          <Learnmoredinfo
            viewset={1}
            index={1}
            colclass={`absolute w-[10rem] bottom-[-6rem]  bg-radial-gradient  right-0 md:w-[20rem] h-[30vh] blur-3xl  md:duration-500 overflow-hidden mt-[9rem]`}
            logo={focus}
            heading="Feel more awake"
            info="Users report feeling like they got +3 hours of sleep, as effective as a cup of coffee all-day."
            button="Learn more"
          />

          <Learnmoredinfo
            colclass="absolute w-[10rem] bottom-[-6rem]  bg-radial-gradient  left-0 md:w-[20rem] h-[30vh] blur-3xl  duration-500 overflow-hidden mt-[9rem]"
            logo={performance}
            heading="Feel more awake"
            info="Users report feeling like they got +3 hours of sleep, as effective as a cup of coffee all-day."
            button="Learn more"
          />

          <Learnmoredinfo
            colclass={`absolute top-0  w-[10rem] bg-radial-gradient  right-0 md:w-[20rem] h-[30vh] blur-3xl  duration-500 overflow-hidden `}
            logo={emoticon}
            heading="Feel more awake"
            info="Users report feeling like they got +3 hours of sleep, as effective as a cup of coffee all-day."
            button="Learn more"
          />

          <Learnmoredinfo
            colclass={`absolute w-[10rem] top-0  bg-radial-gradient  left-0 md:w-[20rem] h-[30vh] blur-3xl  duration-500 overflow-hidden `}
            logo={moon}
            heading="Feel more awake"
            info="Users report feeling like they got +3 hours of sleep, as effective as a cup of coffee all-day."
            button="Learn more"
          />
        </div>
      </div>
    </div>
  );
}

export default Learnmore;
