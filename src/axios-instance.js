import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://reqres.in/api/',
  headers: {
    post: {        // can be common or any other method
      'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'access-control-allow-methods': 'GET, POST, PUT',
      'access-control-allow-origin': '*',
      'server': 'cloudflare-nginx'
    }
  }
});

export default instance;
