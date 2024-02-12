import React, { useEffect, useState } from "react";
import loader from "../Images/loader.gif";
import Cartbottom from "./Cartbottom";
import Summarypage from "./Summarypage";

function Carttop({ arr2 }) {
  const [incrementer, setIncrementer] = useState(0);
  const [cart1, setCart1] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [overallTotalPrice, setOverallTotalPrice] = useState(0);

  useEffect(() => {
    if (!arr2 || arr2.length <= 0) {
      const existingCart = localStorage.getItem("cart");
      const temp = JSON.parse(existingCart) || []; // Set temp to an empty array if null or not an array

      // Check if temp is an array before setting cart1
      if (Array.isArray(temp)) {
        setCart1(temp);
      } else {
        console.error("Invalid cart format in localStorage");
        // Handle the error as needed, for example, set cart1 to an empty array
        setCart1([]);
      }
    } else {
      setCart1(arr2);
    }
  }, [arr2]);

  useEffect(() => {
    setIsLoading(true);

    // Calculate total quantity and total price for each product
    if (cart1.length >= 1) {
      const productTotals = cart1.map((each) => {
        const totalQuantity = each.quantity;
        const totalPrice = each.price * each.quantity;
        each.total = totalPrice;
        return { totalQuantity, totalPrice };
      });

      const overallTotalPrice = productTotals.reduce(
        (total, product) => total + product.totalPrice,
        0
      );

      setOverallTotalPrice(overallTotalPrice);
      console.log("Overall Total Price:", overallTotalPrice);
    }

    // Log the results
    // console.log("Product Totals:", productTotals);

    // If you want to calculate the overall total price, you can use reduce
    // const overallTotalPrice = productTotals.reduce(
    //   (total, product) => total + product.totalPrice,
    //   0
    // );

    setIsLoading(false);
  }, [cart1]);

  const increment = (id) => {
    setIncrementer((prev) => prev + 1);
    const newQuantity = incrementer + 1;

    // Update the quantity in local storage and state
    updateQuantity(id, newQuantity);
  };

  const decrement = (id) => {
    setIncrementer((prev) => (prev > 1 ? prev - 1 : 1));
    const newQuantity = incrementer > 1 ? incrementer - 1 : 1;
    updateQuantity(id, newQuantity);
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cart1.map((product) =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    );
    setCart1(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const remove = (id) => {
    const newCart = cart1.filter((each) => each.id !== id);
    setCart1(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className="mt-[2rem]">
      {cart1?.map((product) => (
        <div key={product.id} className="flex gap-3">
          <div>
            <img
              className="w-[6rem] h-[6rem]"
              src={product?.image}
              alt={product?.name}
            />
          </div>
          <div className="flex justify-between w-full gap-2 pr-4">
            <div>
              <h2 className="font-medium">{product?.name}</h2>
              <p className="text-[#888888]">11.5in(29cm)</p>
              <div className="flex justify-between rounded-full px-[0.4rem] border border-[#000000]">
                <button onClick={() => decrement(product.id)}>-</button>
                <p>{product.quantity}</p>
                <button onClick={() => increment(product.id)}>+</button>
              </div>
            </div>
            <div>
              <div className={`${isLoading ? "visible" : "hidden"}`}>
                <img src={loader} alt="Loading" />
              </div>

              <div className={`${!isLoading ? "visible" : "hidden"}`}>
                <p className="font-medium">{product?.total}</p>
              </div>

              <p onClick={() => remove(product.id)}>Remove</p>
            </div>
          </div>
        </div>
      ))}

      <Cartbottom totalll={overallTotalPrice} />
    </div>
  );
}

export default Carttop;
