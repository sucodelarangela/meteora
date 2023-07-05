import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
  }
});

export default {
  getAllProducts() {
    return apiClient.get('/products');
  },
  // getEvent(id) {
  //   return apiClient.get('/events/' + id);
  // },
  // postEvent(event) {
  //   return apiClient.post('/events', event);
  // }
};
