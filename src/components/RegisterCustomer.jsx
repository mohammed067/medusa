import React from 'react'

import { useCreateCustomer } from "medusa-react"

const RegisterCustomer = () => {
  const createCustomer = useCreateCustomer()

  const handleCreate = () => {
   
    createCustomer.mutate({
      first_name,
      last_name,
      email,
      password,
    })
  }

 
  
  return (
    <form className='w-full h-[50vh] bg-red-300'>
      <label  for="firstname"/>
      <input type='text' id='firstname'/>
    </form>
  )
}

export default RegisterCustomer