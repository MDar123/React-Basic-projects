import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Home,VideoDetail,ChannelDetail, SearchFeed,} from './Pages'
function App() {

  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/video/:id' element={<VideoDetail />} />
    <Route path='/channel/:id' element={<ChannelDetail />} />
    <Route path='/search/:searchTerm' element={<SearchFeed />} />
   </Routes>
    </BrowserRouter>
  )
}

export default App
