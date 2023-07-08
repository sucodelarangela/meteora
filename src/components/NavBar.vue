<template>
  <!-- Código doc bootstrap para edição -->
  <header class="navbar navbar-expand-md navbar-dark bg-black p-0">
    <div class="container-fluid container-lg">
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/logo/logo_white.png" alt="" aria-hidden="true" />
      </a>
      <!-- Botão hamburguer mobile -->
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Abrir menu"
      >
        <!-- Ícones do menu -->
        <span>
          <i class="bi bi-list primary-yellow fs-2"></i>
        </span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark px-4 py-3" id="navbarSupportedContent">
        <div class="offcanvas-header p-0">
          <button
            type="button"
            class="btn ms-auto p-0"
            data-bs-dismiss="offcanvas"
            aria-label="Fechar menu"
          >
            <i class="bi bi-x-lg primary-yellow fs-3 d-none"></i>
          </button>
        </div>

        <ul class="navbar-nav me-auto">
          <li class="nav-item py-2 border-bottom">
            <a class="nav-link p-0 p-md-2 active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item py-2 border-bottom">
            <a class="nav-link p-0 p-md-2" href="#">Nossas lojas</a>
          </li>
          <li class="nav-item py-2 border-bottom">
            <a class="nav-link p-0 p-md-2" href="#">Novidades</a>
          </li>
          <li class="nav-item py-2">
            <a class="nav-link p-0 p-md-2" href="#">Promoções</a>
          </li>
        </ul>
        <!-- Input tablet+ -->
        <form class="d-md-flex d-none">
          <input
            class="form-control me-2 rounded-0"
            type="search"
            placeholder="Digite o produto"
            aria-label="Buscar produto"
            v-model="productsStore.query"
            @change="console.log(productsStore.query)"
          />
          <button class="btn btn-outline-light rounded-0" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </header>
  <!-- Input mobile -->
  <section class="container mx-auto my-4 bg-light d-md-none px-4">
    <form class="d-flex">
      <input
        class="form-control me-2 rounded-0 border-black"
        type="search"
        placeholder="Digite o produto"
        aria-label="Buscar produto"
        v-model="productsStore.query"
        @change="console.log(productsStore.query)"
      />
      <button class="btn btn-outline-dark rounded-0" type="submit">Buscar</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { useProductsStore } from '../stores/ProductsStore';

const productsStore = useProductsStore();
</script>

<style lang="scss" scoped>
@use '../assets/styles/variables' as v;

.navbar-brand img {
  width: 7.875rem;
}

.navbar-toggler[aria-expanded='true'] {
  > span > .bi-list {
    display: none;
  }
}

.bi-x-lg {
  display: block !important;
}

.offcanvas {
  height: fit-content;
  width: fit-content !important;
}

.nav-link {
  &:hover,
  &.active {
    color: v.$primary-yellow !important;
  }
}

@media screen and (min-width: 768px) {
  .navbar-brand img {
    width: 6.25rem;
  }
  form {
    width: 14.25rem;
  }
  ::placeholder,
  li > a,
  button {
    font-size: 0.875rem;
  }
  .offcanvas {
    flex-direction: row;
  }

  .nav-item {
    border: none !important;
    padding: inherit !important;
  }
}

@media screen and (min-width: 1200px) {
  form {
    width: inherit;
  }
  ::placeholder,
  li > a,
  button {
    font-size: inherit;
  }
}
</style>
