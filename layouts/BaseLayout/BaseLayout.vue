<template>
  <div class="base-layout__container">
    <div class="base-layout__content">
      <Content />
    </div>

    <NavigationBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'

export default defineComponent({
  components: { NavigationBar },
})
</script>

<style lang="scss">
.base-layout {
  &__container {
    @apply py-8;

    h1 {
      @apply mb-16 bg-clip-text text-center font-title text-8xl font-bold leading-tight text-transparent;

      background-image: linear-gradient(
        to bottom,
        theme('colors.brand.yellow'),
        theme('colors.brand.yellow') 36%,
        theme('colors.brand.orange') 36%,
        theme('colors.brand.orange') 52%,
        theme('colors.brand.red') 52%,
        theme('colors.brand.red') 68%,
        theme('colors.brand.maroon') 68%,
        theme('colors.brand.maroon') 84%,
        theme('colors.brand.gray') 84%,
        theme('colors.brand.gray')
      );
    }
  }

  &__content {
    @apply container;
  }
}
</style>
