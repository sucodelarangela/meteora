<template>
  <h2 class="text-center my-4 section-title">Busque por categoria:</h2>
  <section class="container row mx-auto g-4 mb-4">
    <!-- Em tela mobile, cada div ocupa 6 colunas (12/6 = 2 divs por row) -->
    <!-- Em tela tablet, cada div ocupa 4 colunas (12/4 = 3 divs por row) -->
    <!-- Em tela desktop, cada div ocupa 2 colunas (12/2 = 6 divs por row) -->
    <div class="col-6 col-md-4 col-xl-2">
      <div class="card">
        <img
          src="@/assets/images/categories/camiseta.png"
          class="card-img-top"
          alt="Categoria camisetas"
        />
        <div class="card-header bg-black text-bg-dark">
          <p class="text-center mb-0">Camisetas</p>
        </div>
      </div>
    </div>

    <div class="col-6 col-md-4 col-xl-2">
      <div class="card">
        <img
          src="@/assets/images/categories/bolsa.png"
          class="card-img-top"
          alt="Categoria bolsas"
        />
        <div class="card-header bg-black text-bg-dark">
          <p class="text-center mb-0">Bolsas</p>
        </div>
      </div>
    </div>

    <div class="col-6 col-md-4 col-xl-2">
      <div class="card">
        <img
          src="@/assets/images/categories/calcados.png"
          class="card-img-top"
          alt="Categoria calçados"
        />
        <div class="card-header bg-black text-bg-dark">
          <p class="text-center mb-0">Calçados</p>
        </div>
      </div>
    </div>

    <div class="col-6 col-md-4 col-xl-2">
      <div class="card">
        <img
          src="@/assets/images/categories/calca.png"
          class="card-img-top"
          alt="Categoria calças"
        />
        <div class="card-header bg-black text-bg-dark">
          <p class="text-center mb-0">Calças</p>
        </div>
      </div>
    </div>

    <div class="col-6 col-md-4 col-xl-2">
      <div class="card">
        <img
          src="@/assets/images/categories/casacos.png"
          class="card-img-top"
          alt="Categoria casacos"
        />
        <div class="card-header bg-black text-bg-dark">
          <p class="text-center mb-0">Casacos</p>
        </div>
      </div>
    </div>

    <div class="col-6 col-md-4 col-xl-2">
      <div class="card">
        <img
          src="@/assets/images/categories/oculos.png"
          class="card-img-top"
          alt="Categoria óculos"
        />
        <div class="card-header bg-black text-bg-dark">
          <p class="text-center mb-0">Óculos</p>
        </div>
      </div>
    </div>
  </section>
</template>
