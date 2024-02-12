import React from "react";
import Shoppingpageinfo from "./Shoppingpageinfo";
import Shoppingcartright from "./Shoppingcartright";
import Deliveryinfo from "./Deliveryinfo";
import { useLocation } from "react-router-dom";

function Shoppingpage({ product1 }) {
  const location = useLocation();
  const { hash, pathname, search } = location;
  console.log('path',pathname)
  // const cartinfo = [
  //   {
  //     addedimage: product && product.productimage,
  //   },
  // ];

  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  console.log(`Selected Product: ${product1 && product1.productname ? product1.productname : 'N/A'}`);
  const checking = () => {
  };

  return (
    <>
      <div className="px-[2rem] bg-[#f8f9fa]">
        <div className="w-[100%]  md:grid-rows-1 gap-4 grid md:grid-cols-3 m-auto pt-11 ">
          <div className="row-start-3 md:row-start-1 md:col-span-2">
            <Deliveryinfo />
          </div>
          <div className="md:col-span-2 row-span- ">
            <Shoppingpageinfo cartinfo={product1?.productimage}  />
          </div>
          <div className="">
            <Shoppingcartright />
          </div>
        </div>
      </div>
      <button className="w-[100vw] h-[20vh] bg-black text-white" onClick={checking}>
        check
      </button>
    </>
  );
}

export default Shoppingpage;
