<template>
  <h2 class="text-center my-4 my-xl-5 section-title">Produtos que estão bombando!</h2>
  <section class="container row mx-auto g-4 px-3 mb-4 mb-xl-5">
    <!-- Em tela mobile, cada div ocupa 6 colunas (12/6 = 2 divs por row) -->
    <!-- Em tela tablet, cada div ocupa 4 colunas (12/4 = 3 divs por row) -->
    <!-- Em tela desktop, cada div ocupa 2 colunas (12/2 = 6 divs por row) -->
    <div
      v-for="product in productsStore.products"
      :key="product.id"
      class="col-12 col-md-6 col-xl-4"
    >
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
            <p class="card-price">US$ {{ product.price }}</p>
          </div>
          <div>
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#productsModal"
              class="btn btn-primary btn-purple rounded-0 border-0"
              >Ver mais</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- MODALS -->
    <ProductModal />
  </section>
</template>

<script setup lang="ts">
import ProductModal from './ProductModal.vue';
import { onMounted } from 'vue';

import { useProductsStore } from '../stores/ProductsStore';

const productsStore = useProductsStore();

onMounted(() => {
  productsStore.fetchProducts().catch((error: any) => {
    console.log(error.message);
  });
});
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
