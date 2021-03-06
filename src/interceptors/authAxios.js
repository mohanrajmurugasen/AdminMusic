import axios from "axios";
import baseURL from "./baseurl";

const token = JSON.parse(JSON.stringify(localStorage.getItem("auth")));

const authAxios = axios.create({
  baseURL: baseURL,
  headers: {
    authentication: token,
  },
});

export default authAxios;
