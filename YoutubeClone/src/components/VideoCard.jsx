import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

export default function VideoCard({ video: { snippet, id: { videoId } } }) {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        boxShadow: 3, 
        borderRadius: 2
      }}
    >
      <Link to={`/video/${videoId}`} style={{ textDecoration: 'none' }}>
        <CardMedia
          sx={{ height: 180 }}
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
        <Typography 
          variant="subtitle1" 
          fontWeight="bold" 
          color="text.primary"
          sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        >
          {snippet?.title?.slice(0, 60)}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
          <Typography variant="subtitle2" color="text.secondary">
            {snippet?.channelTitle}
          </Typography>
          <CheckCircleIcon sx={{ fontSize: 16, color: 'gray' }} />
        </Box>
      </CardContent>
    </Card>
  );
}
