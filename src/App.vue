<script setup lang="ts">
import Carousel from './components/CarouselVue.vue';
import CategoryCard from './components/CategoryCard.vue';
import Conveniences from './components/Conveniences.vue';
import Form from './components/Form.vue';
import NavBar from './components/NavBar.vue';
import ProductsCards from './components/ProductsCards.vue';
</script>

<template>
  <NavBar />
  <Carousel />
  <CategoryCard />
  <ProductsCards />
  <Conveniences />
  <Form />
</template>

<style scoped></style>
