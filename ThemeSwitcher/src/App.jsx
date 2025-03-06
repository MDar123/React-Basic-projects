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
            <div className='w-screen h-[90vh] flex justify-center items-center bg-gray-200 dark:bg-black'>
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