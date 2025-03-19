import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement,incrementByAmount,reset} from '../features/counterSlice'
import { useState } from 'react';
const Counter = () => {
    const counter = useSelector( (state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount,setAmount] = useState(0)
  return (
    <>
    <h1>Practicing React Redux Toolkit Using Counter App</h1>
    <h3> Count Value is : {counter} </h3>
    <button onClick={ () =>  dispatch(increment()) }>Increment</button>
    <br /><br />
    <button onClick={ () => dispatch(decrement()) }>Decrement</button>
    <input type="number" placeholder='Enter Amount' value={amount} onChange={ (e) => setAmount(e.target.value) } />
    <button onClick={ () => dispatch(incrementByAmount(amount)) }>Increment By Amount</button>
    <button onClick={ () => dispatch(reset()) }>Reset</button>
    </>
  )
}

export default Counter