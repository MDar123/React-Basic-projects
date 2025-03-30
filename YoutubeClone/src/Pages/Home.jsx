import React, { useState,useEffect,useMemo } from 'react'
import {Navbar,SideBar,VideoFeed, Loader} from '../components'
import Box from '@mui/material/Box';
import { fetchVideos } from '../utils/ApiService';



const Home = () => {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos,setVideos] = useState([])
  const [loading,setLoading] = useState(false)

  const memoizeCode = useMemo( () => {
    return <VideoFeed videos={videos} />
  } ,[videos] )


  const fetchData = async () => {
    setLoading(true);
   const response = await fetchVideos(`search?part=snippet&q=${selectedCategory}`);
   setVideos(response.items);
   setLoading(false);
  }

  useEffect( () => {
    fetchData();
  },[selectedCategory])


  return (
    <>
        <Box>
        <Navbar />
        </Box>
        <Box sx={{display:'flex'}}>
        <SideBar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />
        {loading ? <Loader /> : memoizeCode}
        </Box>
        
    </>
  )
}

export default Home