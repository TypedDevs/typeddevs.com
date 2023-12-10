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
      theme('colors.transparent') 1rem,
      theme('colors.brand.yellow') 1rem,
      theme('colors.brand.yellow') 1.8rem,
      theme('colors.brand.orange') 1.8rem,
      theme('colors.brand.orange') 2.6rem,
      theme('colors.brand.red') 2.6rem,
      theme('colors.brand.red') 3.4rem,
      theme('colors.brand.maroon') 3.4rem,
      theme('colors.brand.maroon') 4.2rem,
      theme('colors.brand.gray') 4.2rem,
      theme('colors.brand.gray') 5rem,
      theme('colors.transparent') 5rem,
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
