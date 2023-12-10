<template>
  <nav class="navigation-bar__background">
    <div class="navigation-bar__container">
      <img
        class="navigation-bar__logo"
        src="/images/logo.svg"
      />

      <h1 class="navigation-bar__title">TypedDevs</h1>

      <SocialLinks
        class="navigation-bar__links"
        linked-in-company-handle="typeddevs"
        x-handle="typeddevs"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
import SocialLinks from '@/components/SocialLinks/SocialLinks.vue'
</script>

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
    @apply container mb-16 mt-8 grid h-24 grid-rows-2 gap-x-8;
    grid-template-columns: auto 1fr;
    grid-template-areas:
      'logo title'
      'logo links';
  }

  &__logo {
    @apply h-full;
    grid-area: logo;
  }

  &__title {
    @apply w-full self-end text-right font-title text-2xl leading-none text-white;
    grid-area: title;
  }

  &__links {
    @apply -mr-2 shrink-0 self-start justify-self-end invert;
    grid-area: links;
  }
}
</style>
