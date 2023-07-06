// import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import ProductsService from '../services/ProductsService';
import type IProduct from '../interfaces/IProduct';

export const useProductsStore = defineStore('ProductsStore', {
  state() {
    return {
      products: <IProduct[]>[]
    };
  },
  actions: {
    fetchProducts() {
      return ProductsService.getAllProducts()
        .then(response => {
          this.products = response.data.products;
        })
        .catch(error => {
          throw error;
        });
    }
  }
});
