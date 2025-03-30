import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';


const ChannelCard = ({
  video:{ statistics , snippet:{
  channelId,
  channelTitle,
  thumbnails
  }}
}) => {
  return (
    <>
    <Card 
      sx={{ 
        maxWidth: 345, 
        boxShadow: 3, 
        borderRadius: 2
      }}
    >
      <Link to={`/channel/${channelId}`} style={{ textDecoration: 'none' }}>
        <CardMedia
          sx={{ height: 180 }}
          image={thumbnails?.high?.url}
          alt={channelTitle}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
          <Typography variant="subtitle2" color="text.secondary">
            {channelTitle}
          </Typography>
          <CheckCircleIcon sx={{ fontSize: 16, color: 'gray' }} />
        </Box>
        {statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Card>
    </>
  )
}

export default ChannelCard