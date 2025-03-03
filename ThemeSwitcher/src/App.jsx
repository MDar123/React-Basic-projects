import React from 'react'
import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom'
import { About, Home, Navbar, Services } from './components'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='' element={
        <>
            <div style={{width:'100wh',height:'90vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Layout />
            </div>
        </>

      }>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      </Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

function Layout(){
  return (
    <>
    <Outlet />
    </>
  )
}