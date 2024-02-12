
import React, { useState, useEffect } from "react";
import video from "../Images/video.mp4";
import video1 from "../Images/video1.mp4";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";


function Videosection() {
  
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log(inView)

  const [index, setIndex] = useState(0);

  const arr = [
    {
      id: 1,
      picture: "",
      description: "Wake up with positive energy.SkyView starts your day with the natural brilliance of sunrise",
    },
    {
      id: 2,
      picture: "",
      description: "Work through your day with steady focus. Bright light helps you bring your A-game to every task on your list.",
    },
    {
      id: 3,
      picture: "",
      description: "Effortlessly wind down. SkyView shifts to prepare your body and mind",
    },
  ];

  const changetext2 = async () => {
    if (index === 2) {
      await new Promise(resolve => setTimeout(resolve, 4000)); // Wait for 4 seconds
      setIndex(0);
    }
  };

  const changetext = async () => {
    if (index === 0) {
      await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds
      setIndex(1);
    }
    if (index === 1) {
      await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds
      setIndex(2);
    }
  };

  useEffect(() => {
    const interval1 = setInterval(() => {
      changetext();
    }, 3000);

    const interval2 = setInterval(() => {
      changetext2();
    }, 4000);

    // Clear intervals when the component unmounts
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [index]); // Run effect whenever index changes


  return (
    <div ref={ref}  className=" w-full relative h-screen -z-50 ">
      <video
        autoPlay
        muted
        playsInline
        loop
        className="w-full h-full object-cover lg:hidden"
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        autoPlay
        muted
        playsInline
        loop
        className="w-full h-full object-cover hidden lg:flex"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 lg:flex   justify-between w-full px-2 py-2 lg:p-[2rem]">
        <div>
          <h2 className="text-[3rem] font-semibold  text-[#ffffff] leading-[4rem] lg:text-[6rem] lg:text-black lg:leading-[6rem]">
            Better light, <br />
            better life.
          </h2>
        </div>

        <div className="hidden  lg:flex lg:w-[14rem]">
          <h4>
            <b>Supercharge Your Day with SKYVIEW™</b> — the technology designed
            to keep astronauts healthy is now here to enhance your day-to-day
            performance.
          </h4>
        </div>
      </div>


      <div className={clsx(" hidden absolute bottom-[8rem]   text-white lg:flex lg:left-[30%]  w-[28rem] xl:w-[30rem] xl:left-[32%] 2xl:w-[38rem] 2xl:left-[38%]",inView?" duration-[3s] opacity-100  transition-opacity":" opacity-0")}>
        <h2 className="text-center items-center text-[35px] text-white">{arr[index].description}</h2>
         
        
      </div>
    </div>
  );
}

export default Videosection;
