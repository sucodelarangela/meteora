<template>
  <div
    id="productsModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="dialog">
      <div class="modal-content rounded-bottom-1">
        <div class="modal-header bg-black text-bg-dark rounded-top-1" data-bs-theme="dark">
          <h1 class="modal-title fs-5 d-flex align-items-center" id="modalLabel">
            <i class="bi bi-check-circle pe-3 fs-2 primary-yellow"></i>Confira detalhes sobre o
            produto
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container row g-0">
            <div class="col-6">
              <img
                src="../assets/images/card_imgs/camiseta.png"
                alt="Camiseta 100% algodão, cores diversas, básica, sem estampa."
                class="rounded-top-1 w-100"
              />
            </div>
            <div class="col-6 px-3">
              <div class="card-body">
                <h6 class="card-title fw-bold mb-4">Camiseta Conforto</h6>
                <p class="card-text text-dark pb-4 border-bottom border-black">
                  Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem
                  unissex.
                </p>
                <p class="card-price fs-5 fw-medium my-4">R$ 70,00</p>
                <h6 class="card-subtitle mb-2">Vendido e entregue por Riachuelo</h6>
              </div>
              <hr />
              <h6 class="form-label fw-bold">Cores:</h6>
              <div class="container row">
                <div class="form-check col-4 d-flex flex-column align-items-center p-0">
                  <input
                    class="form-check-input mx-0"
                    type="radio"
                    name="colors"
                    id="color1"
                    style="background-color: lightblue"
                  />
                  <label class="form-check-label" for="color1">Azul claro</label>
                </div>
                <div class="form-check col-4 d-flex flex-column align-items-center p-0">
                  <input
                    class="form-check-input mx-0"
                    type="radio"
                    name="colors"
                    id="color2"
                    style="background-color: whitesmoke"
                  />
                  <label class="form-check-label" for="color2">Offwhite</label>
                </div>
                <div class="form-check col-4 d-flex flex-column align-items-center p-0">
                  <input
                    class="form-check-input mx-0"
                    type="radio"
                    name="colors"
                    id="color3"
                    style="background-color: black"
                  />
                  <label class="form-check-label" for="color3">Preto</label>
                </div>
              </div>
              <hr />
              <h6 class="form-label fw-bold">Tamanhos:</h6>
              <div class="container row">
                <div class="form-check col-2 d-flex flex-column align-items-center p-0">
                  <input class="form-check-input mx-0" type="radio" name="sizes" id="size1" />
                  <label class="form-check-label" for="size1">P</label>
                </div>
                <div class="form-check col-2 d-flex flex-column align-items-center p-0">
                  <input class="form-check-input mx-0" type="radio" name="sizes" id="size2" />
                  <label class="form-check-label" for="size2">PP</label>
                </div>
                <div class="form-check col-2 d-flex flex-column align-items-center p-0">
                  <input class="form-check-input mx-0" type="radio" name="sizes" id="size3" />
                  <label class="form-check-label" for="size3">M</label>
                </div>
                <div class="form-check col-2 d-flex flex-column align-items-center p-0">
                  <input class="form-check-input mx-0" type="radio" name="sizes" id="size3" />
                  <label class="form-check-label" for="size3">G</label>
                </div>
                <div class="form-check col-2 d-flex flex-column align-items-center p-0">
                  <input class="form-check-input mx-0" type="radio" name="sizes" id="size3" />
                  <label class="form-check-label" for="size3">GG</label>
                </div>
              </div>
              <div class="modal-footer border-0 justify-content-start">
                <button
                  type="button"
                  class="btn btn-primary btn-purple rounded-0 border-0 fw-medium"
                >
                  Adicionar à sacola
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;

.modal-dialog {
  @media screen and (min-width: 768px) {
    min-width: 43.75rem;
  }
}

.card {
  &-text,
  &-subtitle {
    font-size: 0.875rem;
  }
  &-subtitle {
    color: v.$gray-500;
  }
}

.form {
  &-label,
  &-check-label {
    font-size: 0.875rem;
  }
}
</style>
