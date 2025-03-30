import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {VideoCard,ChannelCard} from './';

const VideoFeed = ({ videos ,direction='row'}) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Grid direction={direction} container spacing={2} justifyContent="center">
        {videos.map((video) => (
          <Grid key={video.etag}>
            { video?.id.videoId && <VideoCard video={video} />}
            { video?.id.channelId && <ChannelCard video={video} />}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VideoFeed;
