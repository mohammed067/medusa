import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import animatedimage from '../Images/animatedimage.webp';
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

function Animatedtext1() {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const { scrollYProgress } = useScroll();

  const initialWidth = 800; // Width when scrolling up
  const fullWidth = window.innerWidth; // Full width of the window when scrolling down

  const newWidth = useTransform(
    scrollYProgress,
    [0, 1], // Scroll range from 0 to 1
    [initialWidth,fullWidth] // Width range from fullWidth to initialWidth when scrolling up
  );

  const paddingX = useTransform(
    scrollYProgress,
    [0, 1], // Scroll range from 0 to 1
    ["2rem", "2rem"] // Padding range from 2rem to 2rem when scrolling up
  );

  return (
    <div ref={ref} className=" relative flex flex-col items-center w-full justify-center">

    <motion.div
      className="sticky top-0 hidden col-span-1 row-start-1 h-[100vh] lg:flex lg:flex-col items-center lg:pt-[18rem] duration-1000 transition-all bg-no-repeat bg-center text-[3rem] text-white"
      style={{
        width: newWidth, // Set the width based on scroll position
         // Set right padding based on scroll position
        backgroundImage: `url(${animatedimage})`
      }}
      >
      {/* Content inside the animated div */}
    </motion.div>
        <div className=" relative z-[1000]  text-[3rem] flex flex-col gap-52 px-[7rem] -mt-[38rem] text-white">

        <p className={clsx("",inView?"duration-[3s] opacity-100  transition-opacity":"opacity-0")}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius corporis atque molestias explicabo cumque debitis ullam quisquam neque quasi sunt aut quod obcaecati quae, deleniti, soluta aperiam quibusdam ea nisi.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius corporis atque molestias explicabo cumque debitis ullam quisquam neque quasi sunt aut quod obcaecati quae, deleniti, soluta aperiam quibusdam ea nisi.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius corporis atque molestias explicabo cumque debitis ullam quisquam neque quasi sunt aut quod obcaecati quae, deleniti, soluta aperiam quibusdam ea nisi.</p>
        
        </div>
      </div>
  ); 
}

export default Animatedtext1;
