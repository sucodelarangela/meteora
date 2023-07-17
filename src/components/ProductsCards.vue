<template>
  <h2 class="text-center my-4 my-xl-5 section-title">Products that are rocking!</h2>
  <section class="container row mx-auto g-4 px-3 mb-4 mb-xl-5">
    <div v-for="product in filterProducts" :key="product.id" class="col-12 col-md-4 col-xl-3">
      <div class="card rounded-0 h-100">
        <img
          :src="product.images[0]"
          class="card-img-top rounded-0 object-fit-cover"
          :alt="product.description"
        />
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-price">US$ {{ product.price.toFixed(2) }}</p>
          </div>
          <div>
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#productsModal"
              class="btn btn-primary btn-purple rounded-0 border-0"
              @click="openModal(product)"
              >More info</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- MODALS -->
    <ProductModal :product="selectedId" />
  </section>
</template>

<script setup lang="ts">
import ProductModal from './ProductModal.vue';
import { useProductsStore } from '../stores/ProductsStore';
import { ref } from 'vue';
import type IProduct from '@/interfaces/IProduct';
import type { Ref } from 'vue';
import { storeToRefs } from 'pinia';

const productsStore = useProductsStore();
const { filterProducts } = storeToRefs(productsStore);

const selectedId: Ref<IProduct | undefined> = ref();

const openModal = (product: IProduct) => {
  selectedId.value = product;
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/variables' as v;

.card {
  &-title,
  &-price {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 16px;
  }
  &-text {
    font-size: 0.875rem;
  }
  & img {
    aspect-ratio: 1 / 1.2;
  }
}
</style>
