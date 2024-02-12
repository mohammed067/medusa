import React,{useState} from 'react'
import Reviewsectioninfo from './Reviewsectioninfo';
import rightarrow from "../Images/rightarrow.svg";
import leftarrow from "../Images/leftarrow.svg";

function Reviewsection() {
    const [index1, setIndex1] = useState(0);
    const [translateX, setTranslateX] = useState(0);
  
    const nextSlide = () => {
      if (index1 < 8) {
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
  
    const sliderReviewinfo = [
        {
            id:1,
            rev1:"Game changer. This light lifts your mood and works flawlessly. The quality of the light is impeccable. ”",
            revname:"— Joseph A."
        },
        {
            id:2,
            rev1:"I’ve been waking up earlier, and that’s incredible. This light really makes something happen on the biological level.”",
            revname:"— Gayathri A."
        },

        {
            id:3,
            rev1:"<p>Game changer. This light lifts your mood and works flawlessly. The quality of the light is impeccable.”",
            revname:"— Jose C."
        },
        {
            id:4,
            rev1:"Game changer. This light lifts your mood and works flawlessly. The quality of the light is impeccable. ”",
            revname:"— Dennis A."
        },
        {
            id:5,
            rev1:"I’ve been waking up earlier, and that’s incredible. This light really makes something happen on the biological level.”",
            revname:"— Jos B."
        },

        {
            id:6,
            rev1:"Game changer. This light lifts your mood and works flawlessly. The quality of the light is impeccable.”",
            revname:"— Joseh A."
        },
        {
            id:7,
            rev1:"Game changer. This light lifts your mood and works flawlessly. The quality of the light is impeccable. ”",
            revname:"— Bill A."
        },
        {
            id:8,
            rev1:"I’ve been waking up earlier, and that’s incredible. This light really makes something happen on the biological level.”",
            revname:"—  Mcllumm A."
        },
        {
            id:9,
            rev1:"I’ve been waking up earlier, and that’s incredible. This light really makes something happen on the biological level.”",
            revname:"—  Mcllumm A."
        },
        {
            id:10,
            rev1:"I’ve been waking up earlier, and that’s incredible. This light really makes something happen on the biological level.”",
            revname:"—  Mcllumm A."
        },
        {
            id:11,
            rev1:"I’ve been waking up earlier, and that’s incredible. This light really makes something happen on the biological level.”",
            revname:"—  Mcllumm A."
        },


      
    ];
  return (
    <div className=" relative"> 
         <div
      className={`p-[1rem] flex transition duration-1000 ease-in`}
      style={{ transform: `translateX(${translateX}%)` }}
    >
        {sliderReviewinfo.map((each, index) => (
            <Reviewsectioninfo id={index} info1={each.rev1}
            info2={each.revname} index1={index1}
            className={index === 0 && each.id === 2 ? 'opacity-40' : ''}
            />
       
        ))}
      </div>
      <div className="flex absolute right-20 gap-4 justify-between bottom-9 p-4 lg:right-[7rem] lg:bottom-[4rem] xl:right-[10rem] xl:bottom-[5rem]">
        <button onClick={prevSlide}>
          <img className={`w-[2rem] bg-white rounded-full p-1 ${index1==0?"opacity-50":""} `} src={leftarrow} alt="left-arrow" />
        </button>
        <button onClick={nextSlide}>
          <img className={`w-[2rem] bg-white rounded-full ${index1==8?"opacity-50":""} p-1 `} src={rightarrow} alt="right-arrow" />
        </button>
      </div>

      <div>
        <h2 className="pl-[1rem] text-2xl text-black">0{index1}-08</h2>
      </div>
    </div>
  );
}

export default Reviewsection



