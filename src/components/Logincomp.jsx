import React, { useState } from "react";
import Medusa from "@medusajs/medusa-js";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Logincomp() {
  const [loginaccountemail, setLoginaccountemail] = useState("");
  const [loginaccountpass, setLoginaccountpass] = useState("");
  const medusa = new Medusa({
    baseUrl: "http://localhost:9000/",
    maxRetries: 3,
  });
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login Details:", {
      email: loginaccountemail,
      password: loginaccountpass,
    });

    try {
      const response = await medusa.auth.authenticate({
        email: loginaccountemail,
        password: loginaccountpass,
      });

      // Assuming the response contains the customer details
      console.log("Login Success:", response.customer);
      localStorage.setItem("user", JSON.stringify(response.customer));
      navigate("/Checkout");
    } catch (error) {
      console.error("Authentication Error:", error);
    }
        
    if (loginaccountemail==""){
      alert("Please enter your email")
    }
    if(loginaccountpass==""){
      alert("Please enter your password")
    }
   
    setLoginaccountemail("");
    setLoginaccountpass("");
  };

  return (
    <div>
      <form
        className="w-full max-w-md mx-auto mt-8 p-8 bg-black rounded-md"
        onSubmit={handleLogin}
      >
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="login-email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          id="login-email"
          value={loginaccountemail}
          onChange={(e) => setLoginaccountemail(e.target.value)}
        />

        <label
          className="block text-white text-sm font-bold mb-2 mt-4"
          htmlFor="login-password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          id="login-password"
          value={loginaccountpass}
          onChange={(e) => setLoginaccountpass(e.target.value)}
        />

        <div className="flex justify-between">
          <button
            className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
            type="submit"
          >
            Login
          </button>

          <Link to={`/Signup`}>
            <button
              className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
              type="submit"
            >
              Signup
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Logincomp;
