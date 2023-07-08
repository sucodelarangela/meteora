// import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import ProductsService from '../services/ProductsService';
import type IProduct from '../interfaces/IProduct';

export const useProductsStore = defineStore('ProductsStore', {
  state: () => ({
    products: <IProduct[]>[],
    query: ''
  }),
  getters: {
    filterProducts: (state) => {
      if (!state.query) return state.products;

      return state.products.filter((product) => {
        return product.title.toLowerCase().includes(state.query.toLowerCase()) || product.category.toLowerCase().includes(state.query.toLowerCase());
      });
    }

  },
  actions: {
    async fetchProducts() {
      const categories = ['mens-shirts', 'womens-bags', 'mens-shoes', 'womens-dresses', 'mens-watches', 'sunglasses'];
      const promises: Promise<any>[] = [];

      categories.forEach(category => {
        promises.push(ProductsService.getAllProducts(category));
      });

      return Promise.all(promises)
        .then(responses => {
          const results = responses.map(response => response.data.products);

          results.forEach(res => this.products.push(res[3]));
        })
        .catch(error => {
          throw error;
        });
    },
  },
});
