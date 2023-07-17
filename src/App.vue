<template>
  <NavBar />
  <RouterView />
  <Conveniences />
  <Form />
  <Footer />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Conveniences from './components/Conveniences.vue';
import Footer from './components/Footer.vue';
import Form from './components/Form.vue';
import NavBar from './components/NavBar.vue';
import { useProductsStore } from './stores/ProductsStore';

const { fetchProducts, loadCart } = useProductsStore();

onMounted(() => {
  fetchProducts().catch((error: any) => {
    console.log(error.message);
  });
  loadCart();
});
</script>
