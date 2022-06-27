import axios from 'axios';

export const api = axios.create({ //criar a instancia da API pelo axios
    baseURL: 'https://api.github.com/',
})
