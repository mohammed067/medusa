// Dummy.jsx

import React, { useEffect } from 'react';

function Dummy({ product1 }) {
    // Make sure to handle the selected product data within the Dummy component
  
    useEffect(() => {
        if (product1) {
          console.log('Selected Product in Dummy:', product1.productname);
        }
      }, [product1]);
  
    return (
      <div>
        {/* Render Dummy component content */}
        <h3>{product1.productname}</h3>
        <p>{product1.cost}</p>
        <img className='w-[6rem] h-[6rem]' src={product1.productimage}/>
        {/* Other content using the selected product data */}
      </div>
    );
  }
  
  export default Dummy;
  
