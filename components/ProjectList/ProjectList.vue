<template>
  <h2 class="project-list__title">Projects</h2>

  <div class="project-list__list">
    <ProjectCard
      v-for="project of projects"
      :key="project.name"
      :project="project"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { type Project } from '@/components/ProjectList/projects.data'
import ProjectCard from '@/components/ProjectList/ProjectCard.vue'

export default defineComponent({
  components: { ProjectCard },
  props: {
    projects: {
      required: true,
      type: Array as PropType<Project[]>,
    },
  },
})
</script>

<style lang="scss">
.project-list {
  &__list {
    @apply mb-16 grid gap-8;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  }

  &__title {
    @apply mb-8 text-3xl font-bold leading-none;
  }
}
</style>
