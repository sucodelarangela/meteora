<template>
  <section class="container mx-auto g-4 mb-4">
    <form
      class="container border border-black p-4 my-3 my-md-4 my-xl-5 text-center mx-auto"
      @submit.prevent="handleClick"
    >
      <h6 class="legend mb-4 mx-auto">
        Want to receive our news, exclusive promotions and 10% OFF on your first purchase? Register!
      </h6>

      <div class="form-input input-group mx-auto">
        <input
          type="email"
          class="form-control border-black rounded-0"
          placeholder="Type your e-mail"
          aria-label="Type your e-mail"
          aria-describedby="button-addon2"
          required
        />
        <button
          class="d-none"
          data-bs-toggle="modal"
          data-bs-target="#newsletterModal"
          id="button-addon2"
        ></button>
        <button type="submit" class="btn btn-primary btn-purple rounded-0 border-0">
          Register
        </button>
      </div>
    </form>
  </section>

  <!-- MODALS -->
  <NewsletterModal />
</template>

<script lang="ts" setup>
import NewsletterModal from './NewsletterModal.vue';

const handleClick = () => {
  let button = document.getElementById('button-addon2');
  if (button) button.click();
};
</script>

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
