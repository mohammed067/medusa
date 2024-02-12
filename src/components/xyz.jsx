// import React, { useState } from 'react';
// import Homeproductsinfo from './Homeproductsinfo';
// import orangelamp from '../Images/orangelamp.webp';
// import { useProducts } from "medusa-react";
// import Abc from './Abc';

// function Homeproducts() {
//   const { products, isLoading } = useProducts();
//   const topProduct = products ? products[0] : null;

//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleLearnMoreClick = (productData) => {
//     setSelectedProduct(productData);
//   };

//   return (
//     <div className='p-[1rem]'>
//       <h2 className="text-[32px] font-medium leading-[2rem] pt-[4rem] pb-[3rem] md:text-[50px] md:leading-[3rem] xl:text-[60px] xl:leading-[4rem] ">Meet SKYVIEW™ — total wellness for sleep,<br/>mood, performance.</h2>
//       <div className='grid md:grid-cols-2 gap-2'>
//         <Homeproductsinfo
//           classbg="bg-[#EFE9E5] rounded-md pt-[2rem] "
//           productname="SKYVIEW 2 PRO"
//           cost="$949"
//           height="Height:20.7in (52cm)"
//           productimage={orangelamp} 
//           btn="Learn More"
//         />

//         {topProduct && (
//           <Homeproductsinfo
//             key={topProduct.id}
//             classbg="bg-[#F4F4F4] rounded-md pt-[2rem] "
//             productname={topProduct.title}
//             cost="$949"
//             height={`Height: ${topProduct.height}`}
           
//             productimage={topProduct.images[0].url}
//             onLearnMoreClick={handleLearnMoreClick}
//             btn="Learn More"
//           />
//         )}
//       </div>
       
//       {selectedProduct && <Abc product={selectedProduct} />}
//     </div>
//   );
// }

// export default Homeproducts;








































// import React from 'react'
// import { useState } from "react";
// import {
//   BsFillArrowRightCircleFill,
//   BsFillArrowLeftCircleFill,
// } from "react-icons/bs";

// function Shoppingpageinfo({slides,cartinfo1}) {
//     const addedimage = cartinfo1 ? cartinfo1.addedimage : "";
//     let [current, setCurrent] = useState(0);

//   let previousSlide = () => {
//     if (current === 0) setCurrent(0 );
//     else setCurrent(current - 1);
//   };

//   let nextSlide = () => {
//     if (current === slides.length - 1) setCurrent(slides.length-1);
//     else setCurrent(current + 1);
//   };
//   return (
//     <div className=" overflow-hidden relative">
//       <div
//         className={`flex transition ease-out duration-40`}
//         style={{
//           transform: `translateX(-${current * 100}%)`,
//         }}
//       >
//         {/* {slides.map((s) => {
//           return <img src={s} />;
//         })} */}
//         <img src={addedimage}/>
//       </div>

//       <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
//         <button onClick={previousSlide}>
//           <BsFillArrowLeftCircleFill />
//         </button>
//         <button onClick={nextSlide}>
//           <BsFillArrowRightCircleFill />
//         </button>
//       </div>

//       {/* <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
//         {slides.map((s, i) => {
//           return (
//             <div
//               onClick={() => {
//                 setCurrent(i);
//               }}
//               key={ i}
//               className={`rounded-full w-5 h-5 cursor-pointer  ${
//                 i == current ? "bg-white" : "bg-gray-500"
//               }`}
//             ></div>
//           );
//         })}
//       </div> */}
//     </div>
//   )
// }

// export default Shoppingpageinfo















// import { MedusaProvider } from "medusa-react";
// import { QueryClient } from "@tanstack/react-query";
// import React from "react";
// import Store from "./components/Store";
// import Navbar from "./components/Navbar";
// import Videosection from "./components/Videosection";
// import Home from "./components/Home";
// import Animatedtext1 from "./components/Animatedtext1";
// import Shoppingpage from "./components/Shoppingpage";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const queryClient = new QueryClient();

// function App() {
//   return (
//     <MedusaProvider
//       queryClientProviderProps={{ client: queryClient }}
//       baseUrl="http://localhost:9000"
//     >
//       <Router>
//         <div className="App overflow-x-hidden">
//           {/* <Store/> */}
//           <Navbar />
//           {/* <Videosection/> */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/Shoppingpage" element={<Shoppingpage />} />
//             {/* Add more Route components as needed */}
//           </Routes>
//           {/* <Animatedtext1/> */}
//         </div>
//       </Router>
//     </MedusaProvider>
//   );
// }

// export default App;




// import React, { useState } from 'react';
// import Homeproductsinfo from './Homeproductsinfo';
// import orangelamp from '../Images/orangelamp.webp';
// import { useProducts } from "medusa-react";
// import Abc from './Abc';
// import Shoppingpage from './Shoppingpage';
// import { useNavigate } from 'react-router-dom';


// function Homeproducts() {
//   // const navigate = useNavigate(); 
//   const { products, isLoading } = useProducts();
//   const topProduct = products ? products[0] : null;

//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleLearnMoreClick = (productData) => {
//     setSelectedProduct(productData);
//     // navigate('/Shoppingpage');
//   };

//   return (
//     <div className='p-[1rem]'>
//       <h2 className="text-[32px] font-medium leading-[2rem] pt-[4rem] pb-[3rem] md:text-[50px] md:leading-[3rem] xl:text-[60px] xl:leading-[4rem] ">Meet SKYVIEW™ — total wellness for sleep,<br/>mood, performance.</h2>
//       <div className='grid md:grid-cols-2 gap-2'>
//         <Homeproductsinfo
//           classbg="bg-[#EFE9E5] rounded-md pt-[2rem] "
//           productname="SKYVIEW 2 PRO"
//           cost="$949"
//           height="Height:20.7in (52cm)"
//           productimage={orangelamp} 
//           btn="Learn More"
//         />

//         {topProduct && (
//           <Homeproductsinfo
//             key={topProduct.id}
//             classbg="bg-[#F4F4F4] rounded-md pt-[2rem] "
//             productname={topProduct.title}
//             cost="$949"
//             height={`Height: ${topProduct.height}`}
           
//             productimage={topProduct.images[0].url}
//             onLearnMoreClick={handleLearnMoreClick}
//             btn="Learn More"
//           />
//         )}
//       </div>
       
//       {selectedProduct && <Shoppingpage product={selectedProduct} />}
      
//     </div>
//   );
// }

// export default Homeproducts;




  

const checkout=()=>{
    
    const handleClick = () => {
      cart.setCart({

      }) 
    }
  }






  const checkout=()=>{
    setcheckot(true)
    if (product.images && product.images[0]) {
      setimgdata(product.images[0].url);
      settitleinfo(product.title)
      cart.setCart(product.title)
      console.log("setcart checking",cart)
     
    }
  }