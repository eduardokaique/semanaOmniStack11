import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-semana-omnistack11.herokuapp.com'
});

export default api;