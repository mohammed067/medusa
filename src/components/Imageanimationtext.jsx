import React from "react";
import sunny from "../Images/sunny.svg";
import moon1 from "../Images/moon1.svg";
import knobw from "../Images/knobw.svg";

function Imageanimationtext( {ref}) {
  const textinfo = [
    {
      id: 1,
      img: sunny,
      description:
        "Twilight light gently brings you into your day to be your best!",
    },

    {
      id: 2,
      img: moon1,
      description: "BlueSky light during the day boosts mood and alertness",
    },

    {
      id: 3,
      img: knobw,
      description:
        "Warm amber light in the evening prepares you for rest and restorative sleep",
    },

    {
      id: 4,
      img: knobw,
      description:
        "Twilight light gently brings you into your day to be your best!",
    },
  ];
  return (
    <div ref={ref} className="mt-[1rem] h-[70vh] overflow-scroll">
      <div className="h-[20vh]"></div>
      {textinfo.map((each, index) => (
        <div key={index} className="bg-[#FFFFFF1A] mt-6 px-[1rem] py-[2rem] ">
          <img src={each.img} alt="image" />
          <p className="text-white text-2xl">{each.description}</p>
        </div>
      ))}

      <div className="h-[20vh]"></div>
    </div>
  );
}

export default Imageanimationtext;
