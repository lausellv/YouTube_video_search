import React from "react";
import VideoItem from "./VideoItem";
import { List } from "semantic-ui-react";

//destructuring props passed on to the functional component from App the parent compnent
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video} />;
  });
  return (
    <List divided relaxed>
      {renderedList}
    </List>
  );
};

export default VideoList;
