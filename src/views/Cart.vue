<template>
  <section class="basket container mx-auto g-4 px-3 mb-4 mb-xl-5">
    <div class="items text-center my-4 my-xl-5 mx-auto">
      <template v-if="productsInCart.length">
        <div
          class="item d-flex justify-content-between position-relative row"
          v-for="(product, index) in productsInCart"
          :key="index"
        >
          <div
            class="remove position-absolute text-decoration-underline text-end"
            @click="removeProductFromCart(product.id)"
          >
            Remover Produto
          </div>
          <div class="photo col-4 col-md-3">
            <img :src="product.images[0]" :alt="product.title" />
          </div>
          <div class="fw-bold col-8 col-md-5">{{ product.title }}</div>
          <div class="quantities col-12 col-md-4 mt-2 mt-md-0">
            <span class="quantity-area d-inline-flex justify-content-between align-items-center">
              <button
                class="btn btn-sm btn-outline-secondary d-inline-flex justify-content-center align-items-center p-2"
                :disabled="product.quantity <= 1"
                @click="product.quantity--"
              >
                -
              </button>
              <span class="fs-6 align-middle">{{ product.quantity }}</span>
              <button
                class="btn btn-sm btn-outline-secondary d-inline-flex justify-content-center align-items-center p-2"
                @click="product.quantity++"
              >
                +
              </button>
            </span>
            <span class="product-total d-inline-flex justify-content-end fs-6 ms-2">
              US$ {{ (product.price * product.quantity).toFixed(2) }}
            </span>
          </div>
        </div>
        <div class="grand-total fs-5 fw-bold text-end mt-2">
          Order total: US$ {{ orderTotal() }}
        </div>
      </template>
      <h4 v-else>No items in shop cart :(</h4>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProductsStore } from '../stores/ProductsStore';
import type IProduct from '@/interfaces/IProduct';
import { watch } from 'vue';

const productsStore = useProductsStore();
const { removeFromCart } = useProductsStore();
const { productsInCart } = storeToRefs(productsStore);

const removeProductFromCart = (productId: number) => {
  if (confirm('Você tem certeza que quer remover o item do carrinho?')) {
    removeFromCart(productId);
  }
};

const orderTotal = () => {
  let total = 0;

  productsInCart.value.forEach((item: IProduct) => {
    total += item.price * item.quantity;
  });
  return total.toFixed(2);
};

watch(productsInCart.value, () => {
  localStorage.setItem('productsInCart', JSON.stringify(productsInCart.value));
});
</script>

<style lang="scss" scoped>
@use '../assets/styles/variables' as v;

.basket {
  min-height: 12.5rem;
}

.items {
  max-width: 50rem;
}

.item {
  padding: 2.5rem 0;
  border-bottom: 1px solid v.$gray-500;

  .remove {
    top: 0.5rem;
    right: 0;
    font-size: 11px;
    cursor: pointer;
  }

  .quantity-area {
    width: 5rem;
    button {
      width: 16px;
      height: 16px;
    }
  }

  .photo > img {
    max-width: 5rem;
  }
}

.product-total {
  width: 6.5rem;
}
</style>
