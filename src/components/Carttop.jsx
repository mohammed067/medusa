import React, { useEffect, useState } from "react";
import loader from "../Images/loader.gif";
import Cartbottom from "./Cartbottom";
import Summarypage from "./Summarypage";
import { useCreateLineItem } from "medusa-react"
import { useUpdateLineItem } from "medusa-react"
import { useDeleteLineItem } from "medusa-react"

function Carttop() {
  const [incrementer, setIncrementer] = useState(0);
  const [cart1, setCart1] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [overallTotalPrice, setOverallTotalPrice] = useState(0);
  const cartid_local=localStorage.getItem("cart_id")
  const [arr2, setarr2] = useState()
  const [ toggle, setToggle ] = useState(false)
  
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
      console.log("toggle")
      // console.log("cartitems",cartitems)
      
      
  },[cartid_local,toggle])

  // console.log("overalltotal",arr2?.cart?.total)
  // console.log("totalllsdfadf",overallTotalPrice)


  // const createLineItem = useCreateLineItem(cartid_local)

  const updateLineItem = useUpdateLineItem(cartid_local)

  const handleUpdateItem = (lineId,quantity) => {
    setToggle(!toggle)
    updateLineItem.mutate({
      lineId,
      quantity
    })
  }

  const deleteLineItem = useDeleteLineItem(cartid_local)

  const handleDeleteItem = (lineId) => {
    setToggle(!toggle)
    deleteLineItem.mutate({
      lineId,
    })
  }


  // const handleAddItem = (variant_id,quantity) => {
  //   console.log("check var",variant_id,quantity)
  //   createLineItem.mutate({
  //     variant_id,
  //     quantity,
  //   })
  // }

  //  console.log("checking arr2",cartid_local)

  // useEffect(() => {
  //   if (!arr2 || arr2.length <= 0) {
  //     const existingCart = localStorage.getItem("cart");
  //     const temp = JSON.parse(existingCart) || []; // Set temp to an empty array if null or not an array

  //     // Check if temp is an array before setting cart1
  //     if (Array.isArray(temp)) {
  //       setCart1(temp);
  //     } else {
  //       console.error("Invalid cart format in localStorage");
  //       // Handle the error as needed, for example, set cart1 to an empty array
  //       setCart1([]);
  //     }
  //   } else {
  //     setCart1(arr2);
  //   }
  // }, [arr2]);

  useEffect(() => {
    setIsLoading(true);

    // Calculate total quantity and total price for each product
    if (cart1.length >= 1) {
      // const productTotals = cart1.map((each) => {
      //   const totalQuantity = each.quantity;
      //   const totalPrice = each.price * each.quantity;
      //   each.total = totalPrice;
      //   return { totalQuantity, totalPrice };
      // });

      // const overallTotalPrice = productTotals.reduce(
      //   (total, product) => total + product.totalPrice,
      //   0
      // );

      // setOverallTotalPrice(arr2.total);
      // console.log("Overall Total Price:", overallTotalPrice);
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

  const increment = async (id) => {
    // Assuming setIncrementer is a state updater function from a React useState hook
    setIncrementer((prev) => prev + 1);
    const newQuantity = incrementer + 1;

    // Assuming updateQuantity is an asynchronous function
    try {
        await updateQuantity(id, newQuantity);
        // If updateQuantity is successful, you can perform any additional tasks here
    } catch (error) {
        // Handle error if the update fails
        console.error("Failed to update quantity:", error);
    }
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



  // useEffect(() => {
  //   const totalValues = cart1?.cart?.items?.map((each) => each.variant_id);
  //   console.log("cart1 checking whether working or not", totalValues);
  // }, [cart1]);
  
  return (
    <div className="mt-[2rem]">
      {arr2?.cart?.items?.map((product) => (
        <div key={product.id} className="flex gap-3">
          <div>
            <img
              className="w-[6rem] h-[6rem]"
              src={product?.thumbnail}
              alt={product?.name}
            />
          </div>
          <div className="flex justify-between w-full gap-2 pr-4">
            <div>
              <h2 className="font-medium">{product?.name}</h2>
              <p className="text-[#888888]">11.5in(29cm)</p>
              <div className="flex justify-between rounded-full px-[0.4rem] border border-[#000000]">
              <button onClick={() => handleUpdateItem(product.id,product.quantity - 1)}>-</button>
                <p>{product?.quantity}</p>
                <button onClick={() => handleUpdateItem(product.id,product.quantity + 1)}>+</button>
              </div>
            </div>
            <div>
              <div className={`${isLoading ? "visible" : "hidden"}`}>
                <img src={loader} alt="Loading" />
              </div>

              <div className={`${!isLoading ? "visible" : "hidden"}`}>
                <p className="font-medium">{product?.total}</p>
              </div>

              <p onClick={() => handleDeleteItem(product.id)}>Remove</p>
            </div>
          </div>
        </div>
      ))}

      <Cartbottom totalll={arr2?.cart?.total} />
    </div>
   
  );
}

export default Carttop;
