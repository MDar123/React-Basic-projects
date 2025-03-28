import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomeFeed = ({selectedCategory,videos}) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Typography>
      {selectedCategory} Videos  
    </Typography>  
      <Stack>
        {
          console.log(videos)
        }
      </Stack>
  </Box>
  )
}

export default HomeFeed