import axios  from 'axios';  

const api = axios.create({
    baseURL:'https://mern-bootcamp-api.herokuapp.com/'
})

export default api;
