import React from 'react'
import authservice from './appwrite/auth.js';
import { useEffect } from 'react';
function App() {
  // const dispatch = useDispatch()
  useEffect( () => {
  const response = authservice.login({email:"mujtabadar98@gmail.com",password:"0123abc4567dar$"})
  console.log(response);
  
  }
   ,[])
  return (
    <>
    <h1>Header</h1>
    <h1>Footer</h1>
    </>
  )
}

export default App