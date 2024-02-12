import React, { useEffect, useState } from "react";
import cart from "../Images/cart.png";
import arrow from "../Images/arrow.png";
import framer1 from "../Images/framer1.webp";
import Summarytopinfo from "./Summarytopinfo";
import Medusa from "@medusajs/medusa-js";
import { useAdminOrders } from "medusa-react"

function Summarytop() {
  const [incrementer, setincrementer] = useState(0);
  const [summary1, setsummary1] = useState(false);
  const [summarycart, setsummarycart] = useState([]);
  const [overallTotalPrice, setOverallTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [arr2, setarr2] = useState()
 
  // const { orders, isLoading1 } = useAdminOrders()

  // console.log("checking whether orders is updating or not",orders)

  useEffect(() => {
    const existingCart = localStorage.getItem("cart");
    const temp = JSON.parse(existingCart);
    setsummarycart(temp);
  }, []);


  const cartid_local=localStorage.getItem("cart_id")
  useEffect(()=>{
    let options = {
      method: "GET"
    };
    
    fetch(`http://localhost:9000/store/carts/${cartid_local}`, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let checkingData = jsonData;
        // console.log("checking apiii",checkingData.cart.items); // Log the data to the console
        setarr2(checkingData)
        return checkingData;
       
      
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
     
      // console.log("cartitems",cartitems)
      
      
  },[cartid_local])

  let data=arr2?.cart?.total 
  console.log("checking data in cart bottom",data)


  useEffect(() => {
    setIsLoading(true);
    const displaytotal = summarycart.map((each) => {
      const price = each.price;
      const quantity = each.quantity;
      const totalprice = price * quantity;
      each.price=totalprice
      console.log(totalprice);
      return totalprice;
    });

    const overallTotalPrice = displaytotal.reduce(
      (total, productTotal) => total + productTotal,
      0
    );
    setOverallTotalPrice(overallTotalPrice);

    console.log("Overall Total Price:", overallTotalPrice);
    console.log("summary total check123", displaytotal);
    setIsLoading(false);
  }, [summarycart]);

  const summaryp = () => {
    setsummary1(!summary1);
    console.log(summary1);
  };

  const increment = () => {
    setincrementer((prev) => prev + 1);
  };

  const decrement = () => {
    setincrementer((prev) => prev - 1);
    if (incrementer === 0) {
      setincrementer(0);
    }
  };

  const medusa = new Medusa({
    baseUrl: "http://localhost:9000",
    maxRetries: 3,
  });

  const customerLogout = () => {
    medusa.auth.deleteSession()
    .then(() => {
      // success
      localStorage.removeItem('user')
      window.location.reload()
    })
  };
  

  return (
    <>
      <div className="px-[1rem] pt-[2rem] md:hidden">
        <div className="">
          <div className="flex justify-between items-center   ">
            <img className=" bg-white rounded-full " src={cart} />
            <p className="text-[#ffffff]">Show order summary</p>
            <img
              className={`w-[1rem] h-[1rem] ${summary1 ? " rotate-180" : ""}`}
              src={arrow}
              onClick={summaryp}
            />
            <p className="text-[#ffffff]">${overallTotalPrice}</p>
          </div>
          <div className="w-full h-[0.1rem] mt-[1rem] bg-gray-600" />
        </div>

        <div className={`${summary1 ? "visible" : "hidden"}`}>
          <div className="h-[20vh]  overflow-y-scroll">
          {arr2?.cart?.items?.map((each) => (
              <Summarytopinfo
               // Make sure each item has a unique key
                image={each.thumbnail}
                quantity={each.quantity}
                total={isLoading ? 'Loading...' : each.total}
              />
            ))}
          </div>

          <div className="py-[1rem]">
            <div className="bg-[#FFFFFF1A] px-[1rem] rounded-full border border-gray-600 flex overflow-hidden w-full py-2">
              <input
                type="input "
                placeholder="Coupon code"
                className=" bg-transparent outline-none text-white"
              />

              <button className="bg-[#ffffff] text-[#000000] rounded-full px-[1rem] min-w-max ml-[-3rem] py-2">
                Apply coupon
              </button>
            </div>
            <div className="flex justify-between pt-[3rem]">
              <div>
                <p className="text-white">Subtotal:</p>
                <p className="text-white">Tax:</p>
              </div>

              <div>
                <p className="text-white">$398.00</p>
                <p className="text-white">$0.00</p>
              </div>
            </div>
            <div className="w-full h-[0.2rem] mt-[1rem] bg-gray-300" />
          </div>

          <div>
            <div className="flex justify-between">
              <p className="text-white">Total</p>
              <p className="text-white font-medium text-[1.4rem]">
                {overallTotalPrice}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[2rem] pt-[2rem] hidden  md:flex flex-col md:h-[74vh]  ">
        <div className="">
          <div className="flex justify-between items-center   ">
            <p className="text-[#000000] text-[40px]  font-semibold">
              Your order
            </p>
          </div>
          <div className="w-full h-[0.1rem] mt-[1rem] bg-gray-200" />
        </div>

        <div>
          <div className=" h-[27vh] overflow-scroll">
          {arr2?.cart?.items?.map((each) => (
              <Summarytopinfo
                // Make sure each item has a unique key
                image={each.thumbnail}
                quantity={each.quantity}
                total={isLoading ? 'Loading...' :each.total}
              />
            ))}
          </div>

          <div className="py-[1rem]">
            <div className="bg-[#FFFFFF1A] px-[1rem] rounded-full border border-gray-200 flex overflow-hidden w-full py-2 justify-between">
              <input
                type="input "
                placeholder="Coupon code"
                className=" bg-transparent outline-none text-[#000000]"
              />

              <button className="bg-[#000000] text-[#ffffff] rounded-full px-[1rem] min-w-max ml-[-3rem] py-2">
                Apply coupon
              </button>
            </div>
            <div className="flex justify-between pt-[3rem]">
              <div className="">
                <p className="text-[#000000] text-[18px] ">Subtotal:</p>
                <p className="text-[#000000] text-[18px] pt-4">Tax:</p>
              </div>

              <div>
                <p className="text-[#000000] text-[18px]">$398.00</p>
                <p className="text-[#000000] text-[18px] pt-4">$0.00</p>
              </div>
            </div>
            <div className="w-full h-[0.1rem] mt-[1rem] bg-gray-200" />
          </div>

          <div>
            <div className="flex justify-between">
              <p className="text-[#000000] text-[18px]">Total</p>
              <p className="text-[#000000] font-medium text-[1.4rem]">
                {data}
              </p>
            </div>
            <button className="bg-black text-white p-6" onClick={customerLogout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summarytop;
