import React from 'react'
import { useAdminLogin } from "medusa-react"

function Login() {
    const adminLogin = useAdminLogin()

    const handleLogin = () => {
        adminLogin.mutate({
          email: "mohammedabdulrahaman@example.com", // Provide a valid email address
          password: "123456",
        })

        // Check if adminLogin.variables is defined before accessing its properties
        if (adminLogin.variables && adminLogin.variables.length > 0) {
          console.log("checking email", adminLogin.variables[0].email)
        }

        console.log(adminLogin)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
