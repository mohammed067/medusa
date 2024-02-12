import React, { useEffect, useRef, useState } from "react";
import Imageanimationtext from "./Imageanimationtext";
import Imageanimationimg from "./Imageanimationimg";
import sunny from "../Images/sunny.svg";
import moon1 from "../Images/moon1.svg";
import knobw from "../Images/knobw.svg";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import framer1 from '../Images/framer1.webp';
import framer2 from '../Images/framer2.webp';
import framer3 from '../Images/framer3.webp';
import framer4 from '../Images/framer4.webp';

function Imageanimation() {
  const [issticky, setissticky] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const {
    ref: ref1,
    inView: inview1,
    entry: entry1,
  } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const {
    ref: ref2,
    inView: inview2,
    entry: entry2,
  } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const {
    ref: ref3,
    inView: inview3,
    entry: entry3,
  } = useInView({
    /* Optional options */
    threshold: 0.6,
  });

  const {
    ref: ref4,
    inView: inview4,
    entry: entry4,
  } = useInView({
    /* Optional options */
    threshold: 0.6,
  });

  const {
    ref: ref5,
    inView: inview5,
    entry: entry5,
  } = useInView({
    /* Optional options */
    threshold: 0.6,
  });

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

  const imgslid=[
    {
        id:1,
        img:framer1,
    },

    {
        id:2,
        img:framer2,
    },

    {
        id:3,
        img:framer3,
    },

    {
        id:4,
        img:framer4,
    },
]
  const [scrollPosition, setScrollPosition] = useState(0);
  const [imginfo,setimginfo]=useState(imgslid[0].img)
  const picRef = useRef(null);
  const tittleRef = useRef(null);
  const handleScroll = () => {
    if (picRef.current) {
      const newScrollPosition = picRef.current.scrollTop;
      if (newScrollPosition !== scrollPosition) {
        setScrollPosition(newScrollPosition);
        if (tittleRef.current) {
          tittleRef.current.scrollTop = newScrollPosition;
        }
        if (picRef.current) {
          picRef.current.scrollTop = newScrollPosition;
        }
      }
    }
  };
  useEffect(() => {
    if (picRef.current) {
      picRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (picRef.current) {
        picRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(()=>{
    console.log("scroll checking",scrollPosition)
  },[scrollPosition])

  useEffect(() => {
    const checking = () => {
      if (inView) {
        setissticky(true);
      }
    };
    checking();
  }, [inView]);

  useEffect(() => {
    const checking1 = () => {
      if (inview1) {
        setissticky(false);
        console.log("falsed");
      }
    };
    checking1();
  }, [inview1]);

  useEffect(()=>{
    if (scrollPosition<=80 ){
      setimginfo(imgslid[0].img)
      console.log("inview 3 clicked")
    }

    if (scrollPosition>=80 && scrollPosition<=280){
      setimginfo(imgslid[1].img)
    }

    if (scrollPosition>=350 && scrollPosition<=450){
      setimginfo(imgslid[2].img)
    }
  },[scrollPosition])

  return (
    <>
      <div
        ref={picRef}
        className={` ${
          issticky ? "sticky  top-[10vh] " : "static h-[70vh] "
        } overflow-scroll h-[90vh]  bg-black `}
      >
        <div className="h-[300vh]   ">
          <div className={`90vh  flex justify-between  sticky top-[20vh] `}>
            <div className="w-[30vw] flex flex-col pl-[2rem]">
              <div
                ref={tittleRef}
                className={`mt-[1rem]   sticky top-[20vh] h-[70vh] overflow-hidden`}
              >
                <div ref={ref} className="h-[20vh]"></div>
                {/* <div
                  className={`flex flex-col ${
                    inview1 ? "gap-6" : "gap-[4rem]"
                  }  transition-all ease-in-out duration-1000`}
                >
                  {textinfo.map((each, index) => (
                    <div
                      ref={index === 3 ? ref1 : null}
                      key={index}
                      className={` mt-6 px-[1rem] py-[2rem] ${
                        !issticky ? "bg-red-700" : "bg-[#FFFFFF1A]"
                      }  `}
                    >
                      <img src={each.img} alt="image" />
                      <p className="text-white text-2xl">{each.description}</p>
                    </div>
                  ))}
                </div> */}

                <div>
                    <div className={`bg-[#FFFFFF1A] mt-6 px-[1rem] py-[2rem] transition-all ease-in-out duration-1000`}>
                    <img src={textinfo[0].img} alt="image" />
                      <p className="text-white text-2xl">{textinfo[0].description}</p>
                    </div>
                    <div ref={ref3} className={clsx("bg-[#FFFFFF1A] py-[2rem] mt-6 px-[1rem] transition-all ease-in-out duration-1000 ", inview3?"mt-[1rem] delay-700 opacity-95":"mt-[10rem] ddelay-0 opacity-40")}>

                    <img src={textinfo[1].img} alt="image" />
                      <p className="text-white text-2xl">{textinfo[1].description}</p>
                    </div>
                    <div ref={ref4} className={clsx("bg-[#FFFFFF1A] py-[2rem] mt-6 px-[1rem] transition-all ease-in-out duration-1000 ", inview4?"mt-[1rem] delay-700 opacity-95":"mt-[10rem] delay-0 opacity-40")}>

                    <img src={textinfo[2].img} alt="image" />
                      <p className="text-white text-2xl">{textinfo[2].description}</p>
                    </div>
                    <div ref={ref5} className={clsx("bg-[#FFFFFF1A] py-[2rem] mt-6 px-[1rem] transition-all ease-in-out duration-1000 ", inview5?"mt-[1rem] delay-700 opacity-95":"mt-[10rem]  delay-0 opacity-40")}>
                    <img src={textinfo[3].img} alt="image" />
                      <p className="text-white text-2xl">{textinfo[3].description}</p>
                    </div>
                </div>

                <div ref={ref1} className="h-[20vh]"></div>
              </div>
            </div>

            <div>
            <img className='w-[40rem]' src={imginfo}/>
              </div>
          </div>
        </div>
      </div>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
        exercitationem autem rem unde. Reprehenderit minus cupiditate, beatae,
        illum ullam numquam sint sequi perspiciatis optio tenetur totam
        explicabo nobis repudiandae mollitia?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
        exercitationem autem rem unde. Reprehenderit minus cupiditate, beatae,
        illum ullam numquam sint sequi perspiciatis optio tenetur totam
        explicabo nobis repudiandae mollitia?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
        exercitationem autem rem unde. Reprehenderit minus cupiditate, beatae,
        illum ullam numquam sint sequi perspiciatis optio tenetur totam
        explicabo nobis repudiandae mollitia?
      </p>
    </>
  );
}

export default Imageanimation;
