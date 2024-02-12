import React from "react";

function Shoppingcartright() {
  return (
    <div>
      <div>
        <h2 className="text-[28px] font-medium ">Choose a version</h2>
        <p className="text-[#888888] text-[20px]">Whichever lamp you choose, you’ll be finding flow and resting well in no time.</p>
      </div>

      <div className="py-[1rem] mt-4 flex justify-between px-[1rem] border border-gray-300  rounded-md  shadow-md">
          <div>
            <h2 className="text-[20px]">SKYVIEW 2 PRO</h2>
            <p className="text-[#888888] text-[12px]">20.7in (52cm)</p>
          </div>
          <p>$449</p>
      </div>
      <button className="bg-[#000000] text-white w-full rounded-full p-[1rem] mt-4">Add to cart</button>
    </div>
  );
}

export default Shoppingcartright;