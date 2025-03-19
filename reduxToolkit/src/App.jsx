
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
    <div className="h-screen w-full bg-amber-200">
    <Link to='/counter'>
    <button className="p-3 rounded-lg shadow shadow-amber-200 bg-gray-500 text-white">
      See Counter App</button>
    </Link>
    <Link to='/todo' >
    <button className="p-3 rounded-lg shadow shadow-amber-200 bg-gray-500 text-white">
      See Todo App</button>
    </Link>
    </div>
    </>
  )
}