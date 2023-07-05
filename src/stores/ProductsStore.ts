// import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import ProductsService from '../services/ProductsService';

export const useProductsStore = defineStore('ProductsStore', {
  state() {
    return {
      products: []
    };
  },
  actions: {
    fetchProducts() {
      return ProductsService.getAllProducts()
        .then(response => {
          // this.products = response.data.products;
          console.log(response.data.products);
        })
        .catch(error => {
          throw error;
        });
    }
  }
});
