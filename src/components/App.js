import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import { Container, Grid } from "semantic-ui-react";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("NBC Nightly News");
  }, []);

  const onTermSubmit = async term => {
    const response = await youtube.get("/search", { params: { q: term } });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <Container>
      <SearchBar onFormSubmit={onTermSubmit} />
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={11}>
            <VideoDetail video={selectedVideo} />
          </Grid.Column>
          <Grid.Column width={5}>
            <VideoList videos={videos} onVideoSelect={video =>setSelectedVideo(video)} />  
            {/* <VideoList videos={videos} onVideoSelect={selectedVideo} /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default App;
