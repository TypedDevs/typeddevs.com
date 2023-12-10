<template>
  <NavigationBar />

  <div class="base-layout__container">
    <Content />
  </div>

  <FooterSection />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
import FooterSection from '@/components/TheFooter/FooterSection.vue'

export default defineComponent({
  components: {
    NavigationBar,
    FooterSection,
  },
})
</script>

<style lang="scss">
.base-layout {
  &__container {
    @apply container;
  }
}
</style>
