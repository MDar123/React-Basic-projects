import { useState ,useMemo, useCallback} from 'react'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
    <button onClick={() => setCount(count + 1)}>
      Counter
    </button>
    <p>Count: {count}</p>
    <ChildComponent value={count} />
    </>
  )
}

export default App


function ChildComponent({value}){

  const fn = useCallback( () => {
    console.log("I am Memoized Function")
  } , [] )

  return (

    <div>
      {
        console.log("I am Rendered")
        
      }
      <h1>Child Component value of count is : {value}</h1>
      <p> 
        {fn()}
      </p>
    </div>
  )
}