<template>
  <section class="section container mx-auto g-4 px-3 my-4 mb-xl-5 row">
    <img src="/notfound.svg" alt="Page not found" class="meteora mx-auto" />
    <h4 class="text-center">You'll be redirected to Homepage in {{ count }}...</h4>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const count: Ref<number> = ref(10);

onMounted(() => {
  setInterval(() => {
    count.value--;
  }, 1000);

  setTimeout(() => {
    router.push('/');
  }, 10000);
});
</script>

<style lang="scss" scoped>
.meteora {
  max-width: 26.25rem;
}
</style>
