import axios from 'axios';
// eslint-disable-next-line no-undef
const axiosInstance = axios.create({
            // lik for local//
    // baseURL:"http://localhost:5000"

    // deployed link on render//
    baseURL:"https://a-backend-q0h3.onrender.com"
})
export {axiosInstance}