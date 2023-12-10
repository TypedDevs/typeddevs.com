<template>
  <div class="member-bard__card">
    <img
      :src="member.image"
      :alt="`Profile picture of ${member.name}`"
    />
    {{ member.name }}
    <SocialLinks
      :linked-in-handle="member.linkedinHandle"
      :x-handle="member.xHandle"
      :git-hub-handle="member.githubHandle"
      :website="member.website"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { type Member } from '@/components/TeamList/team.data'
import SocialLinks from '@/components/SocialLinks/SocialLinks.vue'

export default defineComponent({
  components: { SocialLinks },
  props: {
    member: {
      required: true,
      type: Object as PropType<Member>,
    },
  },
})
</script>

<style lang="scss">
.member-bard {
  &__card {
  }
}
</style>
