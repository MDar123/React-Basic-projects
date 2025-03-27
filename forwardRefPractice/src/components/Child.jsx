import React,{forwardRef} from 'react'

function Child({children},ref) {
  return (
    <>
    <h1 className='text-xl text-center text-amber-500'> {children} </h1>
    <input type="text" placeholder='Type Your Name' ref={ref}
    className='border-1 border-black'
    />
    </>
  )
}

export default forwardRef(Child)