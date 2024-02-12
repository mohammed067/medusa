import React from 'react';
import { useCart } from 'medusa-react';

const Updatecart = () => {
  const { updateCart, cart } = useCart();

  const changeRegionId = (newRegionId) => {
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
              Name: "mohammed",
              city: "hyderabad",
            },
          ];

          // Log the updated data
          console.log("Updated Cart", { ...data, cart: { ...data.cart, items: updatedItems } });

          // Access the updated cart with the new items
          console.log("Updated Cartdfadfad", data.cart);
        },
      }
    );
  };

  return (
    <div>
      <button
        className='bg-black text-white'
        onClick={() => changeRegionId(cart.region_id)}
      >
        Update Cart
      </button>
    </div>
  );
};

export default Updatecart;
