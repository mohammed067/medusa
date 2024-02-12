import React from 'react'

const AdminLogin = () => {
  return (
    <div>AdminLogin</div>
  )
}

export default AdminLogin

















// import React, { useState } from "react";
// import { useAdminLogin } from "medusa-react";

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const adminLogin = useAdminLogin();

//   const handleLogin = async () => {
//     try {
//       // Assuming useAdminLogin returns a function for login
//       const response = await adminLogin(email, password);

//       // Now, the Medusa client is authenticated, and you can make authenticated requests.
//       console.log("Authenticated successfully", response);
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   };

//   return (
//     <div>
//       <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default AdminLogin;
