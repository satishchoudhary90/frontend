import axios from 'axios';

const api = axios.create({
  baseURL: 'https://courselisterbackend.onrender.com/api',  // change this
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;