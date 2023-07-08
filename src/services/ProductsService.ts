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
  getAllProducts(category: string) {
    return apiClient.get(`/products/category/${category}`);
  },
  getSingleProduct(id: number) {
    return apiClient.get('/products/' + id);
  },
  // postEvent(event) {
  //   return apiClient.post('/events', event);
  // }
};
