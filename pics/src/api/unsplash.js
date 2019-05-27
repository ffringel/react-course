import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9be4800ce9fa4999eea584d0659247aa4a1b5bfe8d4d24ad34bb2c207b88c66c"
  }
});
