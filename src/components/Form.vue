<template>
  <section class="container mx-auto g-4 mb-4">
    <form class="container border border-black p-4 my-3 my-md-4 my-xl-5 text-center mx-auto">
      <h6 class="legend mb-4 mx-auto">
        Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra?
        Cadastre-se!
      </h6>

      <div class="form-input input-group mx-auto">
        <input
          type="email"
          class="form-control border-black rounded-0"
          placeholder="Digite seu e-mail"
          aria-label="Digite seu e-mail"
          aria-describedby="button-addon2"
        />
        <button
          type="button"
          class="btn btn-primary btn-purple rounded-0 border-0"
          id="button-addon2"
        >
          Enviar
        </button>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as v;

@media screen and (min-width: 768px) {
  .legend {
    font-size: 1.25rem;
    max-width: 35.625rem;
  }
  .form-input {
    max-width: 27.5rem;
  }
}
@media screen and (min-width: 1200px) {
  form {
    max-width: 45.625rem;
  }
  .legend {
    max-width: unset;
  }
  .form-input {
    max-width: 33.75rem;
  }
}
</style>
