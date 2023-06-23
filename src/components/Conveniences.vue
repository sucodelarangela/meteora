<template>
  <section class="pb-4 pb-lg-5 bg-black text-bg-dark">
    <h2 class="section-title text-center fw-medium py-4 py-xl-5">
      Conheça todas as nossas facilidades
    </h2>
    <div
      class="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-4 gap-lg-5 px-4"
    >
      <div class="conveniences d-flex align-items-center">
        <img src="@/assets/images/icons/x-diamond.png" alt="" aria-hidden="true" class="me-2" />
        <div>
          <h6 class="fw-bold ms-3 mb-3 primary-yellow">PAGUE PELO PIX</h6>
          <p class="ms-3 mb-0">Ganhe 5% OFF em pagamentos via PIX</p>
        </div>
      </div>

      <div class="conveniences d-flex">
        <img src="@/assets/images/icons/arrow-repeat.png" alt="" aria-hidden="true" class="me-2" />
        <div>
          <h6 class="fw-bold ms-3 mb-3 primary-yellow">TROCA GRÁTIS</h6>
          <p class="ms-3 mb-0">Fique livre para trocar em até 30 dias.</p>
        </div>
      </div>

      <div class="conveniences d-flex">
        <img src="@/assets/images/icons/flower.png" alt="" aria-hidden="true" class="me-2" />
        <div>
          <h6 class="fw-bold ms-3 mb-3 primary-yellow">SUSTENTABILIDADE</h6>
          <p class="ms-3 mb-0">Moda responsável, que respeita o meio ambiente.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.conveniences {
  max-width: 19rem;
  p {
    font-size: 0.875rem;
  }
}

img {
  object-fit: contain;
  width: 3.5rem;
}
</style>
