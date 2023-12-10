<template>
  <div class="project-card__card">
    <img
      class="project-card__logo"
      :src="project.logo"
      :alt="`Logo of ${project.name}`"
    />

    <strong class="project-card__name">
      {{ project.name }}
    </strong>

    <span class="project-card__description">
      {{ project.description }}
    </span>

    <SocialLinks
      class="project-card__links"
      :x-handle="project.xHandle"
      :git-hub-handle="project.gitHubHandle"
      :website="project.website"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import SocialLinks from '@/components/SocialLinks/SocialLinks.vue'
import { type Project } from '@/components/ProjectList/projects.data'

export default defineComponent({
  components: { SocialLinks },
  props: {
    project: {
      required: true,
      type: Object as PropType<Project>,
    },
  },
})
</script>

<style lang="scss">
.project-card {
  &__card {
    @apply grid gap-x-4 gap-y-2 bg-gray-100 p-4;
    grid-template-rows: auto auto 1fr;
    grid-template-columns: auto 1fr;
    grid-template-areas:
      'logo  name'
      'logo  links'
      'description  description';
  }

  &__logo {
    @apply h-20 w-20 object-contain;
    grid-area: logo;
  }

  &__name {
    @apply block;
    grid-area: name;
  }

  &__description {
    @apply block;
    grid-area: description;
  }

  &__links {
    @apply w-full self-center px-2;
    grid-area: links;
  }
}
</style>
