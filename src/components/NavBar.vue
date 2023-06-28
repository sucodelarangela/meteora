<template>
  <!-- Código doc bootstrap para edição -->
  <header class="navbar navbar-expand-md navbar-dark bg-black">
    <div class="container-fluid container-lg">
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/logo/logo_white.png" alt="" aria-hidden="true" />
      </a>
      <!-- Botão hamburguer mobile -->
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- Ícones do menu -->
        <span>
          <i class="bi bi-list primary-yellow fs-2"></i>
          <i class="bi bi-x-lg primary-yellow fs-2 d-none"></i>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Nossas lojas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Novidades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Promoções</a>
          </li>
        </ul>
        <!-- Input tablet+ -->
        <form class="d-md-flex d-none">
          <input
            class="form-control me-2 rounded-0"
            type="search"
            placeholder="Digite o produto"
            aria-label="Buscar produto"
          />
          <button class="btn btn-outline-light rounded-0" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </header>
  <!-- Input mobile -->
  <section class="container mx-auto my-4 bg-light">
    <form class="d-flex d-md-none">
      <input
        class="form-control me-2 rounded-0 border-black"
        type="search"
        placeholder="Digite o produto"
        aria-label="Buscar produto"
      />
      <button class="btn btn-outline-dark rounded-0" type="submit">Buscar</button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.navbar-brand img {
  width: 7.875rem;
}

.navbar-toggler[aria-expanded='true'] {
  > span > .bi-list {
    display: none;
  }
  > span > .bi-x-lg {
    display: block !important;
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
