import axios from 'axios';

const client = axios.create({
  baseURL: 'https://www.omdbapi.com',
});

client.interceptors.request.use(function (config) {
  config.params['apikey'] = '6ea8a46d';
  return config;
});

export { client };
