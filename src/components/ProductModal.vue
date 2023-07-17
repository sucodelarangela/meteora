<template>
  <div
    id="productsModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="dialog">
      <div class="modal-content rounded-bottom-1">
        <div class="modal-header bg-black text-bg-dark rounded-top-1" data-bs-theme="dark">
          <i class="bi bi-check-circle pe-3 fs-2 primary-yellow"></i>
          <h1 class="modal-title fs-5 d-flex align-items-center pe-5" id="modalLabel">
            Check product details
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close dialog"
          ></button>
        </div>
        <div class="modal-body" v-if="product">
          <div class="d-flex flex-column flex-md-row g-0 border border-1 rounded-top-1">
            <div class="col-md-6">
              <img
                :src="product.images[0]"
                :alt="product.description"
                class="image rounded-top-1 w-100 object-fit-cover"
              />
            </div>
            <div class="col-md-6 px-3">
              <div class="card-body">
                <h6 class="card-title fw-bold mb-4 mt-4 mt-md-0">{{ product.title }}</h6>
                <p class="card-text text-dark pb-4 border-bottom border-black">
                  {{ product.description }}
                </p>
                <p class="card-price fs-5 fw-medium my-4">US$ {{ product.price.toFixed(2) }}</p>
                <h6 class="card-subtitle mb-2">Sold and delivered by {{ product.brand }}</h6>
              </div>
              <hr />
              <h6 class="form-label fw-bold">Colors:</h6>
              <div class="container row">
                <div class="form-check col-4 d-flex flex-column align-items-center p-0">
                  <input
                    class="form-check-input mx-0"
                    type="radio"
                    name="colors"
                    id="color1"
                    style="background-color: lightblue"
                  />
                  <label class="form-check-label" for="color1">Light blue</label>
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
                  <label class="form-check-label" for="color3">Black</label>
                </div>
              </div>
              <hr />
              <h6
                class="form-label fw-bold"
                v-if="
                  product.category === 'mens-shirts' ||
                  product.category === 'womens-dresses' ||
                  product.category === 'mens-shoes'
                "
              >
                Sizes:
              </h6>
              <div
                class="container row"
                v-if="
                  product.category === 'mens-shirts' ||
                  product.category === 'womens-dresses' ||
                  product.category === 'mens-shoes'
                "
              >
                <div class="form-check col-2 d-flex flex-column align-items-center p-0">
                  <input class="form-check-input mx-0" type="radio" name="sizes" id="size1" />
                  <label class="form-check-label" for="size1">S</label>
                </div>
                <div class="form-check col-2 d-flex flex-column align-items-center p-0">
                  <input class="form-check-input mx-0" type="radio" name="sizes" id="size2" />
                  <label class="form-check-label" for="size2">M</label>
                </div>
                <div class="form-check col-2 d-flex flex-column align-items-center p-0">
                  <input class="form-check-input mx-0" type="radio" name="sizes" id="size3" />
                  <label class="form-check-label" for="size3">L</label>
                </div>
                <div class="form-check col-2 d-flex flex-column align-items-center p-0">
                  <input class="form-check-input mx-0" type="radio" name="sizes" id="size3" />
                  <label class="form-check-label" for="size3">XL</label>
                </div>
                <div class="form-check col-2 d-flex flex-column align-items-center p-0">
                  <input class="form-check-input mx-0" type="radio" name="sizes" id="size3" />
                  <label class="form-check-label" for="size3">2XL</label>
                </div>
              </div>
              <div class="modal-footer border-0 justify-content-start">
                <button
                  v-if="!isInCart(product)"
                  @click="addProductToCart(product)"
                  type="button"
                  class="btn btn-primary btn-purple rounded-0 border-0 fw-medium"
                >
                  Add to cart
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-primary btn-purple rounded-0 border-0 fw-medium"
                >
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProductsStore } from '../stores/ProductsStore';
import type IProduct from '@/interfaces/IProduct';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(['product']);
const { productsInCart, addToCart } = useProductsStore();

const addProductToCart = (product: IProduct) => {
  product.quantity = 1;
  addToCart(product);
};

const isInCart = (product: IProduct) => {
  return productsInCart.find((item) => item.id === product.id);
};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as v;

.modal-dialog {
  min-width: 21.25rem;
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

.image {
  aspect-ratio: 1/1.2;
}

.form {
  &-label,
  &-check-label {
    font-size: 0.875rem;
  }
}

@media screen and (min-width: 768px) {
  .modal-body > div {
    border: none !important;
  }
}
</style>
