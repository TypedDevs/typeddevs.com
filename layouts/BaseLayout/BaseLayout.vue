<template>
  <div class="base-layout__container">
    <NavigationBar />

    <div class="base-layout__content">
      <Content />
    </div>
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
      @apply my-8 bg-clip-text text-center font-title text-9xl font-bold leading-[1.125] text-transparent;

      background-image: linear-gradient(
        to bottom,
        theme('colors.brand.yellow'),
        theme('colors.brand.yellow') 20%,
        theme('colors.brand.orange') 20%,
        theme('colors.brand.orange') 40%,
        theme('colors.brand.red') 40%,
        theme('colors.brand.red') 60%,
        theme('colors.brand.maroon') 60%,
        theme('colors.brand.maroon') 80%,
        theme('colors.brand.gray') 80%,
        theme('colors.brand.gray')
      );
    }
  }

  &__content {
    @apply container;
  }
}
</style>
