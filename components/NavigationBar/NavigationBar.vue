<template>
  <div class="navigation-bar__background">
    <div class="navigation-bar__container">
      <img
        class="navigation-bar__logo"
        src="/images/logo.svg"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.navigation-bar {
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
    @apply container;
  }

  &__logo {
    @apply h-24;
  }
}
</style>
