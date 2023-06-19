<template>
  <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <!-- CARROSEL 01 -->
      <div class="carousel-item active">
        <img
          src="@/assets/images/banners_mob/banner_1.png"
          class="d-md-none w-100"
          alt="Modelo feminina vestindo blusa rosa fluorescente em fundo lilás"
        />
        <img
          src="@/assets/images/banners_tablet/banner_1.png"
          class="d-none d-md-block d-xl-none w-100"
          alt="Modelo feminina vestindo blusa rosa fluorescente em fundo lilás"
        />
        <img
          src="@/assets/images/banners_desktop/banner_1.png"
          class="d-none d-xl-block w-100"
          alt="Modelo feminina vestindo blusa rosa fluorescente em fundo lilás"
        />
      </div>
      <!-- CARROSSEL 02 -->
      <div class="carousel-item">
        <img
          src="@/assets/images/banners_mob/banner_2.png"
          class="d-md-none w-100"
          alt="Modelo feminina vestindo moleton cinza mescla com óculos escuro em fundo rosa"
        />
        <img
          src="@/assets/images/banners_tablet/banner_2.png"
          class="d-none d-md-block d-xl-none w-100"
          alt="Modelo feminina vestindo moleton cinza mescla com óculos escuro em fundo rosa"
        />
        <img
          src="@/assets/images/banners_desktop/banner_2.png"
          class="d-none d-xl-block w-100"
          alt="Modelo feminina vestindo moleton cinza mescla com óculos escuro em fundo rosa"
        />
        <div class="carousel-caption caption-2 d-md-block">
          <h5 class="carousel-title fw-medium text-uppercase">Coleção atemporal</h5>
          <p class="lh-llg">Estilo e qualidade para durar.</p>
        </div>
      </div>
      <!-- CARROSSEL 03 -->
      <div class="carousel-item">
        <img
          src="@/assets/images/banners_mob/banner_3.png"
          class="d-md-none w-100"
          alt="Modelo masculino com blazer cinza, camisa branca, gravata borboleta e chapéu em fundo laranja"
        />
        <img
          src="@/assets/images/banners_tablet/banner_3.png"
          class="d-none d-md-block d-xl-none w-100"
          alt="Modelo masculino com blazer cinza, camisa branca, gravata borboleta e chapéu em fundo laranja"
        />
        <img
          src="@/assets/images/banners_desktop/banner_3.png"
          class="d-none d-xl-block w-100"
          alt="Modelo masculino com blazer cinza, camisa branca, gravata borboleta e chapéu em fundo laranja"
        />
        <div class="carousel-caption caption-3 d-md-block">
          <h5 class="carousel-title fw-medium text-uppercase">Coleção atemporal</h5>
          <p>Alto impacto visual, baixo impacto ambiental.</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.carousel-caption {
  @media screen and (min-width: 768px) {
    bottom: 35%;
    &.caption-2 {
      text-align: right;
    }
    &.caption-3 {
      text-align: left;
    }
  }
  @media screen and (min-width: 1200px) {
    bottom: 25%;
    > p {
      font-size: 1.25rem;
    }
  }
}
.carousel-title {
  font-size: 2rem;
  @media screen and (min-width: 1200px) {
    font-size: 3rem;
  }
}
.lh-llg {
  line-height: 300%;
  @media screen and (min-width: 768px) {
    line-height: inherit;
  }
}
</style>
