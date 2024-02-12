// Homeproducts.jsx

import React, { useState ,useEffect} from 'react';
import Homeproductsinfo from './Homeproductsinfo';
import orangelamp from '../Images/orangelamp.webp';
import { useProducts } from 'medusa-react';
// import { useNavigate } from 'react-router-dom';
// import Dummy from './Dummy';
// import Shoppingpage from './Shoppingpage';

function Homeproducts() {
  // const navigate = useNavigate();
  const { products, isLoading } = useProducts();
  const topProduct = products ;
  console.log(topProduct)
  console.log("checking variantsss",topProduct ?topProduct[0] :null )

  const [selectedProduct, setSelectedProduct] = useState(null);

  // const handleLearnMoreClick = (productData) => {
  //   console.log('Product Data before navigation:', productData);
  //   setSelectedProduct(productData);
  //   // Log the updated value of selectedProduct, not the set function
  //   console.log('Selected Product after set:', selectedProduct);
  //   navigate('/Shoppingpage');
  // };

  const handleLearnMoreClick = (productData) => {
    console.log('Product Data before navigation:', productData);
    setSelectedProduct(productData);
    console.log('Selected Product after set:', selectedProduct);
    // navigate('/Shoppingpage');
  
  };
  



  


  return (
    <div className='p-[1rem]'>
      <h2 className="text-[32px] font-medium leading-[2rem] pt-[4rem] pb-[3rem] md:text-[50px] md:leading-[3rem] xl:text-[60px] xl:leading-[4rem] ">Meet SKYVIEW™ — total wellness for sleep,<br/>mood, performance.</h2>
      <div className='grid md:grid-cols-2 gap-2'>
        {/* <Homeproductsinfo
          classbg="bg-[#EFE9E5] rounded-md pt-[2rem] "
          productname="SKYVIEW 2 PRO"
          cost="$949"
          height="Height:20.7in (52cm)"
          productimage={orangelamp}
          btn="Learn More"
        /> */}

        {topProduct?.slice(0,7).map((topProduct)=>(
              <Homeproductsinfo
              key={topProduct.id}
              classbg="bg-[#F4F4F4] rounded-md pt-[2rem] "
              productname={topProduct.title}
              cost={topProduct?.variants[0]?.prices[0]?.amount}
              height={`Height: ${topProduct.height}`}
              productimage={topProduct.images[0].url}
              id={topProduct.id}
              onLearnMoreClick={handleLearnMoreClick}  // Ensure this prop is correct
              btn="Learn More"
            />
        ))
        
      
      
        }
      </div>
        
     
       
      {/* <button className="w-[100vw] h-[20vh] bg-black text-white" onClick={handleLearnMoreClick}>
        check
      </button> */}
    </div>
  );
}

export default Homeproducts;
