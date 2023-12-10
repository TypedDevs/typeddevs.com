<template>
  <h2 class="team-list__title">Team</h2>

  <div class="team-list__list">
    <MemberCard
      v-for="member of team"
      :key="member.name"
      :member="member"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { type Member } from '@/components/TeamList/team.data'
import MemberCard from '@/components/TeamList/MemberCard.vue'

export default defineComponent({
  components: { MemberCard },
  props: {
    team: {
      required: true,
      type: Array as PropType<Member[]>,
    },
  },
})
</script>

<style lang="scss">
.team-list {
  &__list {
    @apply mb-16 grid gap-8;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  }

  &__title {
    @apply mb-8 text-3xl font-bold leading-none;
  }
}
</style>
