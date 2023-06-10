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
      <div class="carousel-item active">
        <!-- Checar como modificar essas imagens posteriormente de acordo com a media query -->
        <img src="@/assets/images/banners_mob/banner_1.png" class="d-block w-100" alt="Banner 1" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/banners_mob/banner_2.png" class="d-block w-100" alt="Banner 2" />
        <div class="carousel-caption d-md-block">
          <h5 class="text-uppercase">Coleção atemporal</h5>
          <p>Estilo e qualidade para durar.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/banners_mob/banner_3.png" class="d-block w-100" alt="Banner 3" />
        <div class="carousel-caption d-md-block">
          <h5 class="text-uppercase">Coleção atemporal</h5>
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
