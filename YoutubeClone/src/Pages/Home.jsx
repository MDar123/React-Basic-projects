import React, { useState,useEffect } from 'react'
import {Navbar,SideBar,HomeFeed} from '../components'
import Box from '@mui/material/Box';
import { fetchVideos } from '../utils/ApiService';
const Home = () => {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos,setVideos] = useState([])
  useEffect( () => {
    fetchVideos(`search?part=snippet&q=${selectedCategory}`).then( response => {
      setVideos(response.items)
    } )
  },[selectedCategory])
  return (
    <>
        <Box>
        <Navbar />
        </Box>
        <Box sx={{display:'flex'}}>
        <SideBar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />
        <HomeFeed selectedCategory={selectedCategory} videos={videos} />
        </Box>
    </>
  )
}

export default Home