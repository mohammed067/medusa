import React, { useState, useRef, useEffect } from "react";
import { useProduct, useCart } from "medusa-react";
import { useParams } from "react-router-dom";
import Deliveryinfo from "./Deliveryinfo";
import shipping from "../Images/shipping.png";
import cart from "../Images/cart.png";
import correct from "../Images/correct.png";
import cross1 from "../Images/cross.png";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import Learnmore from "./Learnmore";
import Imageanimation from "./Imageanimation";
import Cart from "./Cart";

function Shoppingnew() {
  const { path } = useParams();
  console.log("path", path);

  const { product, isLoading } = useProduct(path);
  const { updateCart, cart } = useCart();  // Moved useCart to the top level
  const [imgdata, setimgdata] = useState();
  const [titleinfo, settitleinfo] = useState();
  const [checkot, setcheckot] = useState(false);
  const [current, setCurrent] = useState(0);
  const [arr2, setarr2] = useState([]);

  useEffect(() => {
    // Initialize the productCounter when the component mounts
    productCounter.current = 0;
  }, []);

  const productCounter = useRef(0);

  const shipinfo = [
    {
      id: 1,
      img1: shipping,
      img1info: "Free Shipping",
    },
    {
      id: 2,
      img1: cart,
      img1info: "Secure Checkout",
    },
    {
      id: 3,
      img1: correct,
      img1info: "1 Year Warranty",
    },
  ];

  // Check if the product is defined before accessing its properties
  if (!product) {
    return <p>Product not found</p>;
  }

  const previousSlide = () => {
    if (current === 0) setCurrent(0);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === product.images.length - 1)
      setCurrent(product.images.length - 1);
    else setCurrent(current + 1);
  };

  const checkout = (newRegionId) => {
    updateCart.mutate(
      {
        region_id: newRegionId,
      },
      {
        onSuccess: (data) => {
          // Update cart items
          const updatedItems = [
            ...data.cart.items,
            {
              id: product.id,
              title: product.title,
              price: product.variants[0].prices[0].amount,
              image: product.images[0].url,
              quantity: 1,
            },
          ];

          // Log the updated data
          console.log("Update Cart", { ...data, cart: { ...data.cart, items: updatedItems } });
        },
      }
    );

    setcheckot(true);
  };


  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="relative grid grid-cols-2 grid-row-2 w-[100vw]">
          <div className="row-start-2 md:row-start-1 col-span-2">
            <Deliveryinfo />
          </div>

          <div className="col-span-2 w-full md:row-start-2">
            <div className="flex flex-col md:flex-row gap-3 px-2">
              <div className="relative overflow-hidden md:w-[70vw]">
                <div
                  className={`flex transition ease-out duration-40`}
                  style={{
                    transform: `translateX(-${current * 100}%)`,
                  }}
                >
                  {product.images &&
                    product.images[0] &&
                    product.images.map((each, index) => (
                      <img key={index} src={each.url} alt={`slide-${index}`} />
                    ))}
                </div>

                <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                  <button onClick={previousSlide}>
                    <BsFillArrowLeftCircleFill />
                  </button>
                  <button onClick={nextSlide}>
                    <BsFillArrowRightCircleFill />
                  </button>
                </div>
              </div>

              <div>
                <div>
                  <h2 className="text-[28px] font-medium ">Choose a version</h2>
                  <p className="text-[#888888] text-[20px]">
                    Whichever lamp you choose, you’ll be finding flow and resting
                    well in no time.
                  </p>
                </div>
                <div className="hidden md:flex grid grid-cols-3 ">
                  {shipinfo?.map((each) => (
                    <div
                      key={each.id}
                      className="flex flex-col justify-center text-center md:flex-row items-center gap-[1rem]  "
                    >
                      <img
                        className="w-[2.3rem]"
                        src={each.img1}
                        alt={each.img1info}
                      />
                      <p className="">{each.img1info}</p>
                    </div>
                  ))}
                </div>

                <div className="py-[1rem] mt-4 flex justify-between px-[1rem] border border-gray-300  rounded-md  shadow-md">
                  <div>
                    <h2 className="text-[20px]">{product.title}</h2>
                    <p className="text-[#888888] text-[12px]">
                      {product.dimensions}
                    </p>
                  </div>
                  <p>${product.price}</p>
                </div>
                <button
                  onClick={() => checkout(cart.region_id)}
                  className={`bg-[#000000] text-white w-full rounded-full p-[1rem] mt-4 `}
                >
                  Add to cart
                </button>

                <button
                  onClick={() => setcheckot(true)}
                  className={`bg-[#000000] text-white w-full rounded-full p-[1rem] mt-4 `}
                >
                  View cart
                </button>
              </div>
            </div>
          </div>

          <div
            className={` absolute top-0 md:right-0 bg-[#ffffff] ease-in-out duration-700 transition-all md:w-[60vw] lg:w-[42vw] ${
              checkot ? " translate-x-0" : "translate-x-[100%]"
            }`}
          >
            <div className="justify-between flex px-[2rem]  items-center">
              <p className="text-[2rem]">Cart</p>
              <button
                onClick={() => setcheckot(false)}
                className="ease-in-out duration-700 transition-all font-semibold text-[4rem] hover:rotate-45  p-[1rem] mt-4"
              >
                <img
                  className={`w-[2rem] ease-in-out duration-700 transition-all transform hover:rotate-45`}
                  src={cross1}
                  alt="Close cart"
                />
              </button>
            </div>
            <Cart arr2={arr2} />
          </div>
        </div>
      )}

      {/* <Learnmore />
      <Imageanimation /> */}
    </>
  );
}

export default Shoppingnew;
