import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.30.128.1:3333',
});

export { api };
