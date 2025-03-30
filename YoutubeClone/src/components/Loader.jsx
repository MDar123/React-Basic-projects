import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
    <Box sx={{ width:'100wh' , display: 'flex',justifyContent:'center' }}>
      <CircularProgress color='success' />
    </Box>
  );
}
