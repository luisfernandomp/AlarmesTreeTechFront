import axios from "axios";

export default axios.create({
  baseURL: "https://60d3d9c361160900173c9caa.mockapi.io/",
  headers: {
    "Content-type" : "application/json"
  }
});
