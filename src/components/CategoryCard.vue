<template>
  <h2 class="text-center my-4 my-xl-5 section-title">
    Search by category: {{ f$?.formatCategory(productsStore.query) }}
    <span
      class="btn btn-sm btn-outline-danger"
      v-if="productsStore.query"
      @click="productsStore.query = ''"
      >Clear filter</span
    >
  </h2>
  <section class="container row mx-auto g-4 mb-4">
    <div
      class="col-6 col-md-4 col-xl-2"
      v-for="category in productsStore.categories"
      :key="category"
    >
      <div class="card rounded-0 border-0" @click="productsStore.query = category">
        <img :src="getImage(category)" class="card-img-top rounded-0" :alt="category" />
        <div class="card-header bg-black text-bg-dark">
          <p class="text-center mb-0">
            {{ f$!.formatCategory(category) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/ProductsStore';
import type IFilters from '@/interfaces/IFilters';
import { inject } from 'vue';

const productsStore = useProductsStore();

const f$: IFilters | undefined = inject('$f');

const getImage = (category: string) => {
  return new URL(`../assets/images/categories/${category}.png`, import.meta.url).toString();
};
</script>

<style scoped>
.card:hover {
  box-shadow: 4px 4px 0 black;
  cursor: pointer;
  transform: scale(1.05);
}
</style>
