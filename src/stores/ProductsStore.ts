// import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import ProductsService from '../services/ProductsService';
import type IProduct from '../interfaces/IProduct';

export const useProductsStore = defineStore('ProductsStore', {
  state: () => ({
    categories: ['mens-shirts', 'womens-bags', 'mens-shoes', 'womens-dresses', 'mens-watches', 'sunglasses'],
    products: <IProduct[]>[],
    productsInCart: <IProduct[]>[],
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
      const promises: Promise<any>[] = [];

      this.categories.forEach(category => {
        promises.push(ProductsService.getAllProducts(category));
      });

      return Promise.all(promises)
        .then(responses => {
          const results = responses.map(response => response.data.products);

          results.forEach(res => this.products.push(...res));
        })
        .catch(error => {
          throw error;
        });
    },
    addToCart(product: IProduct) {
      this.productsInCart.push(product);
      localStorage.setItem('productsInCart', JSON.stringify(this.productsInCart));
    },
    removeFromCart(productId: number) {
      const updatedCart = this.productsInCart.filter(item => item.id !== productId);
      this.productsInCart = updatedCart;
      localStorage.setItem('productsInCart', JSON.stringify(this.productsInCart));
    },
    loadCart() {
      if (localStorage.getItem('productsInCart')) {
        this.productsInCart = JSON.parse(localStorage.getItem('productsInCart') || '');
      }
    },
  },
});
