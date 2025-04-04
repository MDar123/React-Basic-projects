import { Form } from "./components";
import { useEffect, useRef, useState } from "react";
import { getResponse } from "./utils/ApiService";

function App() {

  const textRef = useRef(null);
  const [response,setResponse] = useState("")
  const [role,setRole] = useState("")
  const handleResponse =async () => {
    const response =await getResponse({message:'Tell me current president of Pakistan ?'})
    setResponse(response?.content)
    setRole(response?.role?response?.role : 'User')
  }

  useEffect( () => {
    handleResponse()
  } ,[])

  return (
    <>
      <div>
        <h1 className="text-2xl text-center">This is a Demo Project </h1>
        <Form />
        <Form ref={textRef} />
      </div>
      <button
      onClick={handleResponse}
      >
        Get Response
      </button>
      <p>
       {
        response?response:'Loading...'
       }
      </p>
    </>
  );
}

export default App;
