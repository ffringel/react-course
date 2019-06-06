import axios from "axios";

const KEY = "AIzaSyDLl9cWX7RZu1gXfHovqE2CxxDL2CkJQlc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet, contentDetails",
    maxResults: 5,
    key: KEY
  }
});
