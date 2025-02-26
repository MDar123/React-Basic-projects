import { useState ,useEffect,useRef} from "react"
const App = () => {
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  function passwordGenerator(){
    let pass = ''
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let characters = '!@#$%^&*()_+';
    if(numberAllowed) letters += numbers
    if(charAllowed) letters += characters
    for (let index = 1; index <= length; index++) {
      const num = Math.floor(Math.random() * letters.length + 1)
      pass += letters.charAt(num)
      setPassword(pass)
    }
  }
  function copyPassword(){
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }
  useEffect( () => {
    passwordGenerator()
  } ,[numberAllowed,charAllowed,length] )


  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Password Generator</h1>
        <div className="bg-gray-200 p-4 rounded-md mb-6">
          <div className="flex mb-4">
            <input
              type="text"
              value={password}
              ref={passwordRef}
              readOnly
              className="w-full px-3 py-2 text-gray-700 border rounded-l-md focus:outline-none"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer"
              onClick={copyPassword}
            >
              Copy
            </button>
          </div>
          <div className="flex items-center justify-between gap-4">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
            />
            <label className="text-sm font-medium text-gray-700">Length({length})</label>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="numbers"
                checked={numberAllowed}
                onChange={() => setnumberAllowed((prev) => !prev)}
                className="mr-2"
              />
              <label htmlFor="numbers" className="text-sm font-medium text-gray-700">
                Numbers
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="characters"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="mr-2"
              />
              <label htmlFor="characters" className="text-sm font-medium text-gray-700">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App