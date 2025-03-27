import React,{useRef} from 'react'
import {Child} from '../components'

function Parent() {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
    console.log(inputRef.current.style.color)
    inputRef.current.style.color = 'red';
    inputRef.current.value = "Hello World"
  }
  return (
    <>
    <h1 className='text-center bg-gray-300 p-3 text-xl'>Practicing ForwardRef in React</h1>
    <div className='text-center'>
    <Child ref={inputRef}>
      Click Below Button to focus on input field
    </Child>
    <br />
    <button className='border-2 border-black px-2 py-1 rounded-md bg-blue-300' 
    onClick={handleClick}
    >Focus the input field</button>
    </div>

    </>
  )
}

export default Parent