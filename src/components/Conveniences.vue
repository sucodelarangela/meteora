<template>
  <section class="pb-4 pb-lg-5 bg-black text-bg-dark">
    <h2 class="section-title text-center fw-medium py-4 py-xl-5">
      Check all of our conveniences out
    </h2>
    <div
      class="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-4 gap-lg-5 px-4"
    >
      <div class="conveniences d-flex align-items-center">
        <img src="@/assets/images/icons/x-diamond.png" alt="" aria-hidden="true" class="me-2" />
        <div>
          <h6 class="fw-bold ms-3 mb-3 primary-yellow text-uppercase">Pay via pix</h6>
          <p class="ms-3 mb-0">Get 5% OFF by paying via PIX</p>
        </div>
      </div>

      <div class="conveniences d-flex">
        <img src="@/assets/images/icons/arrow-repeat.png" alt="" aria-hidden="true" class="me-2" />
        <div>
          <h6 class="fw-bold ms-3 mb-3 primary-yellow text-uppercase">Change free of charge</h6>
          <p class="ms-3 mb-0">Feel free to change your product within 30 days.</p>
        </div>
      </div>

      <div class="conveniences d-flex">
        <img src="@/assets/images/icons/flower.png" alt="" aria-hidden="true" class="me-2" />
        <div>
          <h6 class="fw-bold ms-3 mb-3 primary-yellow text-uppercase">Sustainability</h6>
          <p class="ms-3 mb-0">Responsible fashion that respects the environment.</p>
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
