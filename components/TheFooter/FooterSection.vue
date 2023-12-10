<template>
  <footer class="footer-section__background">
    <div class="footer-section__container">
      <span class="footer-section__copyright"> Copyright © 2023-present TypedDevs </span>

      <img
        class="footer-section__logo"
        src="/images/logo.svg"
      />
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer-section {
  &__background {
    background-image: linear-gradient(
      to bottom,
      theme('colors.transparent'),
      theme('colors.transparent') 18.75%,
      theme('colors.brand.yellow') 18.75%,
      theme('colors.brand.yellow') 31.25%,
      theme('colors.brand.orange') 31.25%,
      theme('colors.brand.orange') 43.75%,
      theme('colors.brand.red') 43.75%,
      theme('colors.brand.red') 56.25%,
      theme('colors.brand.maroon') 56.25%,
      theme('colors.brand.maroon') 68.75%,
      theme('colors.brand.gray') 68.75%,
      theme('colors.brand.gray') 81.25%,
      theme('colors.transparent') 81.25%,
      theme('colors.transparent')
    );
  }

  &__container {
    @apply container mb-8 mt-16 flex h-24 gap-8;
  }

  &__logo {
    @apply hidden h-full;

    @screen md {
      @apply block;
    }
  }

  &__copyright {
    @apply block w-full self-center text-center text-white;

    @screen md {
      @apply ml-24;
    }
  }
}
</style>
