<template>
  <h2 class="text-center my-4 my-xl-5 section-title">Search by category:</h2>
  <section class="container row mx-auto g-4 mb-4">
    <div
      class="col-6 col-md-4 col-xl-2"
      v-for="category in productsStore.categories"
      :key="category"
    >
      <div class="card rounded-0 border-0">
        <img
          :src="`src/assets/images/categories/${category}.png`"
          class="card-img-top rounded-0"
          :alt="category"
        />
        <div class="card-header bg-black text-bg-dark">
          <p class="text-center mb-0">
            {{ formatCategory(category) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/ProductsStore';

const productsStore = useProductsStore();

const formatCategory = (category: string) => {
  const formatted = category.replace('mens', "men's");
  return (formatted.charAt(0).toUpperCase() + formatted.slice(1)).split('-').join(' ');
};
</script>
