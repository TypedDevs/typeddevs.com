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
        git-hub-handle="TypedDevs"
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
    @apply container mb-16 mt-8 grid h-24 grid-rows-2 gap-x-8;
    grid-template-areas: 'title' 'links';

    @screen sm {
      grid-template-columns: auto 1fr;
      grid-template-areas:
        'logo title'
        'logo links';
    }
  }

  &__logo {
    @apply hidden h-full;
    grid-area: logo;

    @screen sm {
      @apply block;
    }
  }

  &__title {
    @apply w-full self-end font-title text-2xl leading-none text-white;
    grid-area: title;

    @screen sm {
      @apply text-right;
    }
  }

  &__links {
    @apply -mr-2 shrink-0 self-start justify-self-end invert;
    grid-area: links;
  }
}
</style>
