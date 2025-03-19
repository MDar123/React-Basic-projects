
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import Todo from './components/Todo';
import Counter from "./components/Counter";
const App = () => { 
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;

function Home(){
  return(
    <>
   <div className="mt-6 flex justify-center gap-4">
        <Link to='/counter'>
          <button className="p-3 rounded-lg shadow-md bg-gray-500 text-white hover:bg-gray-600 transition">
            See Counter App
          </button>
        </Link>
        <Link to='/todo'>
          <button className="p-3 rounded-lg shadow-md bg-gray-500 text-white hover:bg-gray-600 transition">
            See Todo App
          </button>
        </Link>
      </div>
    </>
  )
}