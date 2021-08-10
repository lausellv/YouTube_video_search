import axios from "axios";

const KEY = "AIzaSyCuVmtqVM71xQVHibcUX5iqV4s4u9fFA1A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", type: "video", maxResults: 5, key: KEY }
});
