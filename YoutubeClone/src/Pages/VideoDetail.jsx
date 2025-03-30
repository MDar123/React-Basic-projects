import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box,Stack,Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { fetchVideos } from "../utils/ApiService";
import { Loader ,VideoFeed} from "../components";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState([]);
  const [videos,setVideos] = useState(null)
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetchVideos(
      `videos?part=snippet,statistics&id=${id}`
    );
    setVideo(response.items[0]);
    const recommendedVideos = await fetchVideos(
      `search?part=snippet&relatedToVideoId=${id}&type=video`
    );
    setVideos(recommendedVideos.items);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
    {
      console.log(video)
    }
        {
          loading?<Loader/> :
        
       <Stack direction={{ xs: "column", md: "row" }}>
       <Box flex={1}>
        <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {video?.snippet?.title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ color: "#fff" }}
            py={1}
            px={2}
          >
            <Link to={`/channel/${video?.snippet?.channelId}`}>
              <Typography variant={{ sm: "subtitle1", md: "h6" }} color="#fff">
                {video?.snippet?.channelTitle}
                <CheckCircleIcon
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(video?.statistics?.viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(video?.statistics?.likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        <VideoFeed videos={videos} direction="column" />
      </Box>
       </Stack>
      }
    </>
  );
};

export default VideoDetail;
