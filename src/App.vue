<script setup lang="ts">
import { onMounted } from 'vue';
import Carousel from './components/CarouselVue.vue';
import CategoryCard from './components/CategoryCard.vue';
import Conveniences from './components/Conveniences.vue';
import Footer from './components/Footer.vue';
import Form from './components/Form.vue';
import NavBar from './components/NavBar.vue';
import ProductsCards from './components/ProductsCards.vue';
import { useProductsStore } from './stores/ProductsStore';

const productsStore = useProductsStore();

onMounted(() => {
  productsStore.fetchProducts().catch((error: any) => {
    console.log(error);
  });
});
</script>

<template>
  <NavBar />
  <Carousel />
  <CategoryCard />
  <ProductsCards />
  <Conveniences />
  <Form />
  <Footer />
</template>
