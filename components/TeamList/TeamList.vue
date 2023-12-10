<template>
  <div class="team-list__list">
    <h2>Team</h2>

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
  }
}
</style>
