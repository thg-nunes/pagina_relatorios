import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.URL_API}:8000`,
})

export { api }
