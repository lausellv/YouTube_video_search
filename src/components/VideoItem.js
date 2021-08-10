import React from "react";
import { List, Image } from "semantic-ui-react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <List.Item className="video-item" onClick={() => onVideoSelect(video)}>
      <Image src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
      <List.Content>
        <List.Header>{video.snippet.title}</List.Header>
      </List.Content>
    </List.Item>
  );
};

export default VideoItem;
