<template>
  <div
    id="newsletterModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="dialog">
      <div class="modal-content rounded-bottom-1">
        <div class="modal-header bg-black text-bg-dark rounded-top-1" data-bs-theme="dark">
          <i class="bi bi-check-circle pe-3 fs-2 primary-yellow"></i>
          <h1 class="modal-title fs-5 d-flex align-items-center pe-5" id="modalLabel">
            E-mail successfully registered!
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close dialog"
          ></button>
        </div>
        <div class="modal-body">
          <p>Soon you will be receiving exclusive news from Meteora.</p>
        </div>
      </div>
    </div>
  </div>
</template>

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

.form {
  &-label,
  &-check-label {
    font-size: 0.875rem;
  }
}
</style>
