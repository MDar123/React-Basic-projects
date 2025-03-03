import React from 'react'
import {User,SunMoon} from 'lucide-react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav style={{display:'flex',justifyContent:'space-around',padding:'10px',backgroundColor:'burlywood'}}>
      <h1>ThemeSwitcher</h1>
      <ul style={{display:'flex',gap:'15px'}}>
      <Link to='/about'>About</Link>
      <Link to='/services'>Services</Link>
      </ul>
      <ul style={{display:'flex',gap:'15px'}}>
        <li>
        <User />
        </li>
        <li>
        <SunMoon color="#000000" />
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar