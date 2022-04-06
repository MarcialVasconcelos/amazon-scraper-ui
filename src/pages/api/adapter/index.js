// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API,
  headers: {
    'access-control-allow-origin': '*',
  }
})

export default api;