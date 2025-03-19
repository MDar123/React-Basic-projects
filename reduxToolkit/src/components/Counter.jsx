import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from '../features/counterSlice';
import { useState } from 'react';

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Practicing React Redux Toolkit Using Counter App</h1>
      <h3 className="text-lg font-semibold text-gray-700">Count Value is: {counter}</h3>
      
      <div className="flex gap-4 mt-4">
        <button 
          onClick={() => dispatch(increment())} 
          className="px-4 py-2 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 transition"
        >
          Increment
        </button>
        
        <button 
          onClick={() => dispatch(decrement())} 
          className="px-4 py-2 bg-red-500 text-white font-medium rounded-md shadow-md hover:bg-red-600 transition"
        >
          Decrement
        </button>
      </div>

      <div className="mt-6 flex gap-4 items-center">
        <input 
          type="number" 
          placeholder="Enter Amount" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          className="border border-gray-400 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <button 
          onClick={() => dispatch(incrementByAmount(Number(amount)))} 
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 transition"
        >
          Increment By Amount
        </button>
      </div>

      <button 
        onClick={() => dispatch(reset())} 
        className="mt-6 px-4 py-2 bg-gray-500 text-white font-medium rounded-md shadow-md hover:bg-gray-600 transition"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
