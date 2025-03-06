import React from 'react'
import {User} from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from './ui/Dropdown'
// import { useState } from 'react'
function Navbar() {
  return (
    <>
    <nav className="flex justify-around p-[20px] h-10 items-center pt-6 bg-gray-200  dark:bg-black">
  <Link to='/'>
  <h1 className='text-3xl font-bold font-serif dark:text-white'>ThemeSwitcher</h1>
  </Link> 
  <ul className="flex gap-[15px] dark:text-white">
    <NavLink  className= { ({isActive}) => `text-md lg:text-xl ${
      isActive ? `text-cyan-500 font-bold  shadow-cyan-500` : ``
    }` }  to="/about">About</NavLink >
    <NavLink  className= { ({isActive}) => `text-md lg:text-xl ${
      isActive ? `text-cyan-500 font-bold  shadow-cyan-500` : ``
    }` } to="/services">Services</NavLink >
  </ul>
  <ul className="flex gap-[15px]">
    <button className='cursor-pointer hover:bg-gray-400 border-none dark:text-white'>
      <User />
    </button>
      <Dropdown />
  </ul>
</nav>

    </>
  )
}

export default Navbar