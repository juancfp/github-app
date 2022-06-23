import axios from 'axios';

const api = axios.create({ //criar a instancia da API pelo axios
    baseURL: 'https://api.github.com/',
})

export default api;