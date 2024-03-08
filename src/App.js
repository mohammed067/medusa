// // // import { MedusaProvider, CartProvider } from "medusa-react";

// // // import { QueryClient } from "@tanstack/react-query";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import React from "react";
// // import Store from "./components/Store";
// // // import Navbar from "./components/Navbar";
// // // import Videosection from "./components/Videosection";
// // // import Home from "./components/Home";
// // // import Animatedtext1 from "./components/Animatedtext1";
// // // import Shoppingpage from "./components/Shoppingpage";
// // // import Dummy from "./components/Dummy";
// // // import Shoppingnew from "./components/Shoppingnew";
// // // import Summarypage from "./components/Summarypage";
// // // import AdminLogin from "./components/AdminLogin";
// // // import { LogIn } from "lucide-react";

// // // const queryClient = new QueryClient();

// // function App() {
// //   return (
// //     <div>

// //     </div>

// // //     <MedusaProvider
// // //     queryClientProviderProps={{ client: queryClient }}
// // //     baseUrl="http://localhost:9000"
// // //   >

// // //     <Router>

// // //       <div className="App overflow-x-hidden">
// // //         {/* <Store/> */}
// // //         <Navbar />

// // //         {/* <Videosection/> */}
// // //         <Routes>
// // //           {/* <Route path="/" element={<Home />} /> */}
// // //           <Route path="/Shoppingnew/:path" element={<Shoppingnew />} />
// // // {/*
// // //           <Route path="/Checkout/" element={<Summarypage />} /> */}

// // //           {/* Add more Route components as needed */}
// // //         </Routes>
// // //         {/* <Animatedtext1/> */}
// // //       </div>
// // //       {/* <AdminLogin/> */}

// // //     </Router>

// // //     {/* <Summarypage/> */}
// // //   </MedusaProvider>

// //   );
// // }

// // export default App;

// import React from 'react'
// import Navbar from "./components/Navbar";
// import Videosection from "./components/Videosection";
// import Homeproducts from "./components/Homeproducts";
// import { MedusaProvider } from "medusa-react";
// import { QueryClient } from "@tanstack/react-query";
// import Homeproductsinfo from './components/Homeproductsinfo';
// import Store from "./components/Store";
// import Home from "./components/Home";

// function App() {
//   const queryClient = new QueryClient();
//   return (

//     <div>
//       <Homeproducts/>
//     </div>
//   //   <MedusaProvider
//   //   queryClientProviderProps={{ client: queryClient }}
//   //   baseUrl="http://localhost:9000"
//   // >

//   //   <Router>

//   //   <Routes>
//   //         <Route path="/" element={<Home />} />
//   //          {/* <Route path="/Shoppingnew/:path" element={<Shoppingnew />} />

//   //          <Route path="/Checkout/" element={<Summarypage />} /> */}

//   //        {/* Add more Route components as needed */}
//   //        </Routes>
//   //   {/* <div>
//   //     <Navbar/>
//   //     <Videosection/>
//   //     <Homeproducts/>
//   //     <Homeproducts/>

//   //     <Homeproductsinfo/>
//   //   </div> */}
//   //   </Router>
//   //    </MedusaProvider>
//   )
// }

// export default App

import React from "react";
import { MedusaProvider, CartProvider } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Homeproducts from './components/Homeproducts'
import Home from "./components/Home";
import Videosection from "./components/Videosection";
import Summarytop from "./components/Summarytop";
import Summarybottom from "./components/Summarybottom";
import Summarypage from "./components/Summarypage";
// import Shoppingnew from './components/Shoppingnew';
import Shoppingnew from "./components/Shoppingnew";
import Registercus from "./components/Registercus";
import Logincomp from "./components/Logincomp";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Medusacart from "./components/Medusacart";
import Updatecart from "./components/Updatecart";
import Retrivecart from "./components/Retrivecart";
import Completecart from "./components/completecart";

// import Cart from './components/Cart'

function App() {
  const queryClient = new QueryClient();
  return (
    <>
    <div className=" overflow-hidden">
      <MedusaProvider
        queryClientProviderProps={{ client: queryClient }}
        baseUrl="http://localhost:9000"
      >
        <Navbar />
        {/* <CartProvider>
          <Medusacart />
          <Updatecart />
          <Retrivecart/>
        </CartProvider> */}

        <CartProvider>
          {/* <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Shoppingnew/:path" element={<Shoppingnew />} />

              <Route path="/Checkout/" element={<Summarypage />} />
              <Route path="/Login" element={<Logincomp />} />
              <Route path="/Signup/" element={<Registercus />} />
            </Routes>
          </Router> */}

          <Completecart/>
        </CartProvider>
      </MedusaProvider>

      {/* <div>
      <Navbar/>
      <Videosection/>
      <Homeproducts/>s
      <Homeproducts/>
        <Container/>
    <Registercus/>
    <Logincomp/>
      
      <Homeproductsinfo/>
    </div> */}

    </div>
   
      
      
  
    </>
  );
}

export default App;
