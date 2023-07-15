<script setup lang="ts">
import Conveniences from './components/Conveniences.vue';
import Footer from './components/Footer.vue';
import Form from './components/Form.vue';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <RouterView />
  <Conveniences />
  <Form />
  <Footer />
</template>
