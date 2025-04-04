import React, { useState,forwardRef } from 'react'
import {useForm} from 'react-hook-form'

const Form = ({value,readonly},ref) => {


  const {register,handleSubmit} = useForm();
  const [text,setText] = useState("")


  return (
    <>
    <form onSubmit={handleSubmit( (data)=>{
        setText(data.text)
    } )}>
      <textarea name="text" id="text"
       placeholder='Enter Text to Summarize' 
       {...register('text')} 
       className='border-2 border-black rounded-md w-1/5 h-20'
       ref={ref}
       >
      </textarea>
      {/* 
      Use Forward Ref to send types text to parent component
      */}
    </form>
    </>
  )
}

export default forwardRef(Form);