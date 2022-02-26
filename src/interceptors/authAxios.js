import axios from "axios";

const token = localStorage.getItem('auth');
const baseURL = 
process.env.NODE_ENV === "production"
? ''
: 'http://localhost:4000/';

const authAxios = axios.create({
    baseURL,
    headers: {
        authentication: token,
    },
});

export default authAxios;