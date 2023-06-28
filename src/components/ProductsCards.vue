<template>
  <h2 class="text-center my-4 my-xl-5 section-title">Produtos que estão bombando!</h2>
  <section class="container row mx-auto g-4 px-3 mb-4 mb-xl-5">
    <!-- Em tela mobile, cada div ocupa 6 colunas (12/6 = 2 divs por row) -->
    <!-- Em tela tablet, cada div ocupa 4 colunas (12/4 = 3 divs por row) -->
    <!-- Em tela desktop, cada div ocupa 2 colunas (12/2 = 6 divs por row) -->
    <div class="col-12 col-md-6 col-xl-4">
      <div class="card rounded-0">
        <img
          src="../assets/images/card_imgs/camiseta.png"
          class="card-img-top rounded-0"
          alt="Produto camisetas"
        />
        <div class="card-body">
          <h5 class="card-title">Camiseta Conforto</h5>
          <p class="card-text">
            Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem
            unissex.
          </p>
          <p class="card-price">R$ 70,00</p>
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

    <div class="col-12 col-md-6 col-xl-4">
      <div class="card rounded-0">
        <img
          src="../assets/images/card_imgs/bolsa.png"
          class="card-img-top rounded-0"
          alt="Produto bolsas"
        />
        <div class="card-body">
          <h5 class="card-title">Bolsa Coringa</h5>
          <p class="card-text">
            Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!
          </p>
          <p class="card-price">R$ 120,00</p>
          <a href="#" class="btn btn-primary btn-purple rounded-0 border-0">Ver mais</a>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6 col-xl-4">
      <div class="card rounded-0">
        <img
          src="../assets/images/card_imgs/calcados.png"
          class="card-img-top rounded-0"
          alt="Produto calçados"
        />
        <div class="card-body">
          <h5 class="card-title">Tênis Chuncky</h5>
          <p class="card-text">
            Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.
          </p>
          <p class="card-price">R$ 250,00</p>
          <a href="#" class="btn btn-primary btn-purple rounded-0 border-0">Ver mais</a>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6 col-xl-4">
      <div class="card rounded-0">
        <img
          src="../assets/images/card_imgs/calca.png"
          class="card-img-top rounded-0"
          alt="Produto calças"
        />
        <div class="card-body">
          <h5 class="card-title">Calça Alfaiataria</h5>
          <p class="card-text">Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!</p>
          <p class="card-price">R$ 180,00</p>
          <a href="#" class="btn btn-primary btn-purple rounded-0 border-0">Ver mais</a>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6 col-xl-4">
      <div class="card rounded-0">
        <img
          src="../assets/images/card_imgs/casacos.png"
          class="card-img-top rounded-0"
          alt="Produto casacos"
        />
        <div class="card-body">
          <h5 class="card-title">Jaqueta Jeans</h5>
          <p class="card-text">
            Modelo unissex oversized com gola de camurça. Atemporal e autêntica!
          </p>
          <p class="card-price">R$ 150,00</p>
          <a href="#" class="btn btn-primary btn-purple rounded-0 border-0">Ver mais</a>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6 col-xl-4">
      <div class="card rounded-0">
        <img
          src="../assets/images/card_imgs/oculos.png"
          class="card-img-top rounded-0"
          alt="Produto óculos"
        />
        <div class="card-body">
          <h5 class="card-title">Óculos Redondo</h5>
          <p class="card-text">Armação metálica em grafite com lentes arredondadas. Sem erro!</p>
          <p class="card-price">R$ 120,00</p>
          <a href="#" class="btn btn-primary btn-purple rounded-0 border-0">Ver mais</a>
        </div>
      </div>
    </div>

    <!-- MODALS -->
    <ProductModal />
  </section>
</template>

<script setup lang="ts">
import ProductModal from './ProductModal.vue';
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
}
</style>
