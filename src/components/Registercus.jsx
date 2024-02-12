import React, { useState } from "react";
import { useCreateCustomer } from "medusa-react";
import Medusa from "@medusajs/medusa-js";
import { useNavigate } from "react-router-dom";

function Registercus() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginaccountemail, setLoginaccountemail] = useState("");
  const [loginaccountpass, setLoginaccountpass] = useState("");
  const createCustomer = useCreateCustomer();

  const navigate = useNavigate();

  const medusa = new Medusa({
    baseUrl: "http://localhost:9000/",
    maxRetries: 3,
  });

  const handleCreate = () => {
    console.log("Customer Details:", {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    });

    createCustomer.mutate({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    });
    // try {
    //   if (firstName && lastName && email && password) {
    //     if (medusa.auth.exists(email)) {
    //       alert("Email exists try using another email")
    //     } else {
    //       createCustomer.mutate({
    //         first_name: firstName,
    //         last_name: lastName,
    //         email,
    //         password,
    //       });
    //     }
        
    //   }
    //   else{
    //     alert("please enter all the details")
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  //    const handleLogin = async (e) => {
  //     e.preventDefault();

  //     console.log('Login Details:', {
  //       email: loginaccountemail,
  //       password: loginaccountpass,
  //     });

  //     try {
  //       const response = await medusa.auth.authenticate({
  //         email: loginaccountemail,
  //         password: loginaccountpass,
  //       });

  //       // Assuming the response contains the customer details
  //       console.log('Login Success:', response.customer);
  //     } catch (error) {
  //       console.error('Authentication Error:', error);
  //     }

  //     setLoginaccountemail('');
  //     setLoginaccountpass('');
  //   };

  //   const handleLogin = (e) => {
  //     e.preventDefault();

  //     console.log("Login Details:", {
  //       email: loginaccountemail,
  //       password: loginaccountpass,
  //     });

  //     medusa.auth.authenticate({
  //         loginaccountemail,
  //         loginaccountpass,
  //       })
  //       .then(({ customer }) => {
  //         console.log(customer.id)
  //       })

  //     // medusa.auth.exists(loginaccountemail && loginaccountpass)
  //     //   .then(response => {
  //     //     console.log("Success:",
  //     //        response
  //     //     );
  //     //   })
  //     //   .catch(error => {
  //     //     console.error('Error:', error);
  //     //   });

  //     setLoginaccountemail('');
  //     setLoginaccountpass('');
  //   };

  return (
    <>
      {/* Registration Form */}
      <form className="w-full max-w-md mx-auto mt-8 p-8 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-md">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="firstname"
        >
          First Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="lastname"
        >
          Last Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleCreate}
        >
          Sign up
        </button>
      </form>

      {/* Login Form */}
      {/* <div>
        <form className='w-full max-w-md mx-auto mt-8 p-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-md' onSubmit={handleLogin}>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="login-email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type='email'
            id='login-email'
            value={loginaccountemail}
            onChange={(e) => setLoginaccountemail(e.target.value)}
          />

          <label className="block text-white text-sm font-bold mb-2 mt-4" htmlFor="login-password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type='password'
            id='login-password'
            value={loginaccountpass}
            onChange={(e) => setLoginaccountpass(e.target.value)}
          />

          <button
            className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
            type="submit"
          >
            Login
          </button>
        </form>
      </div> */}
    </>
  );
}

export default Registercus;
