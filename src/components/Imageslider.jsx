import React, { useState } from "react";
import image1 from "../Images/image1.webp";
import Imagesliderinfo from "./Imagesliderinfo";
import image2 from "../Images/image2.webp";
import image3 from "../Images/image3.webp";
import image4 from "../Images/image4.webp";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.webp";
import image7 from "../Images/image7.webp";
import rightarrow from "../Images/rightarrow.svg";
import leftarrow from "../Images/leftarrow.svg";

function Imageslider() {
  const [index1, setIndex1] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const nextSlide = () => {
    if (index1 < 6) {
      setIndex1(index1 + 1);
      setTranslateX(translateX - 90); // Adjust this value based on your image width
    }
  };

  const prevSlide = () => {
    if (index1 > 0) {
      setIndex1(index1 - 1);
      setTranslateX(translateX + 90); // Adjust this value based on your image width
    }
  };

  const sliderImages = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <div className=" relative"> 
      <div className={`p-[1rem] flex transition-transform duration-300 ease-in-out`} style={{ transform: `translateX(${translateX}%)` }}>
        {sliderImages.map((image, index) => (
          <Imagesliderinfo key={index} images={image} arrow1={rightarrow} arrow2={leftarrow} />
        ))}
      </div>
      <div className="flex absolute right-20 gap-4 justify-between bottom-9 p-4 lg:right-[7rem] lg:bottom-[4rem] xl:right-[10rem] xl:bottom-[5rem]">
        <button onClick={prevSlide}>
          <img className={`w-[2rem] bg-white rounded-full p-1 ${index1==0?"opacity-50":""} `} src={leftarrow} alt="left-arrow" />
        </button>
        <button onClick={nextSlide}>
          <img className={`w-[2rem] bg-white rounded-full ${index1==6?"opacity-50":""} p-1 `} src={rightarrow} alt="right-arrow" />
        </button>
      </div>

      <div>
        <h2 className="pl-[1rem] text-2xl text-black">0{index1}-06</h2>
      </div>
    </div>
  );
}

export default Imageslider;
