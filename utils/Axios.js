import axios from "axios";
const Axios = axios.create({
  baseURL: "https://example.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;
